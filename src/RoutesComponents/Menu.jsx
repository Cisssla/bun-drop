import React, { useEffect, useState } from "react";
import Products from "../components/products";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Menu() {
  const [Getproduct, setProduct] = useState([]);
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/Fastfood")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  function toggleModal() {
    setModal((prevModalState) => !prevModalState);
  }

  return (
    <div
      style={{
        height: "1000%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#ecdcdc",
      }}
    >
      <div>
        <img
          src={logo}
          width={100}
          height={100}
          style={{ marginLeft: "1200px" }}
          alt="Logo"
        />
      </div>

      <div className="allproducts">
        <Link to="/Cart">
          <button
            style={{
              backgroundColor: "#FFA07A",
              color:"white",
              fontWeight:"bold",
              position: "fixed",
              bottom: "20px",
              right: "20px",
              borderRadius: "20px",
              width: "100px",
              height: "40px",
            }}
          >
            Cart
          </button>
        </Link>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "1000px",
            flexWrap: "wrap",
            gap: "40px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Getproduct.map((M, index) => (
            <Products
              key={index}
              name={M.name}
              img={M.image}
              Modal={toggleModal}
              price={M.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
