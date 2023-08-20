import React from "react";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";


function Confirmed () {
    return (
      <div
        style={{
          height: "800px",
          backgroundColor: "#FFA07A",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={logo}
          width={100}
          height={100}
          style={{ marginLeft: "1400px" }}
        ></img>
        <h1 className="textcolor family-text" style={{ color: "white" }}>
          Santa's coming early this year
        </h1>

        <h1 className="textcolor family-text" style={{ color: "white" }}>
          Estimated time for your delivery:{" "}
        </h1>

        <h1 className="textcolor family-text" style={{ color: "white" }}>
          19.00{" "}
        </h1>
        <div>
          <Link style={{}} to="/">
            <button
              style={{
                backgroundColor:"#FFA07A",
                color:"white",
                fontWeight:"bold",
                borderRadius:"12px",
                bottom: "10px",
                width: "200px",
                height: "40px",
                marginTop: "100px",
              }}
            >
              Back to home
            </button>
          </Link>
        </div>
      </div>
    );
}

export default Confirmed;