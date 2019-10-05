const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegistration(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Name must be between the range of 2 - 40 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is requred. Please correct";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email you've entered is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter password";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 40 })) {
    errors.password = "Password must be between 6 - 40 Characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please confirm password";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passowrd does not matchh";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
