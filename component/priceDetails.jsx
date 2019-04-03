import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class priceDetails extends Form {
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
    ciprice: Joi.number()
      .required()
      .label("Caregory"),
    price: Joi.number()
      .required()
      .min(1)
      .label("Price"),
    cprice: Joi.number().label("Description")
  };
  render() {
    return (
      <div className=" container bg-light py-2">
      <h6>Price Details</h6>
        <div className="form-group">
        <form className="position-static" onSubmit={this.handleSubmit}>
          <div className="row">
            <div class="col col-4">
              {this.renderInput("price", "Price", "number")}
            </div>
            <div class="col col-4">
              {this.renderInput("cprice", "Compare at Price", "number")}
            </div>
          </div>
          <div className="col col-4">
            {this.renderInput("ciprice", "Cost per Item", "number")}
         </div>  
        </form>
        </div>
      </div>
    );
  }
}

export default priceDetails;
