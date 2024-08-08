import React, { useCallback, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import LOGO from "../assets/Images/TriageLogo.png";
import axios from 'axios';
const ListofCases = () => {

  const[info, setInfo] = useState([]);
  
  const handleDelete = async(id)=>{
    try {
      console.log("id:",id)
      await axios.post("http://localhost:8081/deletecase",{id})
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(()=>{  
    
  const dataFetch = async()=>{
   try {
    const {data} = await axios.get("http://localhost:8081/getcase")
    
    console.log("info data :",data);
    setInfo(data.data);
    console.log(info)
   
  
   } catch (error) {
    console.log(error)
   }
  } 
  dataFetch();
  },[]) 

  

  return (
    <div>
       {/* Navigation bar */}
       <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
        <div className="flex gap-1 ">
          <Link
            to="/AdminHome"
            className="text-2xl md:text-3xl font-bold text-stone-600 hover:text-stone-800"
          >
            T R I A G E
          </Link>
          <img
            src={LOGO}
            className="mt-[-4px] cursor-pointer w-10 h-10 rounded-full hover:opacity-75 "
          />
        </div>
        <ul className="flex gap-4 ">
          <Link
            to="/ChangePass"
            className="text-cyan-600 hover:underline text-md md:text-lg font-semibold hover:cursor-pointer"
          >
            Change Password
          </Link>
          <Link
            to="/"
            className="text-cyan-600 hover:underline text-md md:text-lg font-semibold hover:cursor-pointer"
          >
            Sign Out
          </Link>
        </ul>

      </div>

      {/* body of the page */}
      <div className="py-3 flex flex-col gap-10 min-h-screen container px-8">
        <div className="flex items-center justify-between">
          <h1 className=" text-xl md:text-4xl font-medium italic">
            List of Cases
          </h1>
          <Link
            to="/Newcase"
            className="md:text-2xl font-medium text-blue-600 hover:underline"
          >
            Add Case
          </Link>
        </div>
        <div className="grid grid-cols-1 text-lg md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-default">
      
       {
        
        info.map((data)=>(
          <div key={data.id} className="rounded-xl shadow-lg hover:shadow-2xl bg-white">
          <div className="p-5 flex flex-col">
            
            <h2 className="text-xl font-medium mt-3">Case {data.id}</h2>
            <p className="text-sm md:text-lg text-slate-400 text-justify mt-2">
         {data.description_}
            </p>
            <div className='flex justify-evenly w-full'>
            <Link
             to ={`/Caseshow/${data.id}`}
              className="bg-violet-700 text-white hover:bg-violet-600 py-2 px-7 rounded-lg text-center mt-2"
            >
              Show
            </Link>
            <button 
              onClick={()=>handleDelete(data.id)}
              className="bg-violet-700 text-white hover:bg-violet-600 py-2 px-7 rounded-lg text-center mt-2"
            >
              Delete
            </button>
            </div>
           
          </div>
        </div>
        ))
       }
        </div>
      </div>
    </div>
  )
}

export default ListofCases
