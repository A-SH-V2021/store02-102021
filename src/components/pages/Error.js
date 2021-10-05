import React from "react";
import { Link } from "react-router-dom";
import errorpage from "../../images/error-page.jpg";
const Error = () => {
  return (
    <>
      <div className="errorpage">
        <img src={errorpage} alt="error" className="error-img" />
        <div className="center">
          <Link to="/" >
            <button className="btn btn-primary">home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
