import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import Search from "../component/searchBox";
class navBar extends Component {
  render() {
    return (
      <div>
        <nav className=" navbar  navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand font-weight-bolder" to="/Home">
            BerryChild
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Vhome">
                  VHome
                </NavLink>
              </li>
            </ul>
          </div>
        {/*   
          <form className="form-inline my-2 my-lg-3 collapse navbar-collapse">
          
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
     
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}
        </nav>
      </div>

    );
  }
}

export default navBar;
