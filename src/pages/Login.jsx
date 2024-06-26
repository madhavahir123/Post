import { useFormik } from "formik";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUpSchemas } from "../componets/valid";

export default function Login() {
  const navigate = useNavigate();

  const initialvalues = {
    username: "",
    role: "",
    Phonenumber: "",
    otp: "",
  };

  const [otp, setotp] = useState("");
  const [logdata, setLogdata] = useState(null);

  console.log(typeof logdata);
  //const [otpbt, setOtpbt] = useState(false);

  const otpgenerate = () => {
    let num = Math.floor(1000 + Math.random() * 9000);
    // newotp += charset.charAt(num);
    console.log(num);
    setotp(num);
    alert(`send your otp ${num}`);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: loginUpSchemas,
      onSubmit: (values) => {
        setLogdata(values);
        localStorage.setItem("logindata", JSON.stringify(values));

        // action.resetForm();
        {
          values.role == "admin" ? navigate("/") : navigate("/post");
        }
      },
    });

  console.log(logdata);
  useEffect(() => {
    localStorage.setItem("logindata", JSON.stringify(logdata));
  }, [logdata]);

  // const btnenable = () => {
  //   if (values.Phonenumber.length === 10) {
  //     setOtpbt(true);
  //   }
  // };
  // useEffect(() => {
  //   btnenable();
  // }, [otpbt]);
  // console.log(values.Phonenumber.length);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="Login">
          <div className="LoginTitle">
            <h1>Login</h1>
            <h3>welcome back</h3>
          </div>

          <div className="m">
            <label htmlFor="username" className="marginFont">
              userName :
            </label>
            <br />
            <input
              type="text"
              className="usename wh"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username ? (
              <p className="form-error">{errors.username}</p>
            ) : null}
          </div>
          <div className="m df">
            <label htmlFor="role" className="marginFont">
              Select Role :
            </label>

            <div className="mm">
              <label htmlFor="user" className="fs">
                <input
                  type="radio"
                  className="user"
                  name="role"
                  value={"user"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  //checked={true}
                />
                user
              </label>

              <label htmlFor="admin" className="fs">
                <input
                  type="radio"
                  className="Admin"
                  name="role"
                  value={"admin"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Admin
              </label>
            </div>
          </div>
          <div className="m">
            <label htmlFor="MobileNumber" className="marginFont">
              Mobile Number :
            </label>
            <br />
            <input
              type="number"
              className="mnumber wh"
              name="Phonenumber"
              value={values.Phonenumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.Phonenumber && touched.Phonenumber ? (
              <p className="form-error">{errors.Phonenumber}</p>
            ) : null}

            <button
              className="otpsend"
              type="button"
              onClick={otpgenerate}
              //  disabled={values.Phonenumber.length != 10}
            >
              OTP Send
            </button>
          </div>

          <div className="m">
            <label htmlFor="Otpnumber" className="marginFont ">
              OTP Number :
            </label>
            <br />
            <input
              type="number"
              className="Otp wh"
              name="otp"
              value={values.otp}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.otp && touched.otp ? (
              <p className="form-error">{errors.otp}</p>
            ) : null}
          </div>
          <div className="btnLogin">
            <button
              type="submit"
              className="btnl"
              disabled={otp !== values.otp}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
