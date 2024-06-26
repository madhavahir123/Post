/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
//import { useState } from "react";
import { useFormik } from "formik";
import "./CreatePost.css";
import { postUpSchemas } from "./Validaction";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
//import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const getlocaldata = () => {
  const postData = localStorage.getItem("postdata");
  if (postData) {
    return JSON.parse(postData);
  } else {
    return [];
  }
};
const notify = () => toast.success("Add success fully !");
export default function CreatePost() {
  const initialvaluse = {
    title: "",
    body: "",
    img: "",
    id: uuidv4(),
  };
  const [createpostdata, setCreatePostData] = useState(getlocaldata());
  const [image, setImage] = useState("");

  const imageChangeHandler = (e) => {
    // console.log(e.target.files);
    const img = e.target.files[0];

    //  console.log(img);
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", (e) => {
      const data = e.target.result;
      // console.log(data);
      setImage(data);
    });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvaluse,
      validationSchema: postUpSchemas,
      onSubmit: (values, action) => {
        const newValue = {
          title: values.title,
          body: values.body,
          img: image,
          id: values.id,
        };
        setCreatePostData([...createpostdata, newValue]);
        console.log(createpostdata);

        notify();
        if (notify) {
          action.resetForm();
        }
      },
    });

  useEffect(() => {
    localStorage.setItem("postdata", JSON.stringify(createpostdata));
    console.log("useeffect running...");
  }, [createpostdata]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Created Post</h1>
        </div>

        <div className="created_post">
          <div className="input_box mx fs">
            <label htmlFor="title fs">Title :</label>
            <br />
            <input
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className="Created_titel_input"
              id="created_titel_id"
            />
            {errors.title && touched.title ? (
              <p className="form-error">{errors.title}</p>
            ) : null}
          </div>

          <div className="input_box mx fs">
            <label htmlFor="title "> Body :</label>
            <br />
            <input
              name="body"
              type="text"
              value={values.body}
              onChange={handleChange}
              onBlur={handleBlur}
              className="Created_titel_input"
              id="created_titel_id"
            />
            {errors.body && touched.body ? (
              <p className="form-error">{errors.body}</p>
            ) : null}
          </div>
          <div className="input_box mx fs">
            <label htmlFor="title "> image:</label>
            <br />
            <input
              name="img"
              type="file"
              onChange={imageChangeHandler}
              className="Created_titel_input"
              id="created_titel_id"
            />
            {errors.img && touched.img ? (
              <p className="form-error">{errors.img}</p>
            ) : null}
          </div>
          <div className="btnadd">
            <button className="add" type="submit">
              Add Post
            </button>
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition:Bounce
            />
          </div>
        </div>
      </form>

      {/* <div>
        <div>
          <Postupdate />
        </div>
      </div> */}
    </>
  );
}
