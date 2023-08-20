import React, { useState } from "react";
import logo from "../images/logo.png";
import swish from "../images/swish.png";
import visa from "../images/visa.png";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Payment() {
  const [Visa, SetVisa] = useState(false);
  const [Swish, SetSwish] = useState(false);
  const [SwishNumber, SetNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function Paymentmethodswish() {
    SetSwish(true);
    SetVisa(false);
  }

  function Paymentmethodvisa() {
    SetSwish(false);
    SetVisa(true);
  }

  function handleconfirmation() {

  }

  function handleSubmit(event) {
    event.preventDefault();
     fetch("http://localhost:4000/Cart")
       .then((res) => res.json())
       .then((data) => {
         const CartItem = data.filter((cartItem) =>
           cartItem.hasOwnProperty("id")
         );

         const deleteOrders = CartItem.map((cart) => {
           return fetch(`http://localhost:4000/Cart/${cart.id}`, {
             method: "DELETE",
           });
         });

         return Promise.all(deleteOrders);
         
       })
       .then(() => {
         window.location.href = "/Confirmation";
       });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#FFA07A",
      }}
    >
      <div>
        <form onSubmit={handleSubmit} className="formSub">
       
        <div className="form-group">
            <h1 style={{ color: "white", fontWeight: "bold" }}>
              Personal details
            </h1>
            <label style={{ color: "white", fontWeight: "bold" }}>Name:</label>
            <input
              className="text required"
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ color: "white", fontWeight: "bold" }}>
              Address:
            </label>
            <input
              type="text"
              placeholder=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ color: "white", fontWeight: "bold" }}>
              House Number:
            </label>
            <input
              type="text"
              placeholder=""
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label style={{ color: "white", fontWeight: "bold" }}>City:</label>
            <input
              type="text"
              placeholder=""
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className="Icon-form">
            <div style={{ position: "relative" }}>
              <img
                src={visa}
                width={50}
                className="img-payment"
                onClick={Paymentmethodvisa}
                alt="Visa"
              />
              {Visa && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    textAlign: "center",
                    gap: "60px",
                  }}
                ></div>
              )}
            </div>
            <div style={{ position: "relative" }}>
              <img
                src={swish}
                width={45}
                height={50}
                className="img-payment"
                onClick={Paymentmethodswish}
                alt="Swish"
              />
              {Swish && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    textAlign: "center",
                  }}
                ></div>
              )}
            </div>
          </div>

          {Visa && (
            <>
              <div className="form-group">
                <label style={{ color: "white", fontWeight: "bold" }}>
                  Card Number:
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label style={{ color: "white", fontWeight: "bold" }}>
                  CVC:
                </label>
                <input
                  required
                  type="text"
                  placeholder=""
                  value={cvc}
                  onChange={(e) => setCVC(e.target.value)}
                />
              </div>
            </>
          )}

          {Swish && (
            <div className="form-group">
              <label style={{ color: "white", fontWeight: "bold" }}>
                Phone Number:
              </label>
              <input
                required
                type="text"
                placeholder=""
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          )}
          <button type="Submit">Pay</button>
        </form>
      </div>

      <div></div>
    </div>
  );
}

export default Payment;
