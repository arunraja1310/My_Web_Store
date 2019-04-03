import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getProduct, saveProduct } from "../services/productService";
import { getCategory } from "../services/categoryService";
import Products from "./products/product";

class productDetails extends Form {
  state = {
    data: {
      name: "",
      categoryId: "",
      price: ""
      //desc: ""
    },
    category: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string()
      .required()
      .label("Name"),
    categoryId: Joi.string()
      .required()
      .label("Caregory"),
    price: Joi.number()
      .required()
      .min(1)
      .label("Price"),
    desc: Joi.string().label("Description")
  };

  componentDidMount() {
    console.log(Products);
    const category = getCategory();
    this.setState({ category });

    const newLocal = "new"; //= this.props.match.params.id;
    const movieId = newLocal;

    if (movieId === "new") return;
    console.log("Fir", movieId);
    const movie = getProduct(movieId);
    console.log("gdfgdf", getProduct(movieId));
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      id: movie.id,
      name: movie.name,
      categoryId: movie.category._id,
      price: movie.price
    };
  }
  doSubmit = () => {
    saveProduct(this.state.data);
    console.log(this.state.data);
    this.props.history.push("/product");
  };

  render() {
    return (
      <div className=" container bg-light py-2">
        <h6>Product Details</h6>
        <div className="form-group" >
          <form className="position-static" onSubmit={this.handleSubmit}>
            <div className="row justify-content-lg-start">
              <div className="col col-4">
                {this.renderInput("name", "Product Name")}
                </div>
                <div className="col col-4">
                {this.renderSelect(
                  "categoryId",
                  "Category",
                  this.state.category
                )}
                </div></div>
                <div className="col col-4">
                {this.renderTextArea("desc", "Description")}
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default productDetails;
