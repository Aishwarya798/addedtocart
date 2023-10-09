import React, { useContext } from 'react';
import { C } from './Context';

const Singleproduct = ({ p }) => {
  const { cart, setCart } = useContext(C);

  function addToCart() {
    setCart([...cart, p]);
  }

  function removeFromCart() {
    setCart(cart.filter(c => c.id !== p.id));
  }

  return (
    <>
    <div className="container ">
      <div className="products h-25 w-50 bg-primary">
        <img src={p.image}  alt={p.name} style={{height:"200px",width:"100%"}} />
        </div>
        <div className="productDesc">
          <span>{p.name}</span>
          <br></br>
          <span>$ {p.price}</span>
        </div>
        {cart.includes(p) ? (
          <button className="cart-btn bg-info rounded" onClick={removeFromCart}>
            Remove from cart
          </button>
          

        ) : (
          <button className="cart-btn bg-info rounded" onClick={addToCart}>
            Add to Cart
          </button>
        )}

      </div>
  
    </>
  );
};

export default Singleproduct;