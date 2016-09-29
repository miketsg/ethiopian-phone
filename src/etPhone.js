const areaInfo = require('./areaCode');

/**
 * Adds zero in front of the input if type is number
 * @param {(string|number)} number - Accepts both string and number type
 * @returns {(string|boolean)}
 */

const addZero = number => {
  let phone;
  if (typeof number === 'string') return number.replace(/[ +\-()]/g, '');

  if (Number.isInteger(number)) {
    const checkLength = x => number.toString().length === x;
    if (checkLength(9)) return phone = `0${number}`;
    if (checkLength(12)) return phone = number.toString();
  }
  return false;
};

/**
 * Checks whether given input is a valid Ethiopian phone number
 * @param {string} number - Phone number
 * @returns {boolean}
 */
const validate = number => {
  const phone = addZero(number);
  const pattern = /^((0|251)9\d{8}|(0|251)(11|2[25]|3[34]|4[67]|5[78])\d{7})$/g;
  return pattern.test(phone);
};

/**
 * Raises error if given phone number is incorrect
 * @param {string} number - phone number
 * @returns {Error}
 */
const reportError = number => {
  const phone = number;
  const err = ['Not Ethiopian phone number', 'Phone number too long', 'Phone number too short'];

  const long = (x, y) => x.test(phone) && phone.length > y;
  const short = (x, y) => x.test(phone) && phone.length < y;

  if (!/^(0|251)[123459]/.test(phone)) return new TypeError(err[0]);
  if (long(/^0/, 10) || long(/^251/, 12)) return new TypeError(err[1]);
  if (short(/^0/, 10) || short(/^251/, 12)) return new TypeError(err[2]);
};

/**
 * Cleans up & normalizes phone number
 * @param {string} number
 * @returns {string}
 */
const parse = number => {
  let phone;
  if (addZero(number)) phone = addZero(number).replace(/\D/g, '');
  if (!validate(phone)) phone = reportError(phone);
  return phone;
};

/**
 * Converts phone number into a readable format
 * @param {string} number
 * @returns {string}
 */
const format = number => {
  const localFormat = /^(0\d)(\d{2})(\d{2})(\d{2})(\d{2})$/;
  const internationalFormat = /^(251)(\d{3})(\d{2})(\d{2})(\d{2})$/;
  let phone = parse(number);
  let readable, n;

  if (!validate(phone)) return phone;

  // needs cleanup
  [localFormat, internationalFormat].forEach((f) => {
    if (f.test(phone)) readable = phone.replace(f, '$1 $2 $3 $4 $5');
    n = readable;
    if (/^0[^9]/.test(readable)) readable = `${n.slice(0, 4).replace(/\s/, '')} ${n.slice(4)}`;
  });
  return readable;
};

/**
 * Converts phone number to local Ethiopian format
 * @param {string} number
 * @returns {string}
 */
const toLocal = number => {
  let phone = parse(number);
  return (/^\+?251/.test(phone)) ? phone = phone.replace(/^\+?251/, '0') : phone;
};

/**
 * Converts phone number to International format
 * @param {string} number
 * @returns {string} international phone number starting with +251
 */
const toInternational = number => {
  let phone = parse(number);
  return (/^0|251/.test(phone)) ? phone = phone.replace(/^0|251/, '+251') : phone;
};

/**
 * Retrieve location data of given phone number
 * @param {string} number
 * @returns {string} returns area of given phone number
 */
const findArea = number => {
  const phone = toLocal(number);
  if (!validate(phone)) return phone;

  const sub = (x, y) => phone.substring(x, y);
  const [areaCode, siteCode, mobileCode] = [sub(1, 3), sub(3, 6), sub(2, 4)];

  let addisRegion = areaInfo.AA_REGION[sub(3, 4)];
  addisRegion = (addisRegion === undefined) ? '' : `${addisRegion} `;

  let region = `${addisRegion}${areaInfo.ET_REGION[areaCode]}`;
  let site = areaInfo.AA_SITES[siteCode];

  try {
    if (/^091[145678]/.test(phone)) return region = areaInfo.MOBILE_CODE[mobileCode];

    if (areaCode !== '11') {
      region = areaInfo.ET_REGION[areaCode];
      site = areaInfo[region][siteCode];
    }

    site = (site === undefined) ? '' : `${site}, `;

  } catch (err) {
    return 'Unable to find area information';
  }

  return site + region;
};

/**
 * Checks whether given number is a mobile phone
 * @param {string} number
 * @returns {boolean}
 */
const isMobile = number => /^(2519|09)/.test(parse(number));

/**
 * Checks whether given number is a landline phone
 * @param {string} number
 * @returns {boolean}
 */
// add regional numbers
const isLandline = number => /^(25111|011)/.test(parse(number));

/**
 * Checks whether given number is in local/Ethiopian format
 * @param {string} number
 * @returns {boolean}
 */
const isLocal = number => /^0/.test(parse(number));

/**
 * Checks whether given number is in international format
 * @param {string} number
 * @returns {boolean}
 */
const isInternational = number => /^\+?251/.test(parse(number));

module.exports = {
  validate, parse, format, toLocal, toInternational, findArea, isMobile, isLandline, isLocal, isInternational,
};