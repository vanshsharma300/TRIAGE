import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";



const Caseshow = () => {
  const[info, setInfo] = useState([]);
  const {id} = useParams();
 
  useEffect(()=>{  
    
  const dataFetch = async()=>{
   try {
    const {data} = await axios.post("http://localhost:8081/getcaseone",{id})
  
    console.log("info data :",data);
    setInfo(data.data[0]);
    console.log(info)
   
  
   } catch (error) {
    console.log(error)
   }
  } 
  dataFetch();
  },[]) 



    return (
        <>
          <div className="bg-[#f4f4f4] min-h-[100vh]">
            {/* navigation bar start from here */}
            <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg">
              <div className="flex gap-1">
               
                <Link
                  to="/ListofCases"
                  className="text-2xl md:text-3xl font-bold italic"
                >
                List of Cases
                </Link>
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


            {/*  Body  */}
            <div className=" text-center">
              <div className="flex items-center justify-center">
                <h1 className="text-xl bg-violet-600 w-full text-white r border border-black">
                  Case Information
                </h1>
              </div>
            

              <form
                action=""
                className="shadow-xl py-8 px-4 border-2 mx-5  flex flex-col gap-3"
              >
                <div>
                  <img src={"http://localhost:8081/"+info.image}  alt="" className="w-60 h-28 border-stone-800 border-4" />
                </div>
                <textarea
                  name="description"
                  value={info.description_}
                  id=""
                  placeholder="Description..."
                  className="py-3 px-3 border-2 border-stone-500 w-2/4 "
                ></textarea>
    
                <div className="flex flex-col">
                  <label className="text-left font-medium">
                    Respiration (breaths/minute) ?
                  </label>
                  <input
                  value={info.respiration}
                    type="number"
                    className="border-2 border-stone-500 px-3 w-2/4"
                  />
                </div>
    
                <div className="flex  items-left gap-3">
                  <label className="font-medium">Position airway</label>
                  <input
                  checked={info.position===1?"true":"false"}
                    type="checkbox"
                    className="w-4"
                  />
                </div>
    
                <div className="flex flex-col">
                  <label className="text-left font-medium">
                    Perfusion(beats/minute) ?
                  </label>
                  <input
                  value={info.perfusion}
                    type="number"
                    className="border-2 border-stone-500 px-3 w-2/4"
                  />
                </div>
    
                <div className="flex flex-col">
                  <label className="text-left font-medium">Mental Status</label>
                  <select
                    type=""

                    className="border-2 border-stone-500 px-3 w-2/4"
                  >
                    <option value="can follow" selected={info.mental_status=== "can follow"? "selected" : ""}>Can follow</option>
                    <option value="cannot follow"  selected={info.mental_status=== "cannot follow"? "selected" : ""}>Cannot follow</option>
                  </select>
                </div>
    
                <div className="flex flex-col">
                  <label className="text-left font-medium">Color</label>
                  <select
                  
                    type=""
                    className="border-2 border-stone-500 px-3 w-2/4"
                  >
                    <option value="black" selected={info.color=== "black"? "selected" : ""}>Black</option>
                    <option value="red" selected={info.color=== "red"? "selected" : ""}>Red</option>
                    <option value="yellow" selected={info.color=== "yellow"? "selected" : ""}>Yellow</option>
                    <option value="green" selected={info.color=== "green"? "selected" : ""}>Green</option>
                  </select>
                </div>
    
                <textarea
                value={info.extra_info}
                  name="description"
                  id=""
                  placeholder="Extra Information..."
                  className="py-3 px-3 border-2 border-stone-500 w-2/4 "
                ></textarea>
               
                <div>
                  <button
                    className="border-2 border-black px-3 bg-zinc-400 font-medium"
                  >
                    Edit
                  </button>
                </div>
              </form>
            
            </div>
          </div>
        </>
      );
}

export default Caseshow;
