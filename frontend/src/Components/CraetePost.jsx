import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CraetePost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const addIntern  = {name, email, position, experience};
    const response = await fetch(`/api/interns`, {
      method: "POST",
      body: JSON.stringify(addIntern),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    if(!response.ok){
      console.log(result.error);
      setError(result.error);
      toast.error(result.error);
    }
    if(response.ok){
      toast.success("Created Succesfully");
      console.log(result);
      setError("");
      setName("");
      setEmail("");
      setPosition("");
      setExperience("");
      navigate("/data");
    }
  }
  return (
    <>
    <div className=" max-w-[500px] max-h-[800px] p-8 mx-auto bg-white shadow-2xl mt-12 rounded-lg">
    {error && toast.warn({error})}
    <form 
    onSubmit={handleSubmit}
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
         Submit
       </button>
     </form>
    </div>
   </>
  )
}
  
export default CraetePost
