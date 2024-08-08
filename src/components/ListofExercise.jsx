import React from "react";
import LOGO from "../assets/Images/TriageLogo.png";
import { Link } from "react-router-dom";
const ListofExercise = () => {
  return (
    <div>
      {/* Navigation bar */}
      <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
        <div className="flex gap-1 ">
          <Link
            to="/AdminHome"
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
      <div className="py-3 flex flex-col gap-10 min-h-screen container mx-auto px-3">
        <div className="flex items-center justify-between">
          <h1 className=" text-xl md:text-4xl font-medium">
            List of Exercises
          </h1>
          <a
            href="#"
            className="md:text-2xl font-medium text-blue-600  hover:text-blue-500"
          >
            Create Exercise
          </a>
        </div>
        <div className="grid grid-cols-1 text-lg md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-default">
          <div className="rounded-xl shadow-lg hover:border-2">
            <div className="p-5 flex flex-col">
              <div>
                <h1 className="text-2xl font-semibold ">Heading</h1>
              </div>
              <h2 className="text-xl font-medium mt-3">Exercise 1</h2>
              <p className="text-sm md:text-lg text-slate-400 text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium laborum quos recusandae iusto doloribus odio animi
                assumenda accusantium, maiores est voluptatum, quibusdam dolorum
                fuga quae nostrum officia soluta nisi provident!
              </p>
              <a
                href="#"
                className="bg-blue-400 text-blue-800 hover:bg-blue-300 py-2 px-2 rounded-lg text-center mt-2"
              >
                Show
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-lg hover:border-2">
            <div className="p-5 flex flex-col">
              <div>
                <h1 className="text-2xl font-semibold ">Heading</h1>
              </div>
              <h2 className="text-xl font-medium mt-3">Exercise 2</h2>
              <p className="text-sm md:text-lg text-slate-400 text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium laborum quos recusandae iusto doloribus odio animi
                assumenda accusantium, maiores est voluptatum, quibusdam dolorum
                fuga quae nostrum officia soluta nisi provident!
              </p>
              <a
                href="#"
                className="bg-blue-400 text-blue-800 hover:bg-blue-300 py-2 px-2 rounded-lg text-center mt-2"
              >
                Show
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-lg hover:border-2">
            <div className="p-5 flex flex-col">
              <div>
                <h1 className="text-2xl font-semibold ">Heading</h1>
              </div>
              <h2 className="text-xl font-medium mt-3">Exercise 3</h2>
              <p className="text-sm md:text-lg text-slate-400 text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium laborum quos recusandae iusto doloribus odio animi
                assumenda accusantium, maiores est voluptatum, quibusdam dolorum
                fuga quae nostrum officia soluta nisi provident!
              </p>
              <a
                href="#"
                className="bg-blue-400 text-blue-800 hover:bg-blue-300 py-2 px-2 rounded-lg text-center mt-2"
              >
                Show
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-lg hover:border-2">
            <div className="p-5 flex flex-col">
              <div>
                <h1 className="text-2xl font-semibold ">Heading</h1>
              </div>
              <h2 className="text-xl font-medium mt-3">Exercise 4</h2>
              <p className="text-sm md:text-lg text-slate-400 text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium laborum quos recusandae iusto doloribus odio animi
                assumenda accusantium, maiores est voluptatum, quibusdam dolorum
                fuga quae nostrum officia soluta nisi provident!
              </p>
              <a
                href="#"
                className="bg-blue-400 text-blue-800 hover:bg-blue-300 py-2 px-2 rounded-lg text-center mt-2"
              >
                Show
              </a>
            </div>
          </div>
          <div className="rounded-xl shadow-lg hover:border-2">
            <div className="p-5 flex flex-col">
              <div>
                <h1 className="text-2xl font-semibold ">Heading</h1>
              </div>
              <h2 className="text-xl font-medium mt-3">Exercise 5</h2>
              <p className="text-sm md:text-lg text-slate-400 text-justify mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium laborum quos recusandae iusto doloribus odio animi
                assumenda accusantium, maiores est voluptatum, quibusdam dolorum
                fuga quae nostrum officia soluta nisi provident!
              </p>
              <a
                href="#"
                className="bg-blue-400 text-blue-800 hover:bg-blue-300 py-2 px-2 rounded-lg text-center mt-2"
              >
                Show
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListofExercise;
