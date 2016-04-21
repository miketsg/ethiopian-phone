function validate(phone) {
    const pattern = /^09\d{8}$|^011\d{7}$/;
    phone = phone.replace(/[ \+\-()]/g, "");
    if (!phone || phone.length < 10 || phone.length > 13) return false;
    return pattern.test(phone);
  }