import { React, useState } from "react";
import LOGO from "../assets/Images/TriageLogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import {useNavigate } from "react-router-dom";



const Newcase = () => {
  const [description, setDescription] = useState("");
  const [respiration, setRespiration] = useState(0);
  const [position, setPosition] = useState(false);
  const [perfusion, setPerfusion] = useState(0);
  const [mental, setMental] = useState("can follow");
  const [color, setColor] = useState("black");
  const [info, setInfo] = useState("");
  const [file, setFile] = useState(null);
 
  const navigate =useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("respiration", respiration);
    formData.append("position", position);
    formData.append("perfusion", perfusion);
    formData.append("mental", mental);
    formData.append("color", color);
    formData.append("info", info);
    formData.append("file", file);



    try {
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      await axios.post("http://localhost:8081/case",formData,{
        headers : {
          "Content-Type" : "multipart/form-data"
        }
      });
      navigate("/ListofCases")
    } catch (error) {
      console.log("frontend axios", error);
    }
  };

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
        {/*  Body  */}
        <div className=" text-center">
          <div className="flex items-center justify-center">
            <h1 className="text-xl bg-violet-600 w-full text-white r border border-black">
              Case Information
            </h1>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="shadow-xl py-8 px-4 border-2 mx-5  flex flex-col gap-3"
          >
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              id=""
              placeholder="Description..."
              className="py-3 px-3 border-2 border-stone-500 w-2/4 "
            ></textarea>

            <div className="flex flex-col">
              <label className="text-left font-medium">
                Respiration (breaths/minute) ?
              </label>
              <input
                onChange={(e) => setRespiration(e.target.value)}
                type="number"
                className="border-2 border-stone-500 px-3 w-2/4"
              />
            </div>

            <div className="flex  items-left gap-3">
              <label className="font-medium">Position airway</label>
              <input
                onChange={() => setPosition(!position)}
                type="checkbox"
                className="w-4"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-left font-medium">
                Perfusion(beats/minute) ?
              </label>
              <input
                onChange={(e) => setPerfusion(e.target.value)}
                type="number"
                className="border-2 border-stone-500 px-3 w-2/4"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-left font-medium">Mental Status</label>
              <select
                onChange={(e) => setMental(e.target.value)}
                type=""
                className="border-2 border-stone-500 px-3 w-2/4"
              >
                <option value="can follow">Can follow</option>
                <option value="cannot follow">Cannot follow</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-left font-medium">Color</label>
              <select
                onChange={(e) => setColor(e.target.value)}
                type=""
                className="border-2 border-stone-500 px-3 w-2/4"
              >
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </select>
            </div>

            <textarea
              onChange={(e) => setInfo(e.target.value)}
              name="description"
              id=""
              placeholder="Extra Information..."
              className="py-3 px-3 border-2 border-stone-500 w-2/4 "
            ></textarea>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" />
            <div>
              <button
                type="submit"
                className="border-2 border-black px-3 bg-zinc-400 font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newcase;
