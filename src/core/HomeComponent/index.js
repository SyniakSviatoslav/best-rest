import React from "react";
import {NavLink} from "react-router-dom";
import { registerPath } from "../../constants";
import logo from "../../assets/logo.svg"

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {
        return (
            <div id="home-wrapper">
               <img src={logo} alt="Logo" />
               <div> Find the best place to rest while traveling</div>
              <NavLink to={registerPath}>
                  <button className="registerButton"> Registration</button>
              </NavLink>
            </div>
        );
    }
}






export default HomeComponent;
