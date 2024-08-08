import React from 'react'
import LOGO from "../assets/Images/TriageLogo.png";
import { Link } from 'react-router-dom';

const Userhome = () => {
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
              to="/Userhome"
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
        {/* Body */}
     <div className='mt-10 ml-5 mr-5 shadow-lg p-8'>
      <div className='flex flex-col gap-3'> 
     <h1 className='text-2xl font-medium'>Welcome to <span className='text-violet-700 font-semibold italic'>TRIAGE</span>,</h1>
      <p className='text-justify text-lg font-normal text-zinc-800 '> Here you can test your prioritising skills according to the need of the patients in an emergency situation where you have limited amount of medical assistance like natural disaster, wars, chemical attacks, neuclear attacks etc</p>
      </div>
    <div className='flex items-center justify-between mt-6'>
          <p className="text-sm md:text-xl font-medium">Practice new <span className='text-cyan-600 cursor-pointer hover:underline'>Exercise</span></p>
          <p className='text-sm md:text-xl font-medium'>Start your Exercise: <button className='text-cyan-600 cursor-pointer hover:underline'>JOIN</button></p>
          <p className="text-sm md:text-xl font-medium">Check results here: <button className='text-cyan-600 cursor-pointer hover:underline'>Results</button></p>
        </div>
    </div>

      </div>
    
    
        </> 
  )
}
export default Userhome;
