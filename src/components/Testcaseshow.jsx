import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import LOGO from "../assets/Images/TriageLogo.png";
import axios from "axios";

const Testcaseshow = () => {
  const [info, setInfo] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const { exerciseName, userId, id } = useParams();
  const navigate = useNavigate();
  const userAnswer = [];

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8081/api/exercise-each-case",
          { id }
        );
        console.log("Info data:", response.data);
        setInfo(response.data[0]); // Assuming the backend returns an array with one object
      } catch (error) {
        console.error("Error fetching case data:", error);
      }
    };
    dataFetch();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Store the selected color in the userAnswer array
      userAnswer.push(selectedColor);
      localStorage.setItem(`answers`, JSON.stringify(userAnswer));

      // Determine if the selected color matches the correct answer
      const isCorrect = selectedColor === info.color ? 1 : 0;

      // Prepare the data to be sent to the backend
      const data = {
        userId: userId,
        quesName: info.description_,
        exerciseName: exerciseName,
        selectedColor: selectedColor,
        correctans: isCorrect
      };

      // Make a POST request to insert the data into the database
      await axios.post("http://localhost:8081/api/save-user-color", data);

      // Navigate to the next page
      navigate(`/Jointest/${exerciseName}/${userId}`);
    } catch (error) {
      console.error("Error saving the user's selected color:", error);
    }
  };

  return (
    <div className="bg-[#f4f4f4] min-h-[100vh]">
      <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg">
        <div className="flex gap-1">
          <Link className="text-2xl md:text-3xl font-bold text-stone-600 hover:text-stone-800">
            T R I A G E
          </Link>
          <img
            src={LOGO}
            className="mt-[-4px] cursor-pointer w-10 h-10 rounded-full hover:opacity-75"
            alt="Triage Logo"
          />
        </div>
        <h1 className="text-3xl font-semibold text-red-500">Exercise</h1>
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center">
          <h1 className="text-xl bg-violet-600 w-full text-white r border border-black">
            Case Information
          </h1>
        </div>

        <form
          className="shadow-xl py-8 px-4 border-2 mx-5 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <div>
            <img
              src={`http://localhost:8081/${info.image}`}
              alt="Case"
              className="w-60 h-28 border-stone-800 border-4"
            />
          </div>
          <textarea
            name="description"
            value={info.description_ || ""}
            placeholder="Description..."
            className="py-3 px-3 border-2 border-stone-500 w-2/4"
            readOnly
          ></textarea>

          <div className="flex flex-col">
            <label className="text-left font-medium">
              Respiration (breaths/minute)?
            </label>
            <input
              value={info.respiration || ""}
              type="number"
              className="border-2 border-stone-500 px-3 w-2/4"
              readOnly
            />
          </div>

          <div className="flex items-left gap-3">
            <label className="font-medium">Position airway</label>
            <input
              checked={info.position_ === 1}
              type="checkbox"
              className="w-4"
              readOnly
            />
          </div>

          <div className="flex flex-col">
            <label className="text-left font-medium">
              Perfusion (beats/minute)?
            </label>
            <input
              value={info.perfusion || ""}
              type="number"
              className="border-2 border-stone-500 px-3 w-2/4"
              readOnly
            />
          </div>

          <div className="flex flex-col">
            <label className="text-left font-medium">Mental Status</label>
            <select
              value={info.mental_status || ""}
              className="border-2 border-stone-500 px-3 w-2/4"
              readOnly
            >
              <option value="can follow">Can follow</option>
              <option value="cannot follow">Cannot follow</option>
            </select>
          </div>

          <textarea
            value={info.extra_info || ""}
            name="extra_info"
            placeholder="Extra Information..."
            className="py-3 px-3 border-2 border-stone-500 w-2/4"
            readOnly
          ></textarea>

          <div className="flex flex-col">
            <label className="text-left font-medium">Choose Color :</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="border-2 border-stone-500 px-3 w-2/4"
            >
              <option value="" className="font-semibold">
                Select a color
              </option>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>
          </div>
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
  );
};

export default Testcaseshow;
