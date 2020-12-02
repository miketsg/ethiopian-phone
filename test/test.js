const assert = require('assert');
const etPhone = require('../src/index');

describe('etPhone', () => {
  describe('Validate phone number', () => {
    it('Should validate mobile phone number ', () => {
      assert.deepStrictEqual(etPhone.validate('0923686213'), true);
      assert.deepStrictEqual(etPhone.validate('09236862'), false);
      assert.deepStrictEqual(etPhone.validate('092368621377'), false);
    });

    it('Should validate landline number', () => {
      assert.deepStrictEqual(etPhone.validate('0115205476'), true);
      assert.deepStrictEqual(etPhone.validate('2511147453'), false);
      assert.deepStrictEqual(etPhone.validate('0465513883'), true);
    });

    it('Should accept and validate string and number data type', () => {
      assert.deepStrictEqual(etPhone.validate(parseFloat('0923686213')), true);
      assert.deepStrictEqual(etPhone.validate(parseFloat('251923686213')), true);
      assert.deepStrictEqual(etPhone.validate('0923686213'), true);
    });
    it('Should validate phone number in an international format', () => {
      assert.deepStrictEqual(etPhone.validate('+251923686213'), true);
      assert.deepStrictEqual(etPhone.validate('+251115205476'), true);
      assert.deepStrictEqual(etPhone.validate('+25192368621'), false);
    });

    it('Should validate phone number with whitespace', () => {
      assert.deepStrictEqual(etPhone.validate('09 23 68 62 13'), true);
    });

    it('Should validate phone number with non-numeric character', () => {
      assert.deepStrictEqual(etPhone.validate('+(251)9-23-68-62-13'), true);
      assert.deepStrictEqual(etPhone.validate('092&^3686Y13'), false);
    });
  });

  describe('Parse phone number', () => {
    it('Should remove non-numeric characters ', () => {
      assert.deepStrictEqual(etPhone.parse('+(251)9-23-68-62-13'), '251923686213');
    });

    it('Should raise an error on invalid phone number', () => {
      assert.deepStrictEqual(etPhone.parse('09236862'), new TypeError('Phone number too short'));
      assert.deepStrictEqual(etPhone.parse('2519236862'), new TypeError('Phone number too short'));
      assert.deepStrictEqual(etPhone.parse('092368621377'), new TypeError('Phone number too long'));
      assert.deepStrictEqual(etPhone.parse('25192368621377'), new TypeError('Phone number too long'));
      assert.deepStrictEqual(etPhone.parse('+59372823889'), new TypeError('Not Ethiopian phone number'));
    });
  });

  describe('Format phone number', () => {
    it('Should format mobile phone number', () => {
      assert.deepStrictEqual(etPhone.format('0923686213'), '09 23 68 62 13');
    });

    it('Should format landline number', () => {
      assert.deepStrictEqual(etPhone.format('0115205476'), '011 520 54 76');
    });

    it('Should format international phone number', () => {
      assert.deepStrictEqual(etPhone.format('251923686213'), '251 923 68 62 13');
    });

    it('Should raise an error on formatting invalid phone number', () => {
      assert.deepStrictEqual(etPhone.format('0923683434462'), new TypeError('Phone number too long'));
    });
  });

  describe('Find the address of a given phone number', () => {
    it('Should find the region of a given phone number in Ethiopia', () => {
      assert.deepStrictEqual(etPhone.findArea('0223319750'), 'Asela, South East Ethiopia');
      assert.deepStrictEqual(etPhone.findArea('0587764412'), 'Dejen, North West Ethiopia');
      assert.deepStrictEqual(etPhone.findArea('0465513883'), 'Wollayta, South Ethiopia');
      assert.deepStrictEqual(etPhone.findArea('0348398472'), 'North Ethiopia');
    });

    it('Should find the specific area if it is an Addis Ababa landline number', () => {
      assert.deepStrictEqual(etPhone.findArea('0113215476'), 'Mekanisa, South West Addis Ababa');
      assert.deepStrictEqual(etPhone.findArea('0112702784'), 'Asko, Western Addis Ababa');
    });

    it('Should find the approximate location of where a mobile sim card was bought', () => {
      assert.deepStrictEqual(etPhone.findArea('0918458597'), 'North West Ethiopia');
      assert.deepStrictEqual(etPhone.findArea('0916771836'), 'South Ethiopia');
    });

    it('Should return not found message when specific area code not found', () => {
      assert.deepStrictEqual(etPhone.findArea('0922784726'), 'Unable to find area information');
    });

    it('Should return error message when phone is invalid', () => {
      assert.deepStrictEqual(etPhone.findArea('093478392817'), new TypeError('Phone number too long'));
    });
  });

  describe('Convert to local format', () => {
    it('Should covert an international style mobile number to local format', () => {
      assert.deepStrictEqual(etPhone.toLocal('+251923686213'), '0923686213');
    });

    it('Should covert an international style landline number to local format', () => {
      assert.deepStrictEqual(etPhone.toLocal('+251115205476'), '0115205476');
    });
  });

  describe('Convert to international format', () => {
    it('Should covert local mobile number to international format', () => {
      assert.deepStrictEqual(etPhone.toInternational('0923686213'), '+251923686213');
    });

    it('Should covert local landline number to international format', () => {
      assert.deepStrictEqual(etPhone.toInternational('0115205476'), '+251115205476');
    });
  });

  describe('Check if number is a mobile phone', () => {
    it('Should check if number is a mobile phone ', () => {
      assert.deepStrictEqual(etPhone.isMobile('0923686213'), true);
      assert.deepStrictEqual(etPhone.isMobile('0115205476'), false);
    });
  });

  describe('Check if number is a landline number', () => {
    it('Should check if number is a landline number', () => {
      assert.deepStrictEqual(etPhone.isLandline('0923686213'), false);
      assert.deepStrictEqual(etPhone.isLandline('0115205476'), true);
    });
  });

  describe('Check if number is in local | Ethiopian format', () => {
    it('Should check if number is in local format', () => {
      assert.deepStrictEqual(etPhone.isLocal('0923686213'), true);
      assert.deepStrictEqual(etPhone.isLocal('+251115205476'), false);
    });
  });

  describe('Check if number is in international format', () => {
    it('Should check if number is in international format', () => {
      assert.deepStrictEqual(etPhone.isInternational('0923686213'), false);
      assert.deepStrictEqual(etPhone.isInternational('+251115205476'), true);
    });
  });
});
