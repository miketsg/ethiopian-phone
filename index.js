/**
 * Adds zero in front of the input if the type is number
 * @param {(string|number)} number - Accepts both string and number type
 * @returns {(string|boolean)}
 */
function padZero(number) {
    let phone;
    const { length } = number.toString();
    const isNumber = Number.isInteger(number);

    if (isNumber && length === 9) return phone = `0${number}`;
    if (isNumber && length === 12 || typeof number === 'string') {
        return phone = number.toString().replace(/[ +\-()]/g, '');
    } return false;
}

/**
 * Checks whether given number is a valid Ethiopian phone number
 * @param {string} number - Phone number
 * @returns {boolean}
 */
function validate(number) {
    let phone = padZero(number);
    const pattern = /^(251\d{9}|09\d{8}|011\d{7})$/g;
    return pattern.test(phone);
}

/**
* Cleans up | normalizes phone number
* @param {string} number
* @returns {string}
*/
function parse(number) {
    const phone = (padZero(number)) ? padZero(number).replace(/\D/g, '') : false;
    if (!validate(phone)) return new Error('Invalid PhoneNumber');
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

    // needs cleanup
    [localFormat, intFormat].forEach((f) => {
        if (f.test(phone)) readable = phone.replace(f, '$1 $2 $3 $4 $5'); n = readable;
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
    return (/^0|251/.test(phone)) ? international = phone.replace(/^0|251/, '+251') : phone;
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
 * Checks whether given number is a landline
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
    return /^0/.test(phone)
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
    validate, parse, format, toLocal, toInternational, isMobile, isLandline, isLocal, isInternational
};