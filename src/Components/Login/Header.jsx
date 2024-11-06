import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/results?query=${query}`);
    }
  };

  return (
    <div className='flex bg-blue-600 items-center'>
      <div className='ml-40 mr-3 pt-1'>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt='Flipkart'
          className='w-16 h-auto pt-1'
        />
        <span className='flex items-center gap-0.5 text-[11px] mb-2'>
          <i className='text-white'>Explore</i>
          <i className='text-yellow-400 font-bold'> Plus</i>
          <img
            src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png'
            alt='Plus Icon'
            className='w-[10px] h-[10px]'
          />
        </span>
      </div>

      {/* Search Input */}
      <form onSubmit={handleSearch} className="flex items-center relative md:w-[50%] lg:w-full mx-2 lg:mx-4">
        <input
          className="bg-white w-full h-8 md:h-10 p-2 md:p-4 rounded focus:outline-none"
          type="text"
          placeholder="Search for products, brands and more"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
          <SearchIcon />
        </IconButton>
      </form>

      {/* Buttons */}
      <div className='flex'>
        <Button className='ml-8 text-blue-600 text-xs bg-white font-bold px-8 py-1'>
          Login
        </Button>
        <Button className='text-xs ml-4 mr-4 text-white font-bold'>
          Become a Seller
        </Button>
        <Button endIcon={<KeyboardArrowDownOutlinedIcon />} className='text-xs ml-4 mr-4 text-white font-bold'>
          More
        </Button>
        <Button startIcon={<ShoppingCartIcon />} className='text-xs ml-4 mr-4 text-white font-bold'>
          Cart
        </Button>
      </div>
    </div>
  );
}

export default Header;
