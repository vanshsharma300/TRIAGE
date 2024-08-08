import React from 'react'
import { Link } from "react-router-dom";
import LOGO from "../assets/Images/TriageLogo.png";
import { useState ,useEffect} from 'react';
import axios from 'axios';


const ListofQuestionnaires = () => {
  const[info, setInfo] = useState([]);
  

  const handleDelete = async(id)=>{
    try {
      console.log("id:",id)
      await axios.post("http://localhost:8081/deleteQues",{id})
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(()=>{  
    
    const dataFetch = async()=>{
     try {
      const {data} = await axios.get("http://localhost:8081/getQues")
      
      console.log("info data :",data);
      setInfo(data.data);
      console.log(info)
     
    
     } catch (error) {
      console.log(error)
     }
    } 
    dataFetch();
    },[]) 

    const uniqueName = new Set();
    const uniqueData = info.filter(obj=>
    {
     if(!uniqueName.has(obj.quesName)){
      uniqueName.add(obj.quesName)
      return true;
     }
     return false;
    })
  
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
      <div className="py-3 flex flex-col gap-10 min-h-screen container mx-auto px-3">
        <div className="flex items-center justify-between">
          <h1 className=" text-xl md:text-4xl font-medium">
            List of Questionnaires
          </h1>
          <Link
            to="/NewQues"
            className="md:text-2xl font-medium text-blue-600 hover:text-blue-500"
          >
            Create Questionnaire
          </Link>
        </div>
        <div className="grid grid-cols-1 text-lg md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-default">
          {

     uniqueData.map((data)=>(
      <div className="rounded-xl shadow-lg hover:shadow-xl">
      <div className="p-5 flex flex-col">
        <div>
          
        </div>
        <h2 className="text-xl font-medium mt-3">Questionnaire </h2>
        <p className="text-sm md:text-lg text-slate-400 text-justify mt-2">
         {data.quesName}
        </p>
        <div className='flex items-center justify-around'>
        <Link
          to=""
          className="bg-blue-400 text-blue-800 hover:bg-blue-300 py-2 px-7 rounded-lg text-center mt-2"
        >
          Show
        </Link>
        <button
        onClick={()=>handleDelete(data.id)}
          className="bg-blue-400 text-blue-800 hover:bg-blue-300 py-2 px-7 rounded-lg text-center mt-2"
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

export default ListofQuestionnaires
