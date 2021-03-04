import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice= cart.reduce((total,prd)=>total+prd.price,0);
    let total=0;
    for (let i = 0; i < cart.length; i++) {
         total = total + cart[i].price;
    }
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }else if(total>15){
        shipping = 4.999;
    }else if(total>0){
        shipping = 12.99;
    }
    let tex= total/10;
    const grandTotal = total + shipping + tex;
    const formateNumber = num =>{
       const  mathRound=num.toFixed(2);
        return Number(mathRound);
    };

    return (
        <div>
            <h1>Order Summary</h1>
            <h5>Items ordered: {cart.length}</h5>
            <h5>Product Price: {formateNumber(total)}</h5>
            <p>Shipping Cost: {formateNumber(shipping)}</p>
            <p>Tex : {formateNumber(tex)}</p>
            <p>Grand total price: {formateNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;