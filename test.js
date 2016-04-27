const assert = require('assert');
const etphone = require('../index.js');

describe('etphone', () => {
  describe('Validate phone number', () => {
    it('Should validate mobile phone number ', () => {
      assert.equal(etphone.validate('0923686213'), true);
      assert.equal(etphone.validate('09236862'), false);
      assert.equal(etphone.validate('092368621377'), false);
    });

    it('Should validate landline number', () => {
      //add rural landline number
      assert.equal(etphone.validate('0115205476'), true);
      assert.equal(etphone.validate('2511147453'), false);
    });

    it('Should return false for Non-Ethiopian phone number', () => {
      assert.equal(etphone.validate('+59372823889'), false);
    });

    it('Should accept and validate number and string data type', () => {
      assert.equal(etphone.validate(0923686213), true);
      assert.equal(etphone.validate('0923686213'), true);
    });

    it('Should validate phone number in an international format', () => {
      assert.equal(etphone.validate('+251923686213'), true);
      assert.equal(etphone.validate('+251115205476'), true);
      assert.equal(etphone.validate('+25192368621'), false);
    });

    it('Should validate phone number with whitespace', () => {
      assert.equal(etphone.validate('09 23 68 62 13'), true);
    });

    it('Should validate phone number with non-numeric character', () => {
      assert.equal(etphone.validate('+(251)9-23-68-62-13'), true);
      assert.equal(etphone.validate('0923686Y13'), false);
    });

  });

  describe('Phone number parsing', () => {
    it('Should remove non-numeric characters ', () => {
      assert.equal(etphone.parse('011520547FR6'), '0115205476');
      assert.equal(etphone.parse('+(251)9-23-68-62-13'), '251923686213');
    });

    it('Should raise an error on invalid phone number', () => {
      assert.equal(etphone.parse('09 23 68 62'), 'Error: Invalid PhoneNumber');
    });

  });


});