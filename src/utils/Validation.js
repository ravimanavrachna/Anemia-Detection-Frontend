export const onkeyDownforSpecialCharcter = (e) => {
    if (
      e.key === 'e' ||
      e.key === 'E' ||
      e.key === '--' ||
      e.key === '+' ||
      e.key === '!' ||
      e.key === '@' ||
      e.key === '#' ||
      e.key === '$' ||
      e.key === '%' ||
      e.key === '^' ||
      e.key === '&' ||
      e.key === '*' ||
      e.key === '(' ||
      e.key === ')' ||
      e.key === '_' ||
      e.key === '' ||
      e.key === '<' ||
      e.key === '>' ||
      e.key === '/' ||
      e.key == ',' ||
      e.key == '=' ||
      e.key == ':' ||
      e.key == ';' ||
      e.key == '"' ||
      e.key == "'" ||
      e.key === '[' ||
      e.key === ']' ||
      e.key === '{' ||
      e.key === '}' ||
      e.key === '?' ||
      e.key === '|' ||
      e.key === '-' ||
      e.key === '\\' ||
      e.key === '`' ||
      e.key === '~' ||
      e.key === 'A' ||
      e.key === 'B' ||
      e.key === 'C' ||
      e.key === 'D' ||
      e.key === 'E' ||
      e.key === 'F' ||
      e.key === 'G' ||
      e.key === 'H' ||
      e.key === 'I' ||
      e.key === 'J' ||
      e.key === 'K' ||
      e.key === 'L' ||
      e.key === 'M' ||
      e.key === 'N' ||
      e.key === 'O' ||
      e.key === 'P' ||
      e.key === 'Q' ||
      e.key === 'R' ||
      e.key === 'S' ||
      e.key === 'T' ||
      e.key === 'U' ||
      e.key === 'V' ||
      e.key === 'W' ||
      e.key === 'X' ||
      e.key === 'Y' ||
      e.key === 'Z' ||
      e.key === 'a' ||
      e.key === 'b' ||
      e.key === 'c' ||
      e.key === 'd' ||
      e.key === 'e' ||
      e.key === 'f' ||
      e.key === 'g' ||
      e.key === 'h' ||
      e.key === 'i' ||
      e.key === 'j' ||
      e.key === 'k' ||
      e.key === 'l' ||
      e.key === 'm' ||
      e.key === 'n' ||
      e.key === 'o' ||
      e.key === 'p' ||
      e.key === 'q' ||
      e.key === 'r' ||
      e.key === 's' ||
      e.key === 't' ||
      e.key === 'u' ||
      e.key === 'v' ||
      e.key === 'w' ||
      e.key === 'x' ||
      e.key === 'y' ||
      e.key === 'z'
    ) {
      e.preventDefault() // Prevent the default behavior (i.e., typing 'e' or '-')
    }
  }

 
  export const validateForm = (formData) => {
    const errors = {};
  
    // First Name validation
    if (!formData.name) {
      errors.name = "First name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.firstname)) {
      errors.name = "Only alphabets and spaces are allowed";
    }
    if (!formData.fatherHusbandCareName) {
      errors.fatherHusbandCareName = "Father / Husband name is required";
    } 
    if (!formData.dob) {
      errors.dob = "Date of Birth is required";
    } 
    if (!formData.gender) {
      errors.gender = "Gender is required";
    } 
    if (!formData.state) {
      errors.state = "State is required";
    } 
    if (!formData.district) {
      errors.district = "District is required";
    } 
    if (!formData.villageCity) {
      errors.villageCity = "Village / City is required";
    } 

    if (!formData.pinCode) {
      errors.pinCode = "PIN Code is required";
    } 
    if (!formData.esiNumber) {
      errors.esiNumber = "ESI Number is required";
    } 

    if (!formData.name) {
      errors.name = "First name is required";
    } 
    if (!formData.name) {
      errors.name = "First name is required";
    } 

  
    // Mobile Number validation
    if (!formData.mobileNumber) {
      errors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile number must be 10 digits";
    }
  
    // Aadhar Number validation
    if (formData.aadharNumber.replace(/\s/g, "").length !== 12) {
      errors.aadharNumber = "Aadhar number must be exactly 12 digits";
    }
    
  
    return errors;
  };


  export const errorMessages = {
      1: "❌ Creation failed (Fingerprint reader not correctly installed or driver files error).",
      2: "❌ Function failed (Wrong type of fingerprint reader or not correctly installed).",
      3: "⚠️ Internal error (Invalid parameters to sensor API).",
      5: "❌ DLL load failed.",
      6: "❌ DLL load failed for driver.",
      7: "❌ DLL load failed for algorithm.",
      51: "⚠️ System file load failure.",
      52: "❌ Sensor chip initialization failed.",
      53: "⚠️ Sensor line dropped.",
      54: "⚠️ Timeout.",
      55: "❌ Please connect the Fingerprint Device.",
      56: "❌ Driver load failed.",
      57: "⚠️ Wrong image.",
      58: "⚠️ Lack of bandwidth.",
      59: "⚠️ Device busy.",
      60: "⚠️ Cannot get serial number of the device.",
      61: "⚠️ Unsupported device.",
      101: "⚠️ Very low minutiae count.",
      102: "❌ Wrong template type.",
      103: "❌ Invalid template.",
      104: "❌ Invalid template.",
      105: "⚠️ Could not extract features.",
      106: "❌ Match failed.",
      1000: "❌ No memory available.",
      2000: "⚠️ Internal error.",
      3000: "⚠️ Internal error extended.",
      4000: "❌ Invalid parameter passed to service.",
      6000: "❌ Certificate error - Cannot decode.",
      10001: "❌ License error.",
      10002: "❌ Invalid domain.",
      10003: "❌ License expired.",
      10004: "⚠️ WebAPI may not have received the origin header from the browser.",
    };
  
  
 
  