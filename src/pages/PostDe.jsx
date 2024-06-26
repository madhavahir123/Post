import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostDe.css";
export default function PostDe() {
  const localdata = JSON.parse(localStorage.getItem("postdata"));
  const [depost, setDePost] = useState({});
  const params = useParams();

  // const postd = useCallback(() => {

  // }, [localdata, params.postId]);

  useEffect(() => {
    const postd = localdata.filter((item) => item.id == params.postId);
    console.log(postd[0]);
    setDePost(postd[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.postId]);

  return (
    <>
      <div className="detpost">
        <div>
          <img src={depost.img} alt="" className="imgpost" />
        </div>
        <div className="tc">
          <h1>{depost.title}</h1>
          <p>{depost.body}</p>
        </div>
      </div>
    </>
  );
}
