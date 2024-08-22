function Validation(values) {
  let error = {};
  
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  // Email validation
  if (values.email === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";  // Set to empty string if valid
  }

  // Password validation
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password didn't match";
  } else {
    error.password = "";  // Set to empty string if valid
  }

  // Security answer validation
  if (values.fpanswer === "") {
    error.fpanswer = "Answer should not be empty";
  } else {
    error.fpanswer = "";  // Set to empty string if valid
  }

  console.log(error);
  return error;
}

export default Validation;
