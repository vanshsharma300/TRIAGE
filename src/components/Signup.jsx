import React from "react";
import LOGIN from "../assets/Images/Loginimg.jpeg";
import DRDOICON from "../assets/Images/DrdoLogo.jpeg";
import LOGO from "../assets/Images/TriageLogo.png";

const Signup = () => {
  return (
    <div className="flex w-full h-screen">
      {/* This div is for image */}
      <div className="hidden lg:flex justify-center w-1/2 h-full">
        <div className="w-full h-full border-2 flex flex-col justify-center items-center ">
          <div className=" w-3/4 text-center border   bg-white rounded-xl h-4/5 shadow-2xl">
          <div className="flex items-center justify-center w-full bg-slate-700 text-white p-4 text-2xl  font-semibold rounded-t-xl border-b-4 border-zinc-500  gap-1">
            <h1 className="">
              TRIAGE
            </h1>
            <img src={LOGO} className="w-10 h-10 rounded-full"/>
            </div>
            <img src={LOGIN} className="w-full h-1/2 shadow-lg" />

            <p className="mt-4 text-justify text-zinc-600 text-lg px-3">
              {" "}
              The sorting of and allocation of treatment to patients and
              especially battle and disaster victims according to a system of
              priorities designed to maximize the number of survivors or in
              other words, Sorting of patients (as in an emergency room)
              according to the urgency of their need for care.
            </p>
          </div>
        </div>
      </div>

    {  /* This is form second div for sign up */}

      <div className="w-full flex flex-col gap-2 items-center justify-center lg:w-1/2 py-7 mt-2">
        <h1 className="text-3xl font-bold text-slate-600 text-opacity-75 mb-2 ">
          T R I A G E
        </h1>

        {/* form starts from here */}
        <div className="flex flex-col bg-white px-28 py-2 items-center justify-center rounded-lg w-[450px] shadow-2xl">
          <div>
            <h1 className="text-3xl font-bold flex justify-center">Register</h1>
            <p className="text-lg font-light my-1">Enter your details:</p>
            <div>
              <label className="text-lg font-semibold ">Email</label>
              <input
                className="w-[400px] border px-4 py-2 my-3 bg-transparent "
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-lg font-semibold ">Password</label>
              <input
                className="w-[400px] border px-4 py-2 my-3 bg-transparent "
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col justify-center mt-2 ">
              <label className="text-lg font-semibold pb-2">
                Forgot password question
              </label>
              <select className="text-md text-blue-950 w-full  border  p-2 rounded-lg">
                <option className="font-semibold">
                  Select your forgot password question
                </option>
                <option className="FatherName">
                  What is your Father's name?
                </option>

                <option className="MotherName">
                  What is your Mother's name?
                </option>
                <option className="BirthPlace">
                  What is your Birth place?
                </option>
              </select>

              <input
                className="w-[400px] border px-4 py-2 mt-4 bg-transparent rounded-lg"
                type="text"
                placeholder="Enter your Answer"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <button className=" border-2 py-3 font-medium text-white bg-violet-500 rounded-full hover:font-bold hover:bg-violet-700">
                Sign Up
              </button>
              <p className="text-md font-medium text-center">
                Done with the sign up?
              </p>
              <button className="border-2 py-3 font-medium text-white bg-black rounded-full hover:bg-zinc-900 hover:font-bold ">
                Log In
              </button>
              <div className="flex items-center justify-center gap-2">
                <p className="font-medium">developed by</p>
                <img src={DRDOICON} className="w-18 h-16 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Signup;