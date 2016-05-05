const areaInfo = require('./areacode');

/**
 * Adds zero in front of the input if the type is number
 * @param {(string|number)} number - Accepts both string and number type
 * @returns {(string|boolean)}
 */
function addZero(number) {
  let phone;
  const { length } = number.toString();
  const isNumber = Number.isInteger(number);

  if (isNumber && length === 9) return (phone = `0${number}`);
  if ((isNumber && length === 12) || typeof number === 'string') {
    return phone = number.toString().replace(/[ +\-()]/g, '')
  }
  return false;
}

/**
 * Checks whether given number is a valid Ethiopian phone number
 * @param {string} number - Phone number
 * @returns {boolean}
 */
function validate(number) {
  let phone = addZero(number);
  const pattern = /^(251\d{9}|09\d{8}|011\d{7}|0(2[25]|3[34]|4[67]|5[78])\d{7})$/g;
  return pattern.test(phone);
}

/**
 * Cleans up | normalizes phone number
 * @param {string} number
 * @returns {string}
 */
function parse(number) {
  const phone = addZero(number) ? addZero(number).replace(/\D/g, '') : false;
  if (!validate(phone)) return new Error('Invalid Phonenumber');
  return phone;
}

/**
 * Converts given phone number into a readable format
 * @param {string} number
 * @returns {string}
 */
function format(number) {
  const localFormat = /^(0\d)(\d{2})(\d{2})(\d{2})(\d{2})$/;
  const internationalFormat = /^(251)(\d{3})(\d{2})(\d{2})(\d{2})$/;
  const phone = parse(number);
  let readable, n;

  if (!validate(phone)) return new Error('Invalid Phonenumber');

  // needs cleanup
  [localFormat, internationalFormat].forEach((f) => {
    if (f.test(phone)) readable = phone.replace(f, '$1 $2 $3 $4 $5');
    n = readable;
    if (/^0[^9]/.test(readable)) readable = `${n.slice(0, 4).replace(/\s/, '')} ${n.slice(4)}`;
  });

  return readable;
}

/**
 * Converts phone number to local Ethiopian format
 * @param {string} number
 * @returns {string}
 */
function toLocal(number) {
  let local;
  const phone = parse(number);
  if (/^\+?251/.test(phone)) local = phone.replace(/^\+?251/, '0');
  else return number;
  return local;
}

/**
 * Converts phone number to International format
 * @param {string} number
 * @returns {string}
 */
function toInternational(number) {
  let international;
  const phone = parse(number);
  return /^0|251/.test(phone)
    ? (international = phone.replace(/^0|251/, '+251'))
    : phone;
}

/**
 * Retrieve location data of given phone number
 * @param {string} number
 * @returns {string}
 */
function findArea(number) {
  const phone = toLocal(number);
  if (!validate(phone)) return new Error('Invalid Phonenumber');

  const areaCode = phone.substring(1, 3);
  const zoneCode = phone.substring(3, 4);
  const siteCode = phone.substring(3, 6);
  const mobileCode = phone.substring(2, 4);

  let region = areaInfo.AA_REGION[zoneCode];
  let site = areaInfo.AA_SITES[siteCode];

  try {
    if (/^091[145678]/.test(phone)) {
      return (region = areaInfo.MOBILE_CODE[mobileCode]);
    }

    if (areaCode !== '11') {
      region = areaInfo.REGION[areaCode];
      site = areaInfo[region][siteCode];
    }

    site = (site === undefined) ? '' : `${site}, `;
    if (region === undefined) throw new Error();
  } catch (err) {
    return 'Unable to find area information';
  }

  const area = `${site}${region}`;
  return area;
}

/**
 * Checks whether given number is a mobile sim
 * @param {string} number
 * @returns {boolean}
 */
function isMobile(number) {
  const phone = parse(number);
  if (/^(2519|09)/.test(phone)) return true;
  return false;
}
/**
 * Checks whether given number is a landline phone
 * @param {string} number
 * @returns {boolean}
 */
function isLandline(number) {
  const phone = parse(number);
  if (/^(25111|011)/.test(phone)) return true;
  return false;
}

/**
 * Checks whether given number is in local/Ethiopian format
 * @param {string} number
 * @returns {boolean}
 */
function isLocal(number) {
  const phone = parse(number);
  return /^0/.test(phone);
}
/**
 * Checks whether given number is in international format
 * @param {string} number
 * @returns {boolean}
 */
function isInternational(number) {
  const phone = parse(number);
  return /^\+?251/.test(phone);
}

module.exports = {
 validate, parse, format, toLocal, toInternational, findArea, isMobile, isLandline, isLocal, isInternational,
};
