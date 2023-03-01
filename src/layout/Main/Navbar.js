import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className='h-14 bg-gradient-to-r from-[#264373] to-[#334e7b] rounded-full m-2 max-w-7xl mx-auto px-5' >
      <ul className='h-full cursor-pointer  mx-auto flex justify-between items-center gap-3 font-semibold text-gray-200'>
        <h1>Gym Stock</h1>

        <li className='flex bg-white mx-auto h-8 w-8/12 max-w-sm  rounded-full pr-3'>
          <input
            className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
            type='text'
            name='search'
            id='search'
          />
          <button>
            <BiSearchAlt />
          </button>
        </li>
        <li className="cursor-pointer">
          <Link className="cursor-pointer" to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        
        
      
        <Link to='/dashboard'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <MdOutlineSpaceDashboard></MdOutlineSpaceDashboard> 
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
            <BsFillCartFill className='text-white ' />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
