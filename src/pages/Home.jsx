import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeHeader">
        <div className="homeHeaderLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="homeHeaderRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>

          <Apps />
          <Avatar />
        </div>
      </div>

      <div className="homeBody">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />

        <div className="homeInput">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
};

export default Home;
