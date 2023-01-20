import { useEffect, useState } from "react";
import "./index.css";


const Child = () => {
  const [user, setUsers] = useState([]);
  

  const getUser = async () => {
      const x = await fetch(" https://api.github.com/users ");
      setUsers(await x.json());
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="container mt-5 ">
        <div className="row d-flex justify-content-space-around">
          <h2>
            <u className="tex-light mt-2">Github User List </u>
          </h2>
          <hr />
          {user.map((curr) => {
            return (
              <div
                className="col-10 col-md-4 d-flex d-flex justify-content-space-around mt-2 rounded"
                key={curr.id}
              >
                <div className="card align-items-center m-2 bg-dark ">
                  <div className="child">
                    <img
                      src={curr.avatar_url}
                      className="img m-1 rounded"
                      alt="hi"
                    />
                  </div>
                  <div className="child">
                    <div className="child1 text-white m-2">
                      <h4>{curr.login}</h4>
                      <h5>
                        <u>Web Developer</u>
                      </h5>
                    </div>
                    <div className="childd d-flex  bg-white p-1 rounded m-1">
                      <div className="child2 d-flex flex-column m-1 text-dark">
                        <span>Article</span>
                        <span>22</span>
                      </div>
                      <div className="child2 d-flex flex-column m-1 text-dark">
                        <span>Followers</span>
                        <span>545</span>
                      </div>
                      <div className="child2 d-flex flex-column m-1  text-dark">
                        <span>Rating</span>
                        <span>9.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Child;
