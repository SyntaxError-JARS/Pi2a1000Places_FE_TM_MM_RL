import React from "react";
import { useState } from "react";
import { CreditCard } from "./UpdateCreditCard";


export default function DeleteCreditCard() {
    function onDelete(id) {

        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            });
    }
try {
    const response = axios.post("http://localhost:3000/pito1000/creditcard", creditcard);
        delete(creditcard);
      console.log (response.delete.creditcard);
      return true;
  } catch (error) {
      console.log(error);
      return false; 
      //save instruction needed?
  }
 

<Table.Cell>
   <Button onClick={() => onDelete(data.id)}>Delete</Button>
</Table.Cell>
}