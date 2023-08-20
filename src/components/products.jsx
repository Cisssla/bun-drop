import React, { useEffect, useState } from "react";
function Products(props) {
  const [getName, setName] = useState();
  const [isModal, setModal] = useState(false);
  useEffect(() => {
  }, []);

  function addclick(data) {
    fetch("http://localhost:4000/Cart", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: props.name,
        Price: props.price,
      }),
    });

    setModal(true);
    alert("Added to your cart,: " + props.name);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="Product-container">
        <h2 style={{ margin: "10px" }} className="textcolor">
          {props.name}
        </h2>

        <img className="img-container" src={props.img} alt="" />
        <h3 className="textcolor">{props.price}kr</h3>
      </div>
      <button
        style={{ backgroundColor: "#E4C5BF" }}
        onClick={addclick}
        name={props.name}
        className="btn-add"
      >
        Add me
      </button>
      {}
    </div>
  );
}

export default Products;
