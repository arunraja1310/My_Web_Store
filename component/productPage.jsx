import React, { Component } from "react";
import Pricedetails from "./priceDetails";
import Inventorydetails from "./InventoryDetails";
import ProductDetails from "./productDetails";
import ImageDetails from "./imageDetails";
import SideNav from "./sidenav/sidenavbar";
class NewProduct extends Component {
  state = {};

  componentDidMount() {
    /* console.log(Products);
      const category = getCategory();
      this.setState({ category }); */

    const newLocal = this.props.match.params.id;
    //const movieId = newLocal;
  }
  render() {
    return (
      <div className="row  bg-light">
        <div className="col d-inline p-2">
          <SideNav />
        </div>
        <div className="col d-inline p-2 bg-dark">
          <br />
          <ProductDetails />
          <br />
          <ImageDetails />
          <br />
          <Pricedetails />
          <br />
          <Inventorydetails />
        </div>
        <div className="col col-2">
          
      </div>
        </div>
    );
  }
}

export default NewProduct;
