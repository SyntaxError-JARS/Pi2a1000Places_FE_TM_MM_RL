import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Nav from './components/navigation/navigation';
import ViewMenu from "./components/menu/ViewMenu";
import Order from "./components/order/Order";
import SignIn from "./components/customer/SignIn";
import SignUp from "./components/customer/SignUp";


function App() {
  // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
  return (
      <>
          <BrowserRouter>
              <Nav />
              <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Order" element={<Order />} />
                    <Route path="/menu" element={<ViewMenu />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                
              </Routes>
          </BrowserRouter>
        
      </>
  );
}


export default App;