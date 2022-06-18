import * as React from "react";
import { useRef } from "react";
import axios from "axios";
//import { Button } from "@mui/material";
// import PayNow from "./components/buttons/PayNow";
//import function (Payment) from "./Payments";

export default function Creditcard() {
  const ccnumberInput = useRef();
  const ccnameInput = useRef();
  const cvvInput = useRef();
  const expdateInput = useRef();
  const zipInput = useRef();
  const limitInput = useRef();
  const usernameInput = useRef();

  //await function payment () { (add? async?)
  const creditcard = {
    ccnumber: ccnumberInput,
    ccname: ccnameInput,
    cvv: cvvInput,
    expdate: expdateInput,
    zip: zipInput,
    limit: limitInput,
    username: usernameInput,
  };
  try {
    const response = axios.post(
      "http://localhost:3000/pito1000/creditcard",
      creditcard
    );
    console.log(response.creditcard);
  } catch (error) {
    console.log(error);
    //save instruction needed?
  }
  return (
    <>
      <h4>Credit Card Payment</h4>
      <input placeholder="Credit Card Number" ref={ccnumberInput}></input>
      <input placeholder="Credit Card Name" ref={ccnameInput}></input>
      <input placeholder="CVV" ref={cvvInput}></input>
      <input placeholder="Exp Date" ref={expdateInput}></input>
      <input placeholder="Zip" ref={zipInput}></input>
      <input placeholder="Limit" ref={limitInput}></input>
      <input placeholder="Username" ref={usernameInput}></input>
      <br></br>
      {/* <button onClick={payments}>{props.name}</button>; */}
      <br></br>
      {/* <Button 
          onClick={() => console.log('Payment Recieved')}
          type="Pay Now" 
          variant= "Contained"
          >
          Payment
          </Button> */}
    </>
  );
}
