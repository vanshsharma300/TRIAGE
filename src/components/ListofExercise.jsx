import React from "react";
import LOGO from "../assets/Images/TriageLogo.png";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ListofExercise = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);

  const handleDelete = async (exerciseName) => {
    try {
      console.log("id:", exerciseName);
      await axios.post("http://localhost:8081/deleteExercise", {exerciseName});
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8081/getExercise");
        console.log("info data :", data);
        setInfo(data.data);
        console.log(info);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  const uniqueName = new Set();
  const uniqueData = info.filter((obj) => {
    if (!uniqueName.has(obj.exerciseName)) {
      uniqueName.add(obj.exerciseName);
      return true;
    }
    return false;
  });

  return (
    <div>
      {/* Navigation bar */}
      <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
        <div className="flex gap-1 ">
          <Link
            to={`/AdminHome/${id}`}
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

      {/* body of the page */}
      <div className="py-3 flex flex-col gap-10 min-h-screen container mx-auto px-8">
        <div className="flex items-center justify-between mt-5">
          <h1 className=" text-xl md:text-4xl font-medium italic">
            List of Exercises
          </h1>
          <Link
            to={`/Newexercise/${id}`}
            className="md:text-2xl font-medium text-blue-600  hover:text-blue-500"
          >
            New Exercise
          </Link>
        </div>

        <div className="grid grid-cols-1 text-lg md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-default">
          {
          uniqueData.map((data,index) => (
            <div className="rounded-xl shadow-lg hover:shadow-xl">
              <div className="p-5 flex flex-col">
              <h2 className="text-xl font-medium mt-3">Exercise {index+1}</h2>
              <p className="text-sm md:text-lg text-slate-400 text-justify mt-2">
                  {data.exerciseName}
                </p>
                <div className="flex items-center justify-around">
                  <Link
                    to={`/Exerciseshow/${id}/${data.exerciseName}`}
                    className="bg-violet-500 text-white hover:bg-violet-400 py-2 px-7 rounded-lg text-center mt-2"
                  >
                    Show
                  </Link>
                  <button
                    onClick={() => handleDelete(data.exerciseName)}
                    className="bg-violet-500 text-white hover:bg-violet-400 py-2 px-7 rounded-lg text-center mt-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListofExercise;
