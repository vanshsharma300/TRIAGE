import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import LOGO from "../assets/Images/TriageLogo.png";

const GlobalResult = () => {
  const { id, exerciseName } = useParams();
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    console.log(exerciseName);
    
    const fetchResultData = async () => {
      try {
        const { data: resultResponse } = await axios.get(
          `http://localhost:8081/get-correct-answer-percentage/${exerciseName}`,
        );
        console.log(resultResponse); // Debugging: Check what the API returns
        setResultData(resultResponse.data);
      } catch (error) {
        console.log("Error fetching result data:", error);
      }
    };
    fetchResultData();
  }, [exerciseName]);

  return (
    <div>
      <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg">
        <div className="flex gap-1">
          <img
            src={LOGO}
            className="mt-[-4px] cursor-pointer w-10 h-10 rounded-full hover:opacity-75"
            alt="Triage Logo"
          />
          <Link
            to=""
            className="text-2xl md:text-3xl font-bold text-stone-600 hover:text-stone-800"
          >
            T R I A G E
          </Link>
        </div>
        <ul className="flex gap-4">
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
      <div className="mb-6 mt-8 flex justify-around">
        <h1 className="text-3xl font-bold text-red-600">Result of Exercise</h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="border min-w-full text-center text-sm font-light">
                <thead className="font-medium bg-amber-950 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Case
                    </th>
                    <th scope="col" className="px-6 py-4">
                      % Correct Answer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {resultData.length > 0 ? (
                    resultData.map((caseItem, index) => (
                      <tr
                        key={index}
                        className="font-medium border-b border-zinc-800"
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          {caseItem.quesName || "No Case Name"}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {caseItem.correctPercentage !== undefined
                            ? Number(caseItem.correctPercentage).toFixed(2)
                            : "N/A"}
                          %
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="whitespace-nowrap px-6 py-4">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="flex mt-5 justify-center">
                <Link
                  //   to={`/Jointest/${exerciseName}`}
                  className="border-2 border-black px-4 py-1 bg-zinc-400 font-medium rounded-lg"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalResult;
