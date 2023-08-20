import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import OrderList from "../components/OrderList";
import { Link } from "react-router-dom";

function Cart(){
const [cart, setCart] = useState([]);

useEffect(() => {
    fetch("http://localhost:4000/Cart")
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        console.log(data);
      });
  }, []);

const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
  let total = 0;
  cart.forEach((mycart) => {
  total += mycart.Price; 
  });
  setTotalAmount(Number(total));
  console.log(total);
}, [cart]); 

const isCartEmpty =  cart.length ===0;

return (
    
  <div
    style={{
      height: "1000px",
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
      style={{ marginLeft: "1200px" }}
      alt="Logo"
    ></img>
    <h1 style={{color:"white", fontWeight:"bold"}} className="textcolor family-text">Cart.</h1>
    <div className="Cart">
      <div className="Btn-continue"></div>
      <Link to="/Payment">
        <button
          style={{
            backgroundColor: "#F17B7B",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            position: "fixed",
            bottom: "20px",
            right: "5px",
            width: "200px",
            height: "40px",
          }}
          disabled={isCartEmpty}
        >
          Continue to payment
        </button>
      </Link>
      <Link to="/Menu">
        <button
          style={{
            background: "#F17B7B",
            borderRadius: "12px",
            color: "white",
            fontWeight: "bold",
            position: "fixed",
            bottom: "20px",
            left: "20px",
            width: "200px",
            height: "40px",
          }}
        >
          Back to menu
        </button>
      </Link>

      {cart.map((myorder) => (
        <OrderList
          key={myorder.id}
          Id={myorder.id}
          Name={myorder.Name}
          img={myorder.image}
          price={myorder.price}
        />
      ))}

      <p style={{ color: "white", fontWeight:"bold" }}>Total Amount: {totalAmount} SEK</p>
    </div>
  </div>
);
}


export default Cart;