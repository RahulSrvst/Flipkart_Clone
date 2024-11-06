// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { IconButton } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const encryptPassword = (password) => {
//   return password;
// };

function SignPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lock, setLock] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const encryptedPassword = encryptPassword(password);

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email,
        password: password,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          toast.success('You logged in successfully!');
        } else {
          toast.error('Login failed. Please check your credentials.');
        }
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        toast.error('Network Error. Please check your connection and try again.');
      });
  };

  const handleLock = () => setLock(!lock);

  return (
    <div className="flex justify-center bg-slate-200">
      <div className="relative box h-[75vh] w-[60vw] shadow-md bg-white m-3 mb-5 rounded-lg">
        <form onSubmit={handleSubmit} className="box-4 grid grid-cols-2">
          <div className="relative bg-blue-600 col-span-1 rounded-l-lg">
            {/* Add your form elements here */}
          </div>
          <div>
            <div className="absolute top-1 right-1">
              <IconButton>
                <CancelOutlinedIcon />
              </IconButton>
            </div>
            <span className="text-xl font-bold pt-10 pl-7 block">Login</span>
            <span className="text-[14px] text-slate-400 font-bold pl-7 pb-12 block">
              Get access to your Order, Wishlist & Recommendations
            </span>

            <span className="text-sm font-bold pl-7 block">Enter E-mail/Mobile number</span>
            <div className="relative">
              <div className="absolute top-0 right-12">
                <IconButton>
                  <EmailOutlinedIcon className="!text-[24px]" />
                </IconButton>
              </div>
              <input
                type="text"
                placeholder="+91 9192939495"
                className="border-2 border-blue-400 w-[24vw] p-1 rounded-full ml-7 mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />

            <span className="text-sm font-bold pl-7 block">Enter Password</span>
            <div className="relative">
              <div className="absolute top-0 right-12">
                <IconButton onClick={handleLock}>
                  {lock ? (
                    <VisibilityOffIcon className="!text-[24px]" />
                  ) : (
                    <VisibilityIcon className="!text-[24px]" />
                  )}
                </IconButton>
              </div>
              <input
                type={lock ? 'password' : 'text'}
                placeholder="Enter Your Password"
                className="border-2 border-blue-400 w-[24vw] p-1 rounded-full ml-7 mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Directly update password
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 ml-7 p-1 pl-12 pr-12 rounded-full text-white"
            >
              Login
            </button>
            <button
              type="button"
              className="bg-white ml-5 p-1 pl-12 pr-12 rounded-full mb-20 text-blue-500 border-2 border-blue-400"
            >
              SignUp
            </button>

            <span className="block text-[10px] text-slate-400 ml-7">
              We no longer Support login via Social accounts. To Recover your old accounts
            </span>
            <span className="text-[10px] text-slate-400 ml-7">
              please
              <b className="text-[12px] text-blue-500 pl-1">Click here</b>
            </span>
          </div>
        </form>
      </div>
      <ToastContainer /> 
    </div>
  );
}

export default SignPage;
