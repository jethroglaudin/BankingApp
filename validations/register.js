const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegistration(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
