import React from "react";
import { useState } from "react";
import axios from "axios";
import CreditCard from "./components/creditcard/CreditCard";
import { BrowserRouter, Router } from "react-router-dom";

export function CreditCard() {

    function updateCreditCard (NewPayment) {
        alert("Credit Card Saved");
      }

};
 {
  const getCreditCardData =  () => {
  axios.put("http://localhost:3000/pito1000/creditcard", creditcard);
    console.log (response.update.creditcard)
    return true;
}
//           <br></br>
        {/* <button onClick={payments}>{props.name}</button>; */}
//           <br></br> 
      <Button variant="submitPayment">Contained</Button>

}

