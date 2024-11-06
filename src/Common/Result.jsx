import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


  

const Result = () => {
    const navigate =useNavigate();
    const [results, setResults] = useState([]);
    const {state:query} = useLocation();
    console.log(query)
//   const queryParams = new URLSearchParams(location.search);
//   const query = queryParams.get('query');

  useEffect(() => {
      const fetchData = async()=>{
    if (query) {
      try{
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await res.json();
        console.log(data.products)
        setResults(data.products);
      }
      catch(error){
        console.log(error);
      }
     
    }
  }
  fetchData();
   
  }, [query]);
  console.log("Heelo",results)
  return (
    <div className='grid grid-cols-4 gap-4 bg-white'>
    {results?.map((data)=>(
    <div className='' >
        {console.log("hello",data)}
            <div className='pl-12' >
            <img
              src={data?.images[0]}
              alt={data.title}
              className="w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 pl-5 object-contain hover:cursor-pointer"
              onClick={() => navigate(`/productsDetails/${data.id}`)}
            />
            </div>

            <div className="hidden md:grid mt-2 text-center">
                <span className='block text-[16px] font-semibold truncate w-36 mx-auto'>{data.title}</span>
                <span className='font-bold text-[14px]'>From ₹{(data.price*10).toFixed(0)}</span>
            </div>
        
    </div>
    
))}




    </div>
  )
}

export default Result