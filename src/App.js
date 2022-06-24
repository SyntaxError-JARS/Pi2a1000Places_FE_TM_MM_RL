import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Nav from './components/navigation/navigation';
import Menu from "./components/menu/menu";
import SignIn from "./components/customer/SignIn";
import SignUp from "./components/customer/SignUp";
import Creditcard from "./components/creditcard/CreditCard";


function App() {
  // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
  return (
      <>
          <BrowserRouter>
              <Nav />
              <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/CreditCard" element={<Creditcard/>} />
              </Routes>
          </BrowserRouter>
        
        
      </>
  );
}


export default App;