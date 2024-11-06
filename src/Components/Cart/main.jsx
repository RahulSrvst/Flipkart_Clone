import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSafety } from "react-icons/ai";


function Main() {
    const navigate = useNavigate();
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(data => {
                setCarts(data.carts); 
            })
            .catch(error => {
                console.error("Error fetching cart data:", error);
            });
    }, []);
  return (

    <div className='w-full bg-slate-100 flex h-screen '>
        <div className='w-[70%] bg-white ml-24  my-4 rounded-sm  '>
            <div className='flex justify-between  border-b-8 border-slate-100'>
            <div className='border-b-2 border-blue-600 w-[30%] p-2 pl-20 ml-20'>
                <span>Flipkart</span>
            </div>
            <div className='hover:border-b-2 border-blue-600 p-2 px-20 mr-20'>
                <span>Grocery</span>
            </div>
            </div>

            <div className='flex justify-between items-center p-2  border-b-8 border-slate-100'>
            <div className=''>
                <span>From Saved Address</span>
            </div>
            <div className='border px-4 text-blue-500 hover:shadow-lg font-semibold w-40'>
                <button>Enter Delivery PinCode</button>
            </div>
            </div>

            {/* <div> */}
            {/* <div className='bg-white mt-4 !h-70 !overflow-y-scroll'>
                    <div className='text-slate-600 border-b p-3 font-semibold'>
                        Cart Items
                    </div>
                    {carts.length === 0 ? (
                        <p className='p-3'>No items in cart</p>
                    ) : (
                        carts?.map(cart => (
                            <div key={cart.id} className='border-b p-3'>
                                <div>Item: {cart.itemName}</div>
                                <div>Quantity: {cart.quantity}</div>
                                <div>Price: ₹{cart.price}</div>
                            </div>
                        ))
                    )}
                </div>
            </div> */}
        </div>
        <div className='w-[30%] h-[70%]  mr-20 m-4 rounded-sm shadow-slate-100'>
            <div className=' bg-white '>
            <div className='text-slate-600 border-b p-3 font-semibold'>
                Price Details
            </div>
            <div className='text-slate-600 border-b p-3'>
                Coupans For You
            </div>
            
            <div className=' border-b p-3 font-bold'>
                Total Price
            </div>
            </div>
            <br></br>
            <br></br>

            <div className=' bg-white'>
            <div className='font-bold border-b p-3  '>
            <span className=' text-sm flex'>Add items worth ₹410 more for FREE  <img src='https://rukminim2.flixcart.com/www/400/400/promos/06/04/2017/32f62e07-a9e4-4bfc-88d8-3eeb8b4be127.png?q=80' alt='Error' className='w-8 h-6 pl-2'></img> </span>
            <span className='text-sm'>Delivery</span>
            <span className='block text-xs text-slate-400'>Eligible only on select  products</span>
            
            </div>
            <div className=' border-b p-3 text-xs text-slate-500'>
                See products with Free Delivery
            </div>
            </div>

            <div className='flex p-2'>
                <AiOutlineSafety className='!bg-slate-600 text-white w-6 h-6 mr-3 rounded-full'/>
                <span className='text-xs text-slate-500 font-semibold'>Safe and Secure Payments.Easy returns.100% Authentic products.</span>
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default Main