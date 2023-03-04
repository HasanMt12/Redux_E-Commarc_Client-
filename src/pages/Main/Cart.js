import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  return (
    <div className="static">
      <h2 className="text-center text-bold text-lg ">your cart <span className="text-red-600">{cart.length}</span></h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {cart
        .sort((a, b) => a.cartPosition - b.cartPosition)
        .map((product) => (
          <ProductCard key={product.model} product={product} />
        ))}
    </div>
    <Link to='/' className="absolute bottom-12 right-10"><button className="btn btn-lg rounded-full bg-[#264373] text-white p-4">Back to home</button></Link>
    </div>
  );
};

export default Cart;
