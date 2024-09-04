import React, { useEffect, useState } from "react";
import profile from "../assets/3d.jpg"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "./BaseUrl";

const AllData = () => {
  const[data, setData] = useState();
  const[error, setError] = useState("");
  const getData = async()=>{
    const response = await fetch(`${baseUrl}/api/interns`);
    const result = await response.json();
    if(!response.ok){
      console.log(result.error);
      setError(result.error);
      toast.error(result.error);
    }
    if(response.ok){
      setError("");
      setData(result);
    }
  }

  // delete intern
  const handleDelete = async(id)=>{  
    const response = await fetch(`${baseUrl}/api/interns/${id}`,
   { 
    method: "DELETE"
   });
   const result = await response.json();
   if(!response.ok){
    console.log(result.error);
    setError(result.error);
    toast.error(result.error);
  }
  if(response.ok){
    toast.success("Deleted Successfully");
    setError("Deleted Successfully");
    getData();
  }
  }
  useEffect(()=>{
    getData();
  }, [])
  console.log(data);
  return (
    <>
      <h1 className="flex justify-center items-center mt-8 mx-auto text-5xl text-gray-900 font-bold mb-16">
        All Interns {data && `(${data.length})`}
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4  lg:gap-8 items-center justify-center px-8 mx-auto md:mx-auto lg:max-w-[1400px] md:max-w-[900px] my-12"> 
       {data && data.map((ele)=>(
         <div key={ele._id} className="flex flex-col items-center pb-10">
         <img
           className="w-24 h-24 mb-3 rounded-full shadow-lg"
           src={profile}
           alt="Bonnie image"
         />
         <h5 className="mb-1 text-xl font-medium text-gray-900">
           {ele.name}
         </h5>
         <span className="text-sm text-gray-700 font-medium mb-1.5">
           {ele.position}
         </span>
         <span className="text-sm text-gray-700">
         {ele.email}
         </span>
         <span className="text-sm text-gray-700">
         {ele.experience}
         </span>
         <div className="flex mt-4 md:mt-6">
           <Link
           to={`/${ele._id}`}
             href="#"
             className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
           >
             Edit
           </Link>
           <a
           onClick={()=> handleDelete(ele._id)}
             href="#"
             className="inline-flex items-center py-2 px-4 ms-2 text-sm font-medium text-white focus:outline-none  bg-red-600 rounded-lg border border-gray-200 hover:bg-red-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-red-300 "
           >
             Delete
           </a>
         </div>
       </div>
       ))}
      </div>
    </>
  );
};

export default AllData;
