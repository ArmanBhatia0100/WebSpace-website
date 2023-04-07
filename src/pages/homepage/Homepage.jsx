import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homepage.scss";

import Header from "../../components/Header";

const Homepage = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="homepage-container">
        <div className="homepage-content">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="homepage-action">
          <button>
            <Link className="explore-link" to="/destination">
              Explore
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
