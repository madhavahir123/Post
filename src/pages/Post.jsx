import { useEffect, useState } from "react";
import Posts from "./Posts";
import "./Post.css";
import Edit from "./Edit";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const getlocaldata = () => {
  const postData = localStorage.getItem("postdata");
  if (postData) {
    return JSON.parse(postData);
  } else {
    return [];
  }
};

export default function Post() {
  const [postdata, setPostdata] = useState(getlocaldata);
  const [edittext, setEdittext] = useState({});
  const [isedit, setIsedit] = useState(false);
  const [ismodel, setIsmodel] = useState(false);

  const notify = () => toast.success("Delete Post !");

  useEffect(() => {
    localStorage.setItem("postdata", JSON.stringify(postdata));
  }, [postdata]);

  const deletehandler = (id) => {
    const idelete = postdata.filter((item) => {
      return item.id !== id;
    });

    setPostdata(idelete);
    notify();
  };
  // const editcon = () => {
  //   setIsmodel(true);
  // };
  const edithandler = (id) => {
    setIsmodel(true);
    setIsedit(true);
    const edittask = postdata.filter((item) => item.id == id);
    setEdittext(edittask[0]);
  };
  // console.log(edittext);

  const ofeditcon = () => {
    setIsmodel(false);
  };
  return (
    <>
      {ismodel && (
        <Edit
          ofeditcon={ofeditcon}
          isedit={isedit}
          edittext={edittext}
          setEdittext={setEdittext}
          setIsedit={setIsedit}
          postData={postdata}
          setPostdata={setPostdata}
          setIsmodel={setIsmodel}
        />
      )}
      <div className="posttitle">
        <h1>Post</h1>
      </div>

      <div className="mauto">
        {postdata.length === 0 ? (
          <p className="fs">post not added</p>
        ) : (
          <div className="vp">
            {postdata.map((item, index) => (
              <Posts
                key={index}
                id={item.id}
                title={item.title}
                body={item.body}
                img={item.img}
                deletehandler={deletehandler}
                edithandler={edithandler}
                // editcon={editcon}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
