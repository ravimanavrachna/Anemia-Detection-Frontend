export const addPatientDetailsValidation = (data) => {
    const errors = {};

    const mobileRegex = /^[6-9]\d{9}$/;
    const heightRegex = /^(\d{1,2}('|′)\d{0,2}("|″)?)$|^\d{2,3}(\.\d+)?\s?(cm)?$/i;

    if (!data.name?.trim()) errors.name = "Name is required";

    if (!data.employeeId?.trim()) errors.employeeId = "Employee ID is required";

    if (!data.height?.trim()) {
        errors.height = "Height is required";
    }
    if (!data.dob) errors.dob = "Date of birth is required";

    if (!data.weight) {
        errors.weight = "Weight is required";
    } else if (isNaN(data.weight)) {
        errors.weight = "Weight must be a number";
    }

    if (!data.bloodGroup?.trim()) errors.bloodGroup = "Blood group is required";

    if (!data.mobileNo?.trim()) {
        errors.mobileNo = "Mobile number is required";
    } else if (!mobileRegex.test(data.mobileNo)) {
        errors.mobileNo = "Invalid mobile number (must be 10 digits)";
    }

    if (!data.block?.trim()) errors.block = "Block is required";

    if (!data.role?.trim()) errors.role = "Role is required";

    if (!data.sex?.trim()) errors.sex = "Gender is required";


    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

export const step1validation=(data)=>{
  const errors = {};

  const base64ImageRegex = /^data:image\/(jpeg|jpg|png);base64,[A-Za-z0-9+/=\s]+$/;

  if (!data.left_palm?.trim()) {
    errors.left_palm = "Left palm image is required";
  } else if (!base64ImageRegex.test(data.left_palm)) {
    errors.left_palm = "Invalid left palm image format";
  }

  if (!data.right_palm?.trim()) {
    errors.right_palm = "Right palm image is required";
  } else if (!base64ImageRegex.test(data.right_palm)) {
    errors.right_palm = "Invalid right palm image format";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export const step2validation=(data)=>{
  const errors = {};

  const base64ImageRegex = /^data:image\/(jpeg|jpg|png);base64,[A-Za-z0-9+/=\s]+$/;

  if (!data.left_eye?.trim()) {
    errors.left_eye = "Left Eye image is required";
  } else if (!base64ImageRegex.test(data.left_eye)) {
    errors.left_eye = "Invalid left Eye image format";
  }
  if (!data.right_eye?.trim()) {
    errors.right_eye = "Right Eye image is required";
  } else if (!base64ImageRegex.test(data.right_eye)) {
    errors.right_eye = "Invalid right Eye image format";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
export const step3validation=(data)=>{
  const errors = {};

  const base64ImageRegex = /^data:image\/(jpeg|jpg|png);base64,[A-Za-z0-9+/=\s]+$/;

  if (!data.nail_image?.trim()) {
    errors.nail_image = "Nail image is required";
  } else if (!base64ImageRegex.test(data.nail_image)) {
    errors.nail_image = "Invalid Nail image format";
  }


  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}