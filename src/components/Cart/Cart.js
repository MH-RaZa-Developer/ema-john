import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i< cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 50){
        shipping = 2.99;
    }
    else if(total > 20){
        shipping = 4.99;
    }
    else if(total > 100){
        shipping = 0;
    }

    const tax = (total/10).toFixed(2);
    const TotalPrice = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary: </h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {(total.toFixed(2))}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax: {tax}</p>
            <p>Total Price: {TotalPrice}</p>
        </div>
    );
};

export default Cart;