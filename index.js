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
