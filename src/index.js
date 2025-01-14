const areaInfo = require('./areaCode');

/**
 * Adds zero in front of the input if its type is number
 * @param {string|number} number - Accepts both string and number
 * @returns {string}
 */
const addZero = number => {
  if (typeof number === 'string') return number.replace(/[ +\-()]/g, '');
  if (Number.isInteger(number)) return (/^251/.test(number)) ? `${number}` : `0${number}`;
};

/**
 * Checks whether given input is a valid Ethiopian phone number
 * @param {string} number - Phone number
 * @returns {boolean}
 */
const validate = number => {
  const pattern = /^((0|251)9\d{8}|(0|251)(11|2[25]|3[34]|4[67]|5[78])\d{7})$/;
  return pattern.test(addZero(number));
};

/**
 * Raises error if given phone number is incorrect
 * @param {string} number - Phone number
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
 * @param {string} number - Phone number
 * @returns {string} - Normalized phone number
 */
const parse = number => {
  let phone;
  if (addZero(number)) phone = addZero(number).replace(/\D/, '');
  if (!validate(phone)) phone = reportError(phone);
  return phone;
};

/**
 * Converts phone number into readable format
 * @param {string} number - Phone number
 * @returns {string} - Readable phone number
 */
const format = number => {
  const styles = [/^(0\d)(\d{2})(\d{2})(\d{2})(\d{2})$/, /^(251)(\d{3})(\d{2})(\d{2})(\d{2})$/]; // Local & International
  const landlineFormat = /^(0[^9]\d)(\d{3})(\d{2})(\d{2})$/;
  const phone = parse(number);

  let readable;
  if (!validate(phone)) return phone;

  styles.forEach((f) => { if (f.test(phone)) readable = phone.replace(f, '$1 $2 $3 $4 $5'); });
  if (/^0[^9]/.test(readable)) readable = phone.replace(landlineFormat, '$1 $2 $3 $4');

  return readable;
};

/**
 * Converts phone number to local | Ethiopian format
 * @param {string} number - Phone number
 * @returns {string} - local format phone number
 */
const toLocal = number => {
  const phone = parse(number);
  return /^\+?251/.test(phone) ? phone.replace(/^\+?251/, '0') : phone;
};

/**
 * Converts phone number to International format
 * @param {string} number - Phone number
 * @returns {string} - International phone number starting with +251
 */
const toInternational = number => {
  const phone = parse(number);
  return /^0|251/.test(phone) ? phone.replace(/^0|251/, '+251') : phone;
};

/**
 * Retrieve location data of given phone number
 * @param {string} number - Phone number
 * @returns {string} - Area info of given phone number
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
    if (/^091[145678]/.test(phone)) return areaInfo.MOBILE_CODE[mobileCode];

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
 * @param {string} number - Phone number
 * @returns {boolean}
 */
const isMobile = number => /^(2519|09)/.test(parse(number));

/**
 * Checks whether given number is a landline phone
 * @param {string} number - Phone number
 * @returns {boolean}
 */
const isLandline = number => /^(0|251)(11|2[25]|3[34]|4[67]|5[78])/.test(parse(number));

/**
 * Checks whether given number is in local | Ethiopian format
 * @param {string} number - Phone number
 * @returns {boolean}
 */
const isLocal = number => /^0/.test(parse(number));

/**
 * Checks whether given number is in international format
 * @param {string} number - Phone number
 * @returns {boolean}
 */
const isInternational = number => /^\+?251/.test(parse(number));

module.exports = {
  validate, parse, format, toLocal, toInternational, findArea, isMobile, isLandline, isLocal, isInternational,
};