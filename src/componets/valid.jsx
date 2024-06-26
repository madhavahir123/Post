import * as Yup from "yup";

export const loginUpSchemas = Yup.object({
  username: Yup.string().min(5).max(15).required("please enter username"),

  Phonenumber: Yup.string()
    .min(10)
    .max(10)
    .required("please enter Phonenumber"),
  otp: Yup.string().min(4).max(4).required("please enter valid otp"),
});
