/* eslint-disable react/prop-types */
//import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Posts.css";
//import { ToastContainer } from "react-toastify";
//import { useContext } from "react";
//import { Modecontext } from "./Modecontext";
export default function Posts(props) {
  const navigate = useNavigate();

  const postde = (id) => {
    console.log(id);
    navigate(`/post/${id}`);
  };
  const logindata = JSON.parse(localStorage.getItem("logindata"));
  return (
    <>
      <div className="viewdata">
        <div className="hw">
          <img
            src={props.img}
            alt=""
            className="iw"
            onClick={() => postde(props.id)}
          />
        </div>
        <div className="tc">
          <h1>{props.title}</h1>
        </div>
        <div className="tc fss">
          <div>{props.body}</div>
        </div>
        {logindata?.role == "admin" && (
          <div>
            <button
              className="delete"
              onClick={() => props.deletehandler(props.id)}
            >
              Delete
            </button>

            <button
              className="edit"
              onClick={() => props.edithandler(props.id)}
            >
              edit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
