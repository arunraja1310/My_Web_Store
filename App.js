import React, {
  Component
} from "react";
import NavBar from "./component/navBar";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import product from "./component/products";
import Home from "./component/home";
import productPage from "./component/productPage";
import NotFound from "./component/notFound";
import Vendor from './component/Vendor';
import Pricedetails from priceDetails";
//import Inventorydetails from "'./component/InventoryDetails";
import ProductDetails from "'./component/productDetails";
//import ImageDetails from "'./component/imageDetails";

class App extends Component {
  render() {
    return ( <
      React.Fragment >
      <
      NavBar / >
      <
      div >
      <
      Switch >
      <
      Route path = "/Home"
      component = {
        Home
      }
      /> <
      Route path = "/product"
      component = {
        product
      }
      /> <
      Route path = "/products/:id"
      component = {
        productPage
      }
      /> <
      Route path = "/not-found"
      component = {
        NotFound
      }
      /> <
      Route path = "/Vhome"
      component = {
        Vendor
      }
      /> <
      Redirect from = "/"
      exact to = "/product" / >
      <
      Route path = "/productUpdate"
      component = {
        ProductDetails
      }
      /> <
      Route path = "/Vhome"
      component = {
        Vendor
      }
      /> <
      Redirect to = "/not-found" / >

      <
      /Switch> <
      /div> <
      /React.Fragment>
    );
  }
}

export default App;