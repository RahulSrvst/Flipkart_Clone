import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SellIcon from "@mui/icons-material/Sell";
import TextField from "@mui/material/TextField";

function Details() {
  const { id } = useParams();
  console.log("IDS:", id);

  const [dta, setTheData] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTheData(res);
        console.log("DTA:", res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  return (
    <div className="mx-10">
      <div className="grid grid-cols-[550px_auto] bg-white">
        {/* Left Section */}
        <div className="relative m-4">
          <div className="box border">
            <img
              src={dta?.images?.[0]}
              alt={dta?.title}
            //   className="transition-transform duration-300 ease-in-out hover:scale-150"
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
        <div>
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
            <span className="text-[20px] font-bold">{dta?.title}</span>
            <span className="text-[16px] ml-2 text-slate-500">(Black)</span>
          </div>

          {/* Price & Discount */}
          <div className="mt-2">
            <span className="text-[14px] font-semibold text-green-600">
              Special price
            </span>
            <div className="flex items-center mt-1">
              <span className="font-bold text-[28px]">
                ₹ {(dta?.price * 100).toFixed(0)}
              </span>
              <span className="text-[20px] font-semibold text-slate-400 ml-3 line-through">
                ₹ {(dta?.price * 150).toFixed(0)}
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
                  <td>{dta?.brand}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Model</td>
                  <td>{dta?.title}</td>
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
        </div>
      </div>
    </div>
  );
}

export default Details;
