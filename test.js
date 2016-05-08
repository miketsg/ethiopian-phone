const assert = require('assert');
const etPhone = require('../index.js');

describe('etPhone', () => {
  describe('Validate phone number', () => {
    it('Should validate mobile phone number ', () => {
      assert.equal(etPhone.validate('0923686213'), true);
      assert.equal(etPhone.validate('09236862'), false);
      assert.equal(etPhone.validate('092368621377'), false);
    });

    it('Should validate landline number', () => {
      // add rural landline number
      assert.equal(etPhone.validate('0115205476'), true);
      assert.equal(etPhone.validate('2511147453'), false);
    });

    it('Should return false for Non-Ethiopian phone number', () => {
      assert.equal(etPhone.validate('+59372823889'), false);
    });

    it('Should accept and validate number and string data type', () => {
      assert.equal(etPhone.validate(0923686213), true);
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
      assert.equal(etPhone.validate('0923686Y13'), false);
    });
  });

  describe('Parse phone number', () => {
    it('Should remove non-numeric characters ', () => {
      assert.equal(etPhone.parse('011520547FR6'), '0115205476');
      assert.equal(etPhone.parse('+(251)9-23-68-62-13'), '251923686213');
    });

    it('Should raise an error on invalid phone number', () => {
      assert.equal(etPhone.parse('09 23 68 62'), 'Error: Invalid Phonenumber');
    });
  });

  describe('Format phone number', () => {
    it('Should format mobile phone number', () => {
      assert.equal(etPhone.format('0923686213'), '09 23 68 62 13');
    });

    it('Should format landline number', () => {
      assert.equal(etPhone.format('0115205476'), '011 5 20 54 76');
    });

    it('Should format international phone number', () => {
      assert.equal(etPhone.format('251923686213'), '251 923 68 62 13');
    });

    it('Should raise an error on invalid phone number', () => {
      assert.equal(etPhone.format('0923683434462'), 'Error: Invalid Phonenumber');
    });
  });

  describe('Find the address of a given phone number', () => {
    it('Should find the region of a given phone number in Ethiopia', () => {
      assert.equal(etPhone.findArea('0223319750'), 'Asela, South East Ethiopia');
      assert.equal(etPhone.findArea('0587764412'), 'Dejen, North West Ethiopia');
      assert.equal(etPhone.findArea('0465513883'), 'Wollayta, South Ethiopia');
    });

    it('Should find the specific area if it is an Addis Ababa landline number', () => {
      assert.equal(etPhone.findArea('0113215476'), 'Mekanisa, South West Addis Ababa');
      assert.equal(etPhone.findArea('0112702784'), 'Asko, Western Addis Ababa');
    });

    it('Should find the approximate location of where a  mobile sim card was bought', () => {
      assert.equal(etPhone.findArea('0918458597'), 'North West Ethiopia');
      assert.equal(etPhone.findArea('0916771836'), 'South Ethiopia');
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
