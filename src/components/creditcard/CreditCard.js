import * as React from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
// import PayNow from "./components/buttons/PayNow";
//import function (Payment) from "./Payments";
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

export default function Creditcard() {
    // const ccnumber, setCcNumber = useState('');
    // const ccname, setCcName = useState('');
    // const cvv, setCvv = useState('');
    // const expdate, setExpDate = useState('');
    // const zip, setZip = useState('');
    // const limit, setLimit = useState('');
    // const username, setUsername = useState('');
    
    function addCreditCard (AddPayment) {
      alert("Credit Card Saved");
    }

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
      const response = axios.post("http://localhost:3000/pito1000/creditcard", creditcard);
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
//           <input placeholder="CVV" ref={cvvInput}></input>
//           <input placeholder="Exp Date" ref={expdateInput}></input>
//           <input placeholder="Zip" ref={zipInput}></input>
//           <input placeholder="Limit" ref={limitInput}></input>
//            <input placeholder="Username" ref={usernameInput}></input>

//           <br></br>
            {/* <button onClick={payments}>{props.name}</button>; */}
//           <br></br> 
          <Button variant="submitPayment">Contained</Button>

       </>

   );
}

    
// export default CreditCard
