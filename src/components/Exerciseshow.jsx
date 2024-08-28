import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import LOGO from "../assets/Images/TriageLogo.png";
import axios from "axios";


const Exerciseshow = () => {
  const { id } = useParams();

    const[info, setInfo] = useState([]);
    let {name} = useParams();
if(name.includes('%20')){
    
    name = name.split('%20');
    name= name.join(" ");
}
console.log(name);
   
    useEffect(()=>{  
      
    const dataFetch = async()=>{
     try {
      const {data} = await axios.get(`http://localhost:8081/getExerciseById/${name}`)
    
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
    {/* navigation bar */}
    <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
      <div className="flex gap-1 ">
        <Link
          to={`/ListofExercise/${id}`}
          className="text-2xl md:text-3xl italic font-bold text-stone-600 hover:text-stone-800"
        >
        List of Exercise
        </Link>
        
      </div>
      <ul className="flex gap-4 ">
        <Link
          
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
   
    <div className="flex flex-col mt-9 items-center mb-10 ">
      <div className="border shadow-xl rounded-3xl mb-8 w-5/6 md:w-4/5 bg-white">
        <form action="" >
          <div className="flex flex-col items-center mt-10 mb-8 gap-2">
            <label className="text-lg font-bold">Enter name of Exercise :</label>
            <input
             value={name}
              type="text"
              className="w-1/2 border-2 border-zinc-800 px-2 py-1"
            />
          </div>
          <div className="flex flex-col items-center mt-10 mb-8 gap-2">
            <label className="text-lg font-bold">Name of the questionnaire</label>
            <input
             value={info[0]?.quesName}
              type="text"
              className="w-1/2 border-2 border-zinc-800 px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-center text-xl font-medium italic">
              Select below users:
            </h1>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="border min-w-full text-center text-sm font-light">
                    <thead className="font-medium bg-blue-900 text-white">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Results
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {info && info.map((data) => (
                        <tr key={data.id} className="font-medium border-b border-zinc-800">
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.username}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {data.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link to={`/ResultTable/${encodeURIComponent(data.exerciseName)}/${data.userId}`} className="hover:text-red-600">Result</Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* <div className="flex items-center justify-center mt-10 mb-10">
                    <button
                      type="submit"
                      className="border-2 border-black px-3 bg-zinc-400 font-medium"
                    >
                      Submit
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Exerciseshow
