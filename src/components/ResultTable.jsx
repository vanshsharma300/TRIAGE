import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import LOGO from "../assets/Images/TriageLogo.png";

const ResultTable = () => {
  const { exerciseName, id } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
 const temp = localStorage.getItem('admin')=='yes' ?`/AdminHome/24` :`/Userhome/${id}`

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const { data: selectedColorsData } = await axios.get(`http://localhost:8081/getSelectedColors/${id}`);
        const { data: caseData } = await axios.get(`http://localhost:8081/getcase`);

        const temp = selectedColorsData.data.filter(color => color.exerciseName === exerciseName);

        setSelectedColors(temp);

        // Filter the caseData based on matching description_ with quesName
        const filtered = caseData.data.filter(caseItem =>
          temp.some(selectedColor => selectedColor.quesName === caseItem.description_)
        );

        setFilteredData(filtered);

      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, [id, exerciseName]);

  return (
    <div className='bg-[#f4f4f4]'>
      <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
        <div className="flex gap-1 ">
          <img
            src={LOGO}
            className="mt-[-4px] cursor-pointer w-10 h-10 rounded-full hover:opacity-75 "
          />
          <Link
            to
            className="text-2xl md:text-3xl font-bold text-stone-600 hover:text-stone-800"
          >
            T R I A G E
          </Link>
        </div>
        <ul className="flex gap-4 ">
          <Link
            to=""
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
      <div className='mb-6 mt-8 flex justify-around '>
        <h1 className='text-3xl font-bold text-red-600'>Result of Exercise</h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="border min-w-full text-center text-sm font-light">
                <thead className="font-medium bg-amber-950 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4">Case</th>
                    <th scope="col" className="px-6 py-4">Correct Answer</th>
                    <th scope="col" className="px-6 py-4">Your Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => {
                    const userColor = selectedColors.find(color => color.quesName === item.description_);
                    return (
                      <tr key={item.id} className='font-medium border-b border-zinc-800'>
                        <td className="whitespace-nowrap px-6 py-4">{item.description_}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.color}</td>
                        <td className="whitespace-nowrap px-6 py-4">{userColor?.selectedColor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className='flex mt-5 justify-center'>
                <Link to={temp} className="border-2 border-black px-4 py-1 bg-zinc-400 font-medium rounded-lg">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultTable;
