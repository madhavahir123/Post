/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Explore.css";
import { date } from "yup";

export default function Explore() {
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1);
  const [postparPage, setPostParPage] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [lodig, setLodin] = useState(false);

  const fatchdata = async () => {
    setLodin(true);
    const reposne = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await reposne.json();
    setApiData(data);

    setLodin(false);
  };

  const indexOfLastpage = page * postparPage;
  const indexOfFisrtpage = indexOfLastpage - postparPage;
  const currentPost = apiData.slice(indexOfFisrtpage, indexOfLastpage);

  let pages = [];

  for (let i = 1; i <= Math.ceil(apiData.length / postparPage); i++) {
    pages.push(i);
  }
  const prevbtn = () => {
    setPage(page - 1);
    setActivePage(page - 1);
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    // console.log(page);
  };
  const nextbtn = () => {
    setPage(page + 1);
    setActivePage(page + 1);

    // console.log(page);
  };

  const pageClickHandler = (pageNo) => {
    setPage(pageNo);
    setActivePage(pageNo);
  };

  useEffect(() => {
    fatchdata();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    //titletext();
  }, [page]);
  return (
    <div>
      {lodig ? (
        <p className="loading">Loading....</p>
      ) : (
        <div>
          <div className="titleExplore">
            <h1>Explore Post</h1>
          </div>
          <div className="allpost">
            {currentPost.map((item) => (
              <div key={item.id} className="itempost">
                <img
                  className="postimg"
                  src={`https://picsum.photos/id/${item.id}/200/300`}
                />
                <div className="posttext">
                  <h1>{item.title.slice(1, 20).concat("...")}</h1>
                  <p>{item.body.slice(0, 100).concat("...")}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pages">
            <button
              disabled={page === 1}
              className="pvbtn"
              onClick={() => prevbtn()}
            >
              previous
            </button>
            {pages.map((page, index) => {
              return (
                <button
                  className={`btnpage ${page === activePage && "bgBlack"}`}
                  key={index}
                  onClick={() => {
                    // window.scrollTo({
                    //   top: 0,
                    //   behavior: "smooth",
                    // });

                    pageClickHandler(page);
                  }}
                >
                  {page}
                </button>
              );
            })}
            <button
              disabled={page === 10}
              className="pvbtn"
              onClick={() => nextbtn()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
