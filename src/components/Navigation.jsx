import React from 'react'
import LOGO from "../assets/Images/TriageLogo.png";

const Navigation = () => {
  return (
    <div>
       {/* navigation bar start from here */}
     <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
        <div className="flex gap-1 ">
        <Link to="/AdminHome" className="text-xl md:text-3xl font-bold text-stone-600 hover:text-stone-800">T R I A G E</Link>
        <img src={LOGO}  className="mt-[-4px] cursor-pointer w-10 h-10 rounded-full hover:opacity-75 "/>
        </div>
        <ul className="flex gap-4 ">
          <Link to="/ChangePass" className="text-cyan-600 hover:underline text-md md:text-lg font-semibold hover:cursor-pointer" >Change Password</Link>
          <Link to='/' className="text-cyan-600 hover:underline text-md md:text-lg font-semibold hover:cursor-pointer">Sign Out</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
