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
    const style = [localFormat, intFormat];
    const parsedPhone = parse(phone);
    let readable;
  
    style.forEach((f) => {
      if (f.test(parsedPhone)) readable = parsedPhone.replace(f, '$1 $2 $3 $4 $5');
    });
    return readable;
  }