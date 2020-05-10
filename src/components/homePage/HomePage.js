import React from "react";
import "./homePage.scss";
import Header from "../header";
import Posts from "../posts";
import Footer from "../footer";

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

export default HomePage;
