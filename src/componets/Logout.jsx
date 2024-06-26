/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Logout.css";
// import { useContext } from "react";
// import { ModeContext } from "../context/ModeContext";
import { createPortal } from "react-dom";

export default function Logout({ canclebtn }) {
  const navigate = useNavigate();

  const logoutbtn = () => {
    localStorage.removeItem("logindata");
    navigate("/login");
  };
  return (
    <>
      {createPortal(
        <>
          <div className="bg-img">
            <div className="logoutcom">
              <p className="logouttext"> Are you sure you want to logout</p>

              <div className="logoutallbtn">
                <button className="btncancle" onClick={canclebtn}>
                  cancle
                </button>
                <button className="btnlogout" onClick={logoutbtn}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("logoutmodel")
      )}
    </>
  );
}
