import React, { useState } from 'react';
import {  Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate } from 'react-router-dom';

function Header({results}){
  const [query, setQuery] = useState("");
  const Navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      Navigate(`/results`,{state:query});
    }
  };

  return (
    <div className='!flex bg-blue-600  items-center'>
      <div className='ml-40 mr-3 pt-1'>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt='Flipkart'  className='!w-16 !h-auto pt-1 '></img>
      
      <span className='flex items-center gap-0.5 !text-[11px] mb-2'>
      <i className='!text-white'>Explore  </i>
      <i className='!text-yellow-400 !font-bold'> Plus</i>
      <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt='Plus Icon' className='w-[10px] h-[10px]'/></span>
      
    </div>

    <form onSubmit={handleSearch}  className="flex  items-start  relative  md:w-[50%] lg:w-full mx-2 lg:mx-4 ">
          <div className="w-full">
            <input
              className="bg-white w-full !h-4 md:h-6 p-2 md:p-4   focus:outline-none"
              type="text"
              placeholder="Search for products, brands and more"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
              <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 md:right-3" />
            </button>
          </div>
        </form>

    <div className='flex '>
            <div className='!bg-white ml-8' >
            <Button    className='!{lowercase} !capitalize !text-blue-600  !text-xs  bg-white !font-bold !pl-8 !pr-8 !p-1'   >Login</Button>
            </div>
            <div className=''>
            <Button   className='!{lowercase} whitespace-nowrap !capitalize   !text-xs !ml-4 !mr-4 !text-white !font-bold'>Become a Seller</Button>
            </div>
            <div className=''>
            <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-5' />} className='!{lowercase} whitespace-nowrap !capitalize !text-white  !text-xs !ml-4 !mr-4 !font-bold'>More</Button>
            </div>
            <div className=''>
            <Button startIcon={<ShoppingCartIcon  className='!h-5 !w-5'/>}    className='!{lowercase} !capitalize !text-white  !text-xs !ml-4 !mr-4 !font-bold' >Cart</Button>
            </div>
        </div>
        
    </div>
  );
};

export default Header;
