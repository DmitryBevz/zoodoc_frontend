import * as yup from "yup"
import {emailField, passwordField} from "../../yupFields";

export const loginSchema = yup.object().shape({
    email: emailField,
    password: passwordField
})

