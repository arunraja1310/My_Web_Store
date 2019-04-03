import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            quickViewProdcut: {},
            modal:false,
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    };

    render() {
        let {name,price,image,isInCart} = this.props;
        return <div className="product">
        <div className="product-image">
            <img src={image} alt={name} onClick={this.toggle}/>
       </div>
        <h4 className="product-name">{name}</h4>
        <p className="product-price">{price}</p>
       <div className="product-action">
            <button  type="button" >
                {isInCart ? "✔ ADDED" : 'ADD TO CART'}</button>
        </div>
        </div>
      {/*
      
            <div className="card">
        <div className="product-image">
        <img  src={image} alt={name}  className="card-img-top"/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text product-price">{price}</p>
          <a href="#" className=" btn btn-success">{isInCart ? "✔ ADDED" : 'ADD TO CART'}</a>
        </div>
        <br/>
      </div>
             <Container className="product">
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm">
                    <ModalHeader toggle={this.toggle}>Product Preview</ModalHeader>
                    <ModalBody>
                        <img src={image} alt={name} onClick={this.toggle} style={{width: '250px', height: '250px'}}/>
                    </ModalBody>
                    <ModalFooter className="text-right">
                        <div>
                            <p className="product-name">{name}</p>
                            <p className="product-price">{price}</p>
                        </div>
                    </ModalFooter>
                </Modal>
            </Container> 
        </div>;*/}
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,

};

export default Product;
