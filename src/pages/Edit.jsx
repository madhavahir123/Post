/* eslint-disable react/prop-types */
//import { useState } from "react";
import { useFormik } from "formik";
import "./CreatePost.css";

//import { postUpSchemas } from "./Validaction";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createPortal } from "react-dom";

export default function Edit(props) {
  const initialvaluse = {
    title: "",
    body: "",
    img: "",
    id: uuidv4(),
  };
  console.log(props);

  const [image, setImage] = useState("");

  const imageChangeHandler = (e) => {
    const img = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", (e) => {
      const data = e.target.result;

      setImage(data);
    });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: props.isedit ? props.edittext : initialvaluse,
      // validationSchema: postUpSchemas,
      onSubmit: (values, action) => {
        if (
          props.edittext.title === "" &&
          props.edittext.body === "" &&
          props.edittext.img === ""
        ) {
          return;
        }
        const index = props.postData.findIndex((item) => {
          return item.id === values.id;
        });
        //  console.log(index);
        props.postData[index] = {
          title: values.title,
          body: values.body,
          img: image,
          id: values.id,
        };
        //console.log(props.postData[index]);
        props.setPostdata(props.postData);
        localStorage.setItem("postdata", JSON.stringify(props.postData));
        props.setPostdata(props.postData);
        props.setIsedit(false);
        props.setIsmodel(false);
        values({ title: "", body: "", img: "", id: uuidv4() });

        action.resetForm();
      },
    });

  useEffect(() => {
    if (props.isedit) {
      props.setEdittext({
        title: props.edittext.title,
        body: props.edittext.body,
        img: props.edittext.img,
      });
    }
  }, [props.isedit]);

  return (
    <>
      {createPortal(
        <>
          <div className="modal">
            <form onSubmit={handleSubmit}>
              <div className="created_post1">
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
                <div className="btnedit">
                  <button className="add" type="submit">
                    Edit Post
                  </button>
                  <button className="add" onClick={() => props.ofeditcon()}>
                    cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}
