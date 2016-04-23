function padZero(number) {
    let phone;
    const { length } = number.toString();
    const isNumber = Number.isInteger(number);
  
    if (isNumber && length === 9) return phone = `0${number}`;
    if (isNumber && length === 12 || typeof number === 'string') {
      return phone = number.toString().replace(/\D/g, '');
    } return false;
  }

function validate(number) {
    let phone = padZero(number);
    const pattern = /^(251\d{9}|09\d{8}|011\d{7})$/g;
    return pattern.test(phone);
  }

  function parse(number) {
    const phone = (padZero(number)) ? padZero(number).replace(/\D/g, '') : false;
    if (!validate(phone)) return new Error('Invalid PhoneNumber');
    return phone;
  }

  function format(number) {
    const localFormat = /^(0\d{1})(\d{2})(\d{2})(\d{2})(\d{2})$/;
    const intFormat = /^(251)(\d{3})(\d{2})(\d{2})(\d{2})$/;
    const phone = parse(number);
    let readable, n;
  
    // needs cleanup
    [localFormat, intFormat].forEach((f) => {
      if (f.test(phone)) readable = phone.replace(f, '$1 $2 $3 $4 $5'); n = readable;
      if (/^0[^9]/.test(readable)) readable = `${n.slice(0, 4).replace(/\s/, '')} ${n.slice(4)}`;
    });
  
    return readable;
  }
  
  function toLocal(number) {
    let local;
    const phone = parse(number);
    if (/^\+?251/.test(phone)) local = phone.replace(/^\+?251/, '0');
    else return number;
    return local;
  }
  
  function toInternational(number) {
    let international;
    const phone = parse(number);
    if (/^(0|2)/.test(phone)) international = phone.replace(/^(0|2)/, '+251');
    else return phone;
    return international;
  }
  
  function isMobile(number) {
    const phone = parse(number);
    if (/^(2519|09)/.test(phone)) return true;
    return false;
  }
  
  function isLandline(number) {
    const phone = parse(number);
    if (/^(25111|011)/.test(phone)) return true;
    return false;
  }

  function isLocal(number) {
    const phone = parse(number);
    return /^0/.test(phone)
  }

  function isInternational(number) {
    const phone = parse(number);
    return /^\+?251/.test(phone);
  }

  module.exports = {
  validate, parse, format, toLocal, toInternational, isMobile, isLandline, isLocal, isInternational
};