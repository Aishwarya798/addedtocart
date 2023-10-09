import React from 'react'
import { useState } from 'react';
import Singleproduct from './Singleproduct';

const Home = () => {
    const productArray = [
        {
          id: 1,
          name: "Dell",
          image: "laptop.jpeg",
          price: 100,
        },
        {
          id: 2,
          name: "Hp",
          image: "laptop1.jpeg",
          price: 200,
        },
        {
          id: 3,
          name: "Apple",
          image: "laptop2.jpeg",
          price: 300,
        },
      ];
      const [products, setProducts] = useState(productArray);
  return (
    <>
    <div className="container">
        {products.map(prod=>{
            
            return<Singleproduct p={prod}/>
        })}
    </div>
    </>
  )
}

export default Home