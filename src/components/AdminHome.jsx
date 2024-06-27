import React from "react";
import LOGO from "../assets/Images/TriageLogo.png";
const AdminHome = () => {
  return (
    <div  className="bg-slate-700 min-h-[100vh]" >
      {/* navigation bar start from here */}
      <div className="flex justify-between bg-slate-900 px-8 py-4 shadow-2xl">
        <div className="flex gap-2 ">
        <button className="text-xl md:text-3xl font-bold text-white hover:text-sky-600">TRIAGE</button>
        <img src={LOGO}  className="w-10 h-10 rounded-full"/>
        </div>
        <ul className="flex gap-4 ">
          <ul className="text-violet-400 hover:underline text-md md:text-lg font-semibold hover:cursor-pointer" >Change Password</ul>
          <ul className="text-violet-400 hover:underline text-md md:text-lg font-semibold hover:cursor-pointer">Sign Out</ul>
        </ul>
      </div>
     
     {/* body of the page */}
     <div className=" pt-16 flex flex-col items-center gap-6">

     <span className="text-3xl  font-semibold md:text-5xl italic text-cyan-400">Welcome back Admin... </span>
      <div className="flex flex-col px-20 md:px-52 gap-8 items-center bg-slate-800 shadow-2xl rounded-xl py-24 md:py-20 ">
             
       <li className="flex flex-col items-left justify-center gap-10 ">
        <li className="text-2xl md:text-3xl font-medium text-neutral-300 hover:text-white hover:cursor-pointer">List of Exercise</li>
        <li className="text-2xl md:text-3xl font-medium text-neutral-300 hover:text-white hover:cursor-pointer">Cases</li>
        <li className="text-2xl md:text-3xl font-medium text-neutral-300 hover:text-white hover:cursor-pointer">Questionaries</li>
        <li className="text-2xl md:text-3xl font-medium text-neutral-300 hover:text-white  hover:cursor-pointer">New Exercise</li>
       </li>
      </div>
      </div>
    </div>

  );
};

export default AdminHome;
