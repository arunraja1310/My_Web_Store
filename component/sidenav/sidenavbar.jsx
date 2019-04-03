import React, { Component } from "react";
import "./sidenavbar.css";
class sidenavbar extends Component {
  render() {
    return (
      /* Left Sidebar - style you can find in sidebar.scss  */
      <div>
        <aside className="left-sidebar">
          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                <li>
                  <a className="waves-effect waves-dark" href="#">
                   
                    <span className="hide-menu">Add a item </span>
                  </a>
                </li>

                <li>
                  <a className="waves-effect waves-dark" href="#">
                    
                    <span className="hide-menu">Change Price</span>
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-dark" href="#">
                    
                    <span className="hide-menu">Update Product </span>
                  </a>
                </li>
                <li>
                  <a className="waves-effect waves-dark"  href="#"  aria-expanded="false">
                   
                    <span className="hide-menu">Manage Inventory</span>
                  </a>
                </li>

                <li>
                  <a
                    className="waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    
                    <span className="hide-menu">Add More Images</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}

export default sidenavbar;
