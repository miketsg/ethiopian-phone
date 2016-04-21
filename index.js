function validate(phone) {
    const pattern = /^09\d{8}$|^011\d{7}$/;
    phone = phone.replace(/[ \+\-()]/g, "").toString();;
    if (!phone || phone.length < 10 || phone.length > 13) return false;
    return pattern.test(phone);
  }

  function parse(phone) {
    phone = phone.replace(/\D/g, '');
    if (!validate(phone)) return false;
    return phone;
  }

  function format(phone) {
    const localFormat = /^(0\d{1})(\d{2})(\d{2})(\d{2})(\d{2})$/;
    const intFormat = /^(251)(\d{3})(\d{2})(\d{2})(\d{2})$/;
    const parsedPhone = parse(phone);
    let readable, n;

    [localFormat, intFormat].forEach((f) => {
      if (f.test(parsedPhone)) readable = parsedPhone.replace(f, '$1 $2 $3 $4 $5'); n = readable;
       if (/^0[^9]/.test(readable)) readable = `${n.slice(0, 4).replace(/\s/, '')} ${n.slice(4)}`;
    });
    return readable;
  }

  function localize(phone) {
    let localized;
    if (!validate(phone)) return false;
    if (/^\+?251/.test(phone)) localized = phone.replace(/^\+?251/, '0');
    else return phone;
    return localized;
  }

  function toInternational(phone) {
    let international;
    if (!validate(phone)) return false;
    if (/^(0|2)/.test(phone)) international = phone.replace(/^(0|2)/, '+251');
    else return phone;
    return international;
  }

  function isMobile(phone) {
    if (!validate(phone)) return false;
    const parsedPhone = parse(phone);
    if (/^(2519|09)/.test(parsedPhone)) return true;
    return false;
  }
  
  function isLandline(phone) {
    if (!validate(phone)) return false;
    const parsedPhone = parse(phone);
    // add regional numbers
    if (/^(25111|011)/.test(parsedPhone)) return true;
    return false;
  }
