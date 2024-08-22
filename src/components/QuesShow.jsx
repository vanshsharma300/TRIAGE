import axios from 'axios';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const ManualQues = () => {
  const[info, setInfo] = useState([]);
  const {id,name} = useParams();
  useEffect(()=>{  
    
  const dataFetch = async()=>{
   try {
    const {data} = await axios.get(`http://localhost:8081/getQuesById/${name}`)
  
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
    <div className='flex flex-col mt-12 items-center mb-10'>
      <div className='mb-4'>
        <Link to={`/ListofQuestionnaires/${id}`}  className='text-left text-3xl font-semibold hover:underline'>List of Questionnaire</Link>
      </div>
      <div className='border shadow-xl rounded-3xl mb-8 w-5/6 md:w-4/5 bg-white'>
      <form action="">

      <div className='flex flex-col items-center mt-10 mb-8 gap-2'>
          <h1 className='text-lg font-bold'>Name of Questionnaire:</h1>
          <input
           value={name}
            type="text"
            required
            className='w-1/2 font-semibold border-2 border-zinc-800 px-2 py-1'
           />
        </div>
        <div className="flex flex-col">
          <h1 className='text-center text-xl font-medium italic'>Below are the selected cases:</h1>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="border min-w-full text-center text-sm font-light">
                  <thead className="font-medium bg-blue-900 text-white">
                    <tr>
                   
                      <th scope="col" className="px-6 py-4">Case Description</th>
                      <th scope="col" className="px-6 py-4">Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {info && info.map((data) => (
                      <tr key={data.id} className='font-medium border-b border-zinc-800'>
                       
                        <td className="whitespace-nowrap px-6 py-4">{data.description_}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <input
                            checked
                            type="checkbox"
                            className='w-12'
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ManualQues;
