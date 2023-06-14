import React from "react";
import Form from "./Form";

const Header = ({ history, handleSubmit }) => {
  return (
    <nav className="navBar">
      <a href="/" className= "siteTitle">
        <h1>CatShot</h1>
      </a>
      <div>
        <Form history={history} handleSubmit={handleSubmit} />
      </div>
    </nav>
  );
};

export default Header;
