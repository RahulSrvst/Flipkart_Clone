import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SellIcon from "@mui/icons-material/Sell";
import TextField from "@mui/material/TextField";
import { FaStar, FaUserCircle } from 'react-icons/fa';
import { FaThumbsUp, FaThumbsDown, FaSearch } from 'react-icons/fa';



function ProductsDetails() {
  const { id } = useParams();
  console.log("IDS:", id);

  const [page, setPageData] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPageData(res);
        console.log("DTA:", res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  const questions = [
    {
      question: 'Mivi Dolby Atmos support',
      answer: 'No',
      user: 'Shivendra Singh',
      location: 'Certified Buyer',
      upvotes: 106,
      downvotes: 71,
    },
    {
      question: 'Satellite Speakers are connected via bluetooth or it should be wired?',
      answer: 'Wired',
      user: 'Anonymous',
      location: 'Certified Buyer',
      upvotes: 32,
      downvotes: 21,
    },
    {
      question: 'In this Inbuilt FM?',
      answer: 'No',
      user: 'Anonymous',
      location: 'Certified Buyer',
      upvotes: 25,
      downvotes: 22,
    },
  ];

  return (
    <div className="mx-10">
      <div className="flex mx-10 bg-white  relative">
        {/* Left Section */}
        <div className="sticky top-5 self-start m-4 w-[550px]">
          <div className="box border">
            <img
              src={page?.images?.[0]}
              alt={page?.title}
              className="transition-transform duration-300 ease-in-out hover:scale-125"
            />
          </div>
          <div className="mt-3 text-center">
            <span className="font-semibold text-[16px] text-slate-500 shadow-md p-3 px-10 !w-[10vw]">
              <ShoppingCartIcon className="!text-[24px]" />
              ADD TO CART
            </span>
            <span className="ml-4 font-semibold text-[16px] bg-slate-400 text-white p-3 px-10 !w-[10vw]">
              <FlashOnIcon className="!text-[24px]" />
              BUY NOW
            </span>
          </div>
          <div className="absolute top-2 right-4 bg-white rounded-full shadow-md py-1 px-2.5 border">
            <FavoriteIcon className="!text-slate-400 !text-[16px]" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1" >
          {/* Breadcrumb */}
          <div className="text-[12px] text-slate-500 pt-4">
            <span>Home</span>
            <ArrowForwardIosIcon className="!text-[12px] !px-1 !text-slate-500" />
            <span>Mobile & Accessories</span>
            <ArrowForwardIosIcon className="!text-[12px] !px-1 !text-slate-500" />
            <span>Mobiles</span>
            <ArrowForwardIosIcon className="!text-[12px] !px-1 !text-slate-500" />
            <span>{page?.title}</span>
          </div>

          {/* Product Title */}
          <div>
            <span className="text-[20px] font-bold">{page?.title}</span>
            <span className="text-[16px] ml-2 text-slate-500">(Black)</span>
          </div>

          {/* Price & Discount */}
          <div className="mt-2">
            <span className="text-[14px] font-semibold text-green-600">
              Special price
            </span>
            <div className="flex items-center mt-1">
              <span className="font-bold text-[28px]">
                ₹ {(page?.price * 100).toFixed(0)}
              </span>
              <span className="text-[20px] font-semibold text-slate-400 ml-3 line-through">
                ₹ {(page?.price * 150).toFixed(0)}
              </span>
              <span className="text-[20px] font-semibold text-green-600 ml-3">
                50% Off
              </span>
            </div>
          </div>

          {/* Offers */}
          <div className="mt-4">
            <span className="font-semibold text-[16px]">Available Offers</span>
            <div className="text-[14px] flex flex-col gap-1 mt-2">
              <span>
                <SellIcon className="!text-[20px] !text-green-500 pr-1.5" />
                Get extra 15% off (price inclusive of cashback/coupon)T&C
              </span>
              {/* Add more offers similarly */}
              <span className="text-blue-500 font-semibold">
                View 13 more Offers
              </span>
            </div>
          </div>

          {/* Delivery Option */}
          <div className="flex items-center mt-4">
            <span className="!pt-4">Delivery</span>
            <div>
              <TextField
                id="standard-basic"
                placeholder="Enter Delivery Pincode"
                variant="standard"
                sx={{
                  "& input::placeholder": {
                    fontSize: "14px",
                  },
                }}
                className="!h-[5vh] !w-[16vw] !pl-6"
              />
            </div>
            <div className="ml-2 text-[14px] text-blue-500 underline cursor-pointer">
              Change
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-4">
            <span className="font-semibold text-[16px] block">Highlights</span>
            <ul className="list-disc ml-5 text-[14px] text-slate-600">
              <li>6.4-inch Super AMOLED Display</li>
              <li>64MP Quad Camera</li>
              <li>5000mAh Battery</li>
              <li>8GB RAM | 128GB ROM</li>
            </ul>
          </div>

          <div>
            <img src="https://rukminim2.flixcart.com/lockin/1000/1000/images/CCO__PP_2019-07-14.png?q=50" alt="Error" className="w-80 h-20 object-contain"/>
          </div>

          {/* Specifications */}
          <div className="mt-4">
            <div className="box border p-4  mr-3">
            <span className="font-semibold text-[24px] block">Specifications</span>
            </div>
            <table className="w-full text-[14px] text-slate-600 mt-2 border ">
              <tbody className="mr-3">
                <tr>
                  <td className="font-semibold">Brand</td>
                  <td>{page?.brand}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Model</td>
                  <td>{page?.title}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Battery</td>
                  <td>5000mAh</td>
                </tr>
                <tr>
                  <td className="font-semibold">Camera</td>
                  <td>64MP Quad</td>
                </tr>
                {/* Add more specifications as needed */}
              </tbody>
            </table>
          </div>

          <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      {/* Ratings & Reviews Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Ratings & Reviews</h2>
        <button className="bg-gray-200 px-4 py-2 rounded-md">Rate Product</button>
      </div>

      {/* Overall Rating */}
      <div className="flex gap-6 mb-6">
        <div className="flex items-center">
          <h3 className="text-4xl font-bold">4.2</h3>
          <FaStar className="text-yellow-500 text-3xl ml-2" />
        </div>
        <div>
          <p className="text-gray-600">3,173 Ratings & 409 Reviews</p>
          <div className="mt-2 space-y-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <span className="text-sm text-gray-600 w-4">{rating}</span>
                <div className="w-40 bg-gray-200 h-2 rounded-full mx-2 relative">
                  <div
                    className={`h-2 bg-green-500 rounded-full`}
                    style={{ width: `${rating * 20}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{Math.floor(3000 / rating)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Ratings */}
      <div className="flex justify-between mb-6">
        {['Sound Quality', 'Bass', 'Design & Build', 'Battery Backup'].map((feature, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-green-500">4.{index + 1}</div>
            <p className="text-sm text-gray-600">{feature}</p>
          </div>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="flex space-x-2 mb-6">
        {[1, 2, 3, 4, 5].map((img, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-gray-300 flex items-center justify-center"
          >
            {index === 4 ? <span className="text-lg font-semibold">+189</span> : null}
          </div>
        ))}
      </div>

      {/* Individual Review */}
      <div className="p-4 bg-gray-100 rounded-lg mb-4">
        <div className="flex items-center mb-2">
          <FaStar className="text-yellow-500" />
          <span className="ml-2 font-semibold">Terrific purchase</span>
        </div>
        <p className="text-gray-800 mb-2">
          This is the best soundbar I have ever used. Sound quality is great, design is also premium, bass is best. Overall value for money product.
        </p>
        <div className="flex items-center">
          <FaUserCircle className="text-gray-500 text-2xl mr-2" />
          <span className="text-sm font-semibold">Ujjawal Singh</span>
          <span className="text-xs text-gray-500 ml-2">Certified Buyer, Baraut • 1 month ago</span>
        </div>
        <div className="flex mt-4 space-x-4">
          <span className="text-sm text-gray-600 cursor-pointer">162 Likes</span>
          <span className="text-sm text-gray-600 cursor-pointer">53 Comments</span>
        </div>
      </div>
    </div>



    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      {/* Questions and Answers Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Questions and Answers</h2>
        <FaSearch className="text-gray-600 text-xl cursor-pointer" />
      </div>

      {/* Questions List */}
      {questions.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <div className="text-lg font-semibold">Q: {item.question}</div>
          <div className="text-lg text-gray-700">A: {item.answer}</div>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <span className="font-semibold">{item.user}</span>
            <span className="ml-2">{item.location}</span>
          </div>
          <div className="flex items-center mt-2 space-x-6 text-gray-600">
            <div className="flex items-center space-x-1 cursor-pointer">
              <FaThumbsUp />
              <span>{item.upvotes}</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <FaThumbsDown />
              <span>{item.downvotes}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-4 text-blue-600 cursor-pointer">
        <span>All questions</span>
        <span className="text-xl">+</span>
      </div>

      {/* Disclaimer Section */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
      </div>
    </div>



        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
