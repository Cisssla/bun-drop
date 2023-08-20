import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home-container">
        
      <div
        className="content-container"
        
      >
        <img
          src={logo}
          alt="Logo"
          width={500}
          height={500}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            
          }}
        />
        <Link to="/Menu">
          <button style={{color:"white"}} className="btn-start">
            Order Now!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;


