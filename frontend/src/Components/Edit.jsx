import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from './BaseUrl';

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  // fetch the data to edited form
  const singleInter = async()=>{
    const response = await fetch(`/api/interns/${id}`);
    const result = await response.json(singleInter);
    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }
    if(response.ok){
      setError("");
      setName(result.name);
      setEmail(result.email);
      setPosition(result.position);
      setExperience(result.experience);
      console.log("need to update intern: ", result);
    }
  }
  useEffect(()=>{
    singleInter();
  },[])


  // update intern
  const handleUpadte = async(e)=>{
    e.preventDefault();
    const updateIntern = {name, email, position, experience};
    const response = await fetch(`${baseUrl}/api/interns/${id}`, 
    {
      method: "PUT",
      body: JSON.stringify(updateIntern),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error);
      toast.warn(error);
    }
    if(response.ok){
      toast.success("Update Succesfully");
      console.log("updated intern: ",result);
      setError("");
      navigate("/data");
    }
  }
  return (
    <>
     <div className=" max-w-[500px] max-h-[800px] p-8 mx-auto bg-white shadow-2xl mt-12 rounded-lg">
    <form 
    onSubmit={handleUpadte}
    className="max-w-sm mx-auto" >
       <div className="mb-5">
         <label
           className="block mb-2 text-sm font-medium text-gray-900 "
         >
           Name
         </label>
         <input
           type="name"
           name="name"
           value={name}
           onChange={(e)=>setName(e.target.value)}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
           required
         />
       </div>
       <div className="mb-5">
         <label
           className="block mb-2 text-sm font-medium text-gray-900"
         >
           Your email
         </label>
         <input
           type="email"
           name="email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
           placeholder="name@123.com"
           required
         />
       </div>
       <div className="mb-5">
         <label
           className="block mb-2 text-sm font-medium text-gray-900 "
         >
           Position
         </label>
         <input
           type="text"
           name="position"
           value={position}
           onChange={(e)=>setPosition(e.target.value)}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
           required
         />
       </div>
       <div className="mb-5">
         <label
           className="block mb-2 text-sm font-medium text-gray-900 "
         >
          Experience
         </label>
         <input
           type="text"
           name="experience"
           value={experience}
           onChange={(e)=>setExperience(e.target.value)}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
           required
         />
       </div>
       <button
         type="submit"
         className="mt-8 text-white flex justify-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-[170px] py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
       >
         Update
       </button>
     </form>
    </div>
    </>
  )
}

export default Edit
