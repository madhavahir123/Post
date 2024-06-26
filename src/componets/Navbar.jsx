import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
//import { Modecontext } from "../pages/Modecontext";
import Logout from "./Logout";

export default function Navbar() {
  const [model, setModel] = useState(false);

  const logindata = JSON.parse(localStorage.getItem("logindata"));
  //console.log(logindata);

  const logoutHandler = () => {
    setModel(true);
  };
  const canclebtn = () => {
    setModel(false);
  };
  return (
    <>
      <div className="navbar">
        {/* <div className="logo_project">
          <img src="./logopost.jpg" alt="logo" className="logoimg" />
        </div> */}

        <div>
          <ul className="btn_created">
            {logindata?.role == "admin" && (
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? "alink" : "dislink")}
                >
                  Created Post
                </NavLink>
              </li>
            )}
            {model && <Logout canclebtn={canclebtn} />}
            <li>
              <NavLink
                to={"/explore"}
                className={({ isActive }) => (isActive ? "alink" : "dislink")}
              >
                Explore Post
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/post"}
                className={({ isActive }) => (isActive ? "alink" : "dislink")}
              >
                Post
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="login_logout">
          <ul className="btn_login_logout">
            {/* <li className="btn">
              <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? "alink" : "dislink")}
              >
                Login
              </NavLink>
            </li> */}
            <li className="btn">
              <button onClick={logoutHandler} className="logoout_btn">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
