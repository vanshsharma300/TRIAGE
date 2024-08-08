function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    // console.log("signup validation console", values);

    if(values)

    if (values.email === "") {
      error.email = "Email should not be empty"
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email didn't match"
    } else {
      error.mail = ""
    }
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password didn't match";
    } else {
      error.password = " "
    }

    if (values.fpanswer === "") {
      error.fpanswer = "Answer should not be empty";
   console.log(error)
    return error;
  }

}
  
  export default Validation;
  