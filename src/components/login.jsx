import React, { useState } from "react";
import LOGIN from "../assets/Images/Loginimg.jpeg";
import LOGO from "../assets/Images/TriageLogo.png";
import DRDOICON from "../assets/Images/DrdoLogo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../loginValidation";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email, password);
    setErrors(
      Validation({
        email,
        password,
      })
    );
    if(errors.email !== "" && errors.password !== ""){
      
   
     try {

      const {data} = await axios.post('http://localhost:8081/login', {email, password})
      console.log(data.data[0].admin_)
      if(data.data[0].admin_==1){
        navigate("/AdminHome")
      }
      else{
        navigate('/Userhome')
      }
    

      console.log(data)
     } catch (error) {
       console.log(error)
     }
     }
  };

  return (
    <div className="flex w-full h-screen">
      {/* This div is for image */}
      <div className="hidden lg:flex justify-center w-1/2 h-full">
        <div className="w-full h-full border-2 flex flex-col justify-center items-center ">
          <div className=" w-3/4 text-center border   bg-white rounded-xl h-4/5 shadow-2xl">
            <div className="flex items-center justify-center w-full bg-slate-700 text-white p-4 text-2xl  font-semibold rounded-t-xl border-b-4 border-zinc-500  gap-1">
              <h1 className="">TRIAGE</h1>
              <img src={LOGO} className="w-10 h-10 rounded-full" />
            </div>
            <img src={LOGIN} className="w-full h-1/2 shadow-2xl" />

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

      {/* This is form second div for form */}

      <div className=" flex flex-col gap-4 items-center justify-center lg:w-1/2">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="text-3xl font-bold text-slate-600 text-opacity-75 mb-2 ">
            T R I A G E
          </h1>
          <img src={LOGO} className="w-12 h-12 rounded-full mt-[-16px]" />
        </div>
        {/* form starts from here */}
        <div className="flex flex-col bg-white px-8 py-10 items-center justify-center rounded-lg  w-[450px] shadow-2xl mx-6">
          <form action="" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold flex justify-center">
              Welcome!
            </h1>
            <p className="text-lg font-light my-1">Enter your details:</p>
            <div>
              <label className="text-lg font-semibold ">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-[400px] border px-4 py-2 my-3 bg-transparent "
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-danger text-red-600">{errors.email}</span>
              )}
            </div>

            <div>
              <label className="text-lg font-semibold ">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-[400px] border px-4 py-2 my-3 bg-transparent "
               c type="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-danger text-red-600">
                  {errors.password}
                </span>
              )}
            </div>
            <div>
              <button className="hover:underline text-violet-700">
                Forgot password?
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <button
                onClick={handleSubmit}
                className=" border-2 py-3 font-medium text-white bg-violet-500 rounded-full hover:font-bold hover:bg-violet-700"
              >
                Log In
              </button>
              <p className="text-lg font-medium text-center">
                Don't have an account?
              </p>
              <Link
                to="/signup"
                className="border-2 py-3 font-medium text-white bg-zinc-900 rounded-full hover:bg-black hover:font-bold text-center"
              >
                Create Account
              </Link>

              <div className="flex items-center justify-center gap-2">
                <p className="font-medium">developed by</p>
                <img src={DRDOICON} className="w-18 h-16 rounded-full" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
