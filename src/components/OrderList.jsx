import React, { useEffect, useState } from 'react';


function OrderList(Food) {


  useEffect(()=> {
  console.log(Food.Name, Food.Id);
  }) 
  function removeFood() {


    fetch(`http://localhost:4000/Cart/${Food.Id}`,{
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {

          removeFromUI();
          window.location.reload()
        }
      })

  }

  function removeFromUI() {

  }


  function addToUI() {
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>{Food.Name}</h1>
      <h1 style={{ color: "white" }}></h1>
      <button style={{ color: "#FFA07A" }} onClick={removeFood}>
        Remove
      </button>
    </div>
  );
}

export default OrderList;