import * as yup from "yup";
import {
  emailField,
  fullNameField,
  lastNameField,
  passwordField,
  phoneNumberField,
  role,
} from "../../yupFields";

export const registrationSchema = yup.object().shape({
  role: role.required(),
  userName: fullNameField.required(),
  lastName: lastNameField.required(),
  email: emailField.required(),
  phoneNumber: phoneNumberField,
  password: passwordField.required(),
});
