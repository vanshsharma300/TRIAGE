import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  
  const [data,setData]= useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      alert("passwords does not match");
     return  //validation
    }
    const res = await axios.post("http://localhost:8081/changePassword",{confirmPassword,id})
    if(data.admin_!==null){
   navigate(`/AdminHome/${id}`)
    }
    else{
      navigate(`/Userhome/${id}`)
    }
  

  }

  useEffect(()=>{  
      
    const dataFetch = async()=>{
     try {
      const {data} = await axios.post(`http://localhost:8081/loginById`,{id})
      setData(data)
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
    <div className="space  flex justify-center w-full h-screen items-center">
      <div className="shadow-2xl p-6">
        <form action="" className="flex flex-col gap-2 w-96" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-slate-700 text-center">
            Change Your Password
          </h1>
          <input
            type="password"
            placeholder="Enter new password..."
            className="text-xl px-3 py-2 rounded-lg shadow-lg "
            onChange={(e)=>setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm new password..."
            className="text-xl px-3 py-2 rounded-lg shadow-lg"
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="border-2 bg-black text-white p-2 hover:bg-zinc-900">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;