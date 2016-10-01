const assert = require('assert');
const etPhone = require('../src/etPhone');

describe('etPhone', () => {
  describe('Validate phone number', () => {
    it('Should validate mobile phone number ', () => {
      assert.equal(etPhone.validate('0923686213'), true);
      assert.equal(etPhone.validate('09236862'), false);
      assert.equal(etPhone.validate('092368621377'), false);
    });

    it('Should validate landline number', () => {
      assert.equal(etPhone.validate('0115205476'), true);
      assert.equal(etPhone.validate('2511147453'), false);
      assert.equal(etPhone.validate('0465513883'), true);
    });

    it('Should accept and validate string and number data type', () => {
      assert.equal(etPhone.validate(parseFloat('0923686213')), true);
      assert.equal(etPhone.validate(parseFloat('251923686213')), true);
      assert.equal(etPhone.validate('0923686213'), true);
    });
    it('Should validate phone number in an international format', () => {
      assert.equal(etPhone.validate('+251923686213'), true);
      assert.equal(etPhone.validate('+251115205476'), true);
      assert.equal(etPhone.validate('+25192368621'), false);
    });

    it('Should validate phone number with whitespace', () => {
      assert.equal(etPhone.validate('09 23 68 62 13'), true);
    });

    it('Should validate phone number with non-numeric character', () => {
      assert.equal(etPhone.validate('+(251)9-23-68-62-13'), true);
      assert.equal(etPhone.validate('092&^3686Y13'), false);
    });
  });

  describe('Parse phone number', () => {
    it('Should remove non-numeric characters ', () => {
      assert.equal(etPhone.parse('+(251)9-23-68-62-13'), '251923686213');
    });

    it('Should raise an error on invalid phone number', () => {
      assert.equal(etPhone.parse('09236862'), 'TypeError: Phone number too short');
      assert.equal(etPhone.parse('2519236862'), 'TypeError: Phone number too short');
      assert.equal(etPhone.parse('092368621377'), 'TypeError: Phone number too long');
      assert.equal(etPhone.parse('25192368621377'), 'TypeError: Phone number too long');
      assert.equal(etPhone.parse('+59372823889'), 'TypeError: Not Ethiopian phone number');
    });
  });

  describe('Format phone number', () => {
    it('Should format mobile phone number', () => {
      assert.equal(etPhone.format('0923686213'), '09 23 68 62 13');
    });

    it('Should format landline number', () => {
      assert.equal(etPhone.format('0115205476'), '011 520 54 76');
    });

    it('Should format international phone number', () => {
      assert.equal(etPhone.format('251923686213'), '251 923 68 62 13');
    });

    it('Should raise an error on formatting invalid phone number', () => {
      assert.equal(etPhone.format('0923683434462'), 'TypeError: Phone number too long');
    });
  });

  describe('Find the address of a given phone number', () => {
    it('Should find the region of a given phone number in Ethiopia', () => {
      assert.equal(etPhone.findArea('0223319750'), 'Asela, South East Ethiopia');
      assert.equal(etPhone.findArea('0587764412'), 'Dejen, North West Ethiopia');
      assert.equal(etPhone.findArea('0465513883'), 'Wollayta, South Ethiopia');
      assert.equal(etPhone.findArea('0348398472'), 'North Ethiopia');
    });

    it('Should find the specific area if it is an Addis Ababa landline number', () => {
      assert.equal(etPhone.findArea('0113215476'), 'Mekanisa, South West Addis Ababa');
      assert.equal(etPhone.findArea('0112702784'), 'Asko, Western Addis Ababa');
    });

    it('Should find the approximate location of where a mobile sim card was bought', () => {
      assert.equal(etPhone.findArea('0918458597'), 'North West Ethiopia');
      assert.equal(etPhone.findArea('0916771836'), 'South Ethiopia');
    });

    it('Should return not found message when specific area code not found', () => {
      assert.equal(etPhone.findArea('0922784726'), 'Unable to find area information');
    });

    it('Should return error message when phone is invalid', () => {
      assert.equal(etPhone.findArea('093478392817'), 'TypeError: Phone number too long');
    });
  });

  describe('Convert to local format', () => {
    it('Should covert an international style mobile number to local format', () => {
      assert.equal(etPhone.toLocal('+251923686213'), '0923686213');
    });

    it('Should covert an international style landline number to local format', () => {
      assert.equal(etPhone.toLocal('+251115205476'), '0115205476');
    });
  });

  describe('Convert to international format', () => {
    it('Should covert local mobile number to international format', () => {
      assert.equal(etPhone.toInternational('0923686213'), '+251923686213');
    });

    it('Should covert local landline number to international format', () => {
      assert.equal(etPhone.toInternational('0115205476'), '+251115205476');
    });
  });

  describe('Check if number is a mobile phone', () => {
    it('Should check if number is a mobile phone ', () => {
      assert.equal(etPhone.isMobile('0923686213'), true);
      assert.equal(etPhone.isMobile('0115205476'), false);
    });
  });

  describe('Check if number is a landline number', () => {
    it('Should check if number is a landline number', () => {
      assert.equal(etPhone.isLandline('0923686213'), false);
      assert.equal(etPhone.isLandline('0115205476'), true);
    });
  });

  describe('Check if number is in local | Ethiopian format', () => {
    it('Should check if number is in local format', () => {
      assert.equal(etPhone.isLocal('0923686213'), true);
      assert.equal(etPhone.isLocal('+251115205476'), false);
    });
  });

  describe('Check if number is in international format', () => {
    it('Should check if number is in international format', () => {
      assert.equal(etPhone.isInternational('0923686213'), false);
      assert.equal(etPhone.isInternational('+251115205476'), true);
    });
  });
});
