import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name,seller,price,img,stock} = props.product;
    return (
        <div className="product">
            <div className="product-img" >
                <img src={img} alt=""/>
            </div>
           <div>
                <h2>{name}</h2>
                <h5>By: {seller}</h5>
                <p><small>${price}</small></p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.onClickHandler(props.product)} className="cart-btn"> <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
           </div>
        </div>
    );
};

export default Product;