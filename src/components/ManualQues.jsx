import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

const ManualQues = () => {
  const [name, setName] = useState("");
  const [isCase, setIsCase] = useState([]);
  const [info, setInfo] = useState([]);

  // const navigate= useNavigate();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8081/getcase");
        console.log("info data:", data);
        setInfo(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  const handleCheck = (id) => {
    setIsCase((prev) => {
      if (prev.includes(id)) {
        return prev.filter((caseId) => caseId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const postData = {
        name,
        cases: isCase
      };
      const response = await axios.post("http://localhost:8081/submitcase", postData);
      console.log("Submit response:", response.data);

    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className='flex flex-col mt-12 items-center mb-10'>
      <div className='border shadow-xl rounded-3xl mb-8 w-5/6 md:w-4/5 bg-white'>
      <form action="" onSubmit={handleSubmit}>

      <div className='flex flex-col items-center mt-10 mb-8 gap-2'>
          <h1 className='text-lg font-bold'>Enter name of Questionnaire:</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            className='w-1/2 border-2 border-zinc-800 px-2 py-1'
                     />
        </div>
        <div className="flex flex-col">
          <h1 className='text-center text-xl font-medium italic'>Select below cases:</h1>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="border min-w-full text-center text-sm font-light">
                  <thead className="font-medium bg-blue-900 text-white">
                    <tr>
                      <th scope="col" className="px-6 py-4">Snapshot</th>
                      <th scope="col" className="px-6 py-4">Description</th>
                      <th scope="col" className="px-6 py-4">Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.map((data) => (
                      <tr key={data.id} className='font-medium border-b border-zinc-800'>
                        <td className="whitespace-nowrap px-6 py-4">
                          <img src={`http://localhost:8081/${data.image}`} alt="pic1" className='border border-black w-36 h-20' />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{data.description_}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <input
                            checked={isCase.includes(data.id)}
                            onChange={() => handleCheck(data.id)}
                            type="checkbox"
                            className='w-12'
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='flex items-center justify-center mt-10 mb-10'>
                  <button
                    type="submit"
                    className="border-2 border-black px-3 bg-zinc-400 font-medium"
                  >
                    Submit
                  </button>
                </div>
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
