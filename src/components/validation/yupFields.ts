import * as yup from "yup";

// REGEX
export const phoneNumberOption = /^[+]?\d{6,100}/;
export const passwordOption = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*_#?&]*$/;

// FIELDS
export const role = yup.string().required("Вкажіть роль");
export const lastNameField = yup.string().min(3, "Мінімум 3 символи").required("Будь ласка введіть Ваше імʼя");
export const fullNameField = yup.string().min(3, "Мінімум 3 символи").required("Будь ласка введіть Ваше прізвище");
export const emailField = yup.string().email("Введіть правильну пошту").required("Будь ласка введіть Вашу пошту");
export const phoneNumberField = yup
  .string()
  .nullable()
  .notRequired()
  .when("phoneNumberField", {
    is: (value: string) => value?.length,
    then: (rule) => rule.matches(phoneNumberOption, "Будь ласка введіть Ваш номер телефону"),
  });
export const passwordField = yup
  .string()
  .matches(passwordOption, "Введіть Ваш пароль")
  .min(8, "Мінімум 8 символів")
  .required("Будь ласка введіть пароль");

export const imageField = yup.object().required("Будь ласка додайте фото");
