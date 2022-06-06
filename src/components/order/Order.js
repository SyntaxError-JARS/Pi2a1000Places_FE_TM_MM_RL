import React from 'react';
import Creditcard from '../creditcard/CreditCard';
// import {Template} from "./components/Management/Template;"
import "./Order.css"

const Order = () => {
//     const [orderItem, setOrderItem] = useState("");
//     const [quantity, setQuantity] = useState("1");
 
//     const menuItemChosen = (event) => setOrderItem(event.value);
//     const menuQuantityChosen = (event) => setQuantity(event.value);

//     const auth = useSelector((state) => state.auth);

//     const submitOrder = () => {
//         if (orderItem === "") return;
//         fetch(ADD_ORDER_URL, {
//             method: 'POST',
//             body: JSON.stringify({
//                 order_item: orderItem,
//                 quantity,
//                 ordered_by: auth.email || 'Unknown!',
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(response => console.log("Success", JSON.stringify(response)))
//         .catch(error => console.error(error));
    

//Grid Css from external w3schools.com
//TO-DO: Add Buttons & On-click function to divs (1-)
    return (
   <div>Order
       <div class="grid-container">
  {/* <button onClick={Cart} class="grid-item">1</button> */}
  <div className="grid-item">Cheese Pizza</div>
  <div className="grid-item">Pepperoni Pizza</div>
  <div className="grid-item">Veggie Pizza</div>
  <div className="grid-item">about this menu item</div>
  <div className="grid-item">about this menu item</div>
  <div className="grid-item">about this menu item</div>
  <div></div>
  {/* <Button onClick={Creditcard} type='pay now'>CreditCard</Button> */}
</div>
</div>

// {/* <Button onClick={Creditcard} type='pay now'>CreditCard</Button>

// <Button variant="text">Text</Button>
// <Button variant="contained">Contained</Button>
// <Button variant="outlined">Outlined</Button> */}
          
     

    )}
export default Order