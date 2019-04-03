
import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class inventoryDetails extends Form {
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
    sku: Joi.number()
      .required()
      .label("sku"),
    bcode: Joi.number()
      .required()
      .min(1)
      .label("Barcode"),
    quantity: Joi.number().label("Quantity")
  };
  render() {
    return (
      <div className=" container bg-light py-2">
      <h6>Inventory</h6>
      <div className="form-group ">
          <form className="position-static" onSubmit={this.handleSubmit}>
            <div className="row">
              <div class="col col-4">
                {this.renderInput("sku", "Stock Keeping Unit", "number")}
              </div>
              <br></br>
              <div class="col col-4">
                {this.renderInput(
                  "barcode",
                  "Barcode(ISBN,UPC,GTIN,etc..)",
                  "number"
                )}
              </div> 
              </div>
              <div className="col col-4">
                {this.renderInput("quantity", "Quantity", "number")}
              </div>
           
          </form>
          </div>
          </div>
    );
  }
}
export default inventoryDetails;
