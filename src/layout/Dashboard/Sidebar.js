import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='col-span-2 bg-[#5d77a0] h-[calc(100vh-25px)] p-5 rounded-lg text-white' >
      <ul className='flex gap-3  flex-col h-full'>
        <li className="bg-[#4971b3] rounded-md text-center p-4 shadow-lg shadow-slate-600 text-white">Admin Dashboard</li>
        <li className="bg-[#4971b3] rounded-md text-center p-4 shadow-lg shadow-slate-600 text-white">
          <Link to='/dashboard'>Product List</Link>
        </li>
        <li className="bg-[#4971b3] rounded-md text-center p-4 shadow-lg shadow-slate-600 text-white">
          <Link to='add-product'> Add Product </Link>
        </li>
        <li className='mt-auto bg-[#4971b3] rounded-md text-center p-4 shadow-lg shadow-slate-600 text-white'>
          <Link to='/' >Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
