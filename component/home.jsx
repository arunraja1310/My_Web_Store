import React, { Component} from "react";
import Richeditor from './products/product';
import RichTextEditor from "react-rte";
class Home extends Component {
  constructor() {
    super(...arguments);
   
    this.state = {
      value:RichTextEditor.createEmptyValue(),
      format: 'html',
      readOnly: false,
    };
  }
  _onChangeSource(event) {
    let source = event.target.value;
    let oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, this.state.format),
    });
  }
  onChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value.toString("html"));
    }
    
  };
  render() {
    let {value, format} = this.state;
    return (
      <div>
       
        {/* <h3><i className="fa fa-angle-left" aria-hidden="true"></i> Add Product</h3>
        <div>
            <label htmlFor="pname">Title</label>
            <br />
            <input
              id=""
              type="text"
              name="pname"
              onChange={this.handleChange}
            /></div>
            <br />
            <div>
            <label>Product Description</label>
            <br />
            <Richeditor/>
            <br />
            <button className="btn btn-primary">Save</button>
          </div> */}
          </div>
    
    );
  }
}

export default Home;
