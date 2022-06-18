import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const Nav = (props) => {
    return (

        
        <div className="nav-strip"><Link to={"/home"} className="nav-link">
        <div className="nav-link-style">
            <label className="nav-label">Home</label>
        </div>
        </Link>
            <Link to={"/menu"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">View Menu</label>
                </div>
                </Link>
                <Link to={"/Order"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Order</label>
                </div>
            </Link>
            <Link to={"/SignIn"} className="nav-link" id="middle-link">
                <div className="nav-link-style">
                    <label className="nav-label">Sign In</label>
                </div>
            </Link>
            <Link to={"/signUp"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Sign Up</label>
                </div>
            </Link>
            <Link to={"/logOut"} className="nav-link">
                <div className="nav-link-style">
                    <label className="nav-label">Log Out</label>
                </div>
            </Link>
        </div>
    
 
        //     // background-color: black;
        //     // color: white;
        //     // font-size: 20px;
        //     // padding: 10px 60px;
        //     // border-radius: 5px;
        //     // margin: 10px 0px;
        //     // cursor: PointerEvent;
        //     // ;


    );
    }
export default Nav; 
