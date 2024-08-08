import React from "react";
import LOGO from "../assets/Images/TriageLogo.png";

// import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <>
      <div className="bg-[#f4f4f4] min-h-[100vh]">
        {/* navigation bar start from here */}
        <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
          <div className="flex gap-1 ">
            <img
              src={LOGO}
              className="mt-[-4px] cursor-pointer w-10 h-10 rounded-full hover:opacity-75 "
            />
            <Link
              to="/AdminHome"
              className="text-2xl md:text-3xl font-bold text-stone-600 hover:text-stone-800"
            >
              T R I A G E
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
        {/* body of the page */}
        <div className=" pt-16 flex flex-col justify-center items-center gap-6">
          <span className="text-3xl  font-semibold md:text-5xl italic text-slate-600">
            Welcome back Admin!
          </span>
          <div className="flex flex-col px-20 md:px-52 gap-8 items-center bg-[#beb9b9] shadow-2xl rounded-xl py-16 md:py-26 ">
            <ol className="flex flex-col items-left justify-center gap-10 ">
              <Link
                to="/ListofExercise"
                className="text-2xl md:text-3xl font-medium text-neutral-800 hover:cursor-pointer hover:text-neutral-600 px-10 py-2"
              >
                List of Exercise
              </Link>
              <Link
                to="/ListofCases"
                className="text-2xl md:text-3xl font-medium text-neutral-800 hover:cursor-pointer hover:text-neutral-600 px-10 py-2"
              >
                Cases
              </Link>
              <Link
                to="/ListofQuestionnaires"
                className="text-2xl md:text-3xl font-medium text-neutral-800 hover:cursor-pointer hover:text-neutral-600 px-10 py-2"
              >
                Questionnaries
              </Link>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
