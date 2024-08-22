import { Link, useParams } from 'react-router-dom';
import LOGO from "../assets/Images/TriageLogo.png";
import { useState, useEffect } from 'react';
import axios from 'axios';

const ListofResults = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const { data: resultData } = await axios.get(`http://localhost:8081/getSelectedColors/${id}`);
        console.log("Fetched resultData:", resultData); // Log fetched data

        // Filter unique exerciseNames
        const uniqueResults = resultData.data.reduce((acc, current) => {
          const x = acc.find(item => item.exerciseName === current.exerciseName);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);
        
        setInfo(uniqueResults); // Set info to uniqueResults
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    dataFetch();
  }, [id]);

  useEffect(() => {
    console.log("Updated info:", info); // Log updated info
  }, [info]);

  return (
    <div>
      <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
        <div className="flex gap-1">
          <Link to={`/Userhome/${id}`} className="text-2xl md:text-3xl font-bold text-stone-600 hover:text-stone-800">
            T R I A G E
          </Link>
          <img
            src={LOGO}
            className="mt-[-4px] cursor-pointer w-10 h-10 rounded-full hover:opacity-75"
            alt="Triage Logo"
          />
        </div>
        <h1 className="text-3xl font-semibold text-red-500">Exercises</h1>
      </div>
      <div className="grid grid-cols-1 text-lg md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-default mt-4">
        {info.map((item, index) => (
          <div key={index} className="rounded-xl shadow-lg hover:shadow-xl">
            <div className="p-5 flex flex-col">
              <h2 className="text-xl font-medium mt-2 text-black bold text-justify">
               Exercise {index+1}
              </h2>
              <p> {item.exerciseName}</p>
              <div className="flex items-center justify-around">
                <Link
                  to={`/ResultTable/${encodeURIComponent(item.exerciseName)}/${id}`}
                  className="bg-violet-500 text-white hover:bg-violet-400 py-2 px-7 rounded-lg text-center mt-2"
                >
                  Show
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListofResults;
