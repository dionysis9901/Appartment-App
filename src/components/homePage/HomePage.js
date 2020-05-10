import React from "react";
import "./homePage.scss";
import Posts from "../posts";
import Header from "../header";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Posts />
    </div>
  );
};

export default HomePage;
