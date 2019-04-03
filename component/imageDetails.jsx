import React,{Component} from "react";
import { Link } from "react-router-dom";
import place from "./common/images/placeholder.png";

class imageDetails extends Component {
  
  render() {
    return (
      <div className=" container bg-light py-1">
       <h6  className="my-3">Images</h6>
        <div className="row justify-content-lg-end">
              <Link to="/products/new" className="my-3"  style={{ marginTop: 20 }}  >
                 Add images
              </Link>
              
              <Link to="/products/new" className="my-3" style={{ marginTop: 20 }} >
                 Add Images from URL
              </Link>      
         
        </div>      
              <div className="col align-content-center flex-wrap">
                <img  src={place} alt="product image"/>
                 </div>
                 <label className="">Drop File to Upload<i className="fas fa-cloud-upload-alt"></i></label>
            
        </div>
    );
  }
}

export default imageDetails;
