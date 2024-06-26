import * as Yup from "yup";

export const postUpSchemas = Yup.object({
  title: Yup.string().min(1).max(25).required("please enter title"),
  body: Yup.string().min(5).max(30).required("please enter body"),
});
