import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';
const Products = (props) => {
   // console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div class="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className = "Description">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small> by: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon.</p>
                <button className="main-button"
                onClick = {() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Products;