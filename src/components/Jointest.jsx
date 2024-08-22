import  { useState, useEffect } from "react";
import { Link, useNavigate, useParams  } from "react-router-dom";
import axios from "axios";
import LOGO from "../assets/Images/TriageLogo.png";


const Jointest = () => {
  const navigate= useNavigate();
  const { id: userId ,exerciseName} = useParams();  // Get userId from the URL
  const [cases, setCases] = useState([]);
  
  

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/exercise-cases', {
          params: { userId }
        });
        setCases(response.data);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    fetchCases();
  }, [userId]);


  const handleDelete = async()=>{

    try {
      const response = await axios.post('http://localhost:8081/api/delete-exercise',{userId});
      setCases(response.data);
    } catch (error) {
      console.error("Error fetching cases:", error);
    }
  }


  return (
    <div>
      <div className="flex items-center justify-between bg-[#8885852a] px-4 md:px-8 py-4 shadow-lg ">
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
        <h1 className="text-3xl font-semibold text-red-500">{exerciseName}</h1>
      </div>

      <div className="grid grid-cols-1 text-lg md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-default">
        {cases.map((caseItem, index) => (
          <div key={caseItem.id} className="rounded-xl shadow-lg hover:shadow-xl">
            <div className="p-5 flex flex-col">
              <h2 className="text-xl font-medium mt-2 text-black bold text-justify">
                Case {index + 1}
              </h2>
              <p>{caseItem.description_}</p>
              <div className="flex items-center justify-around">
                <Link
                  to={`/Testcaseshow/${exerciseName}/${userId}/${caseItem.id}`}
                  className="bg-violet-500 text-white hover:bg-violet-400 py-2 px-7 rounded-lg text-center mt-2"
                >
                  Show
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="rounded-xl shadow-lg hover:shadow-xl">
          <div className="p-5 flex flex-col">
            <h2 className="text-xl font-medium mt-2 text-black bold text-justify">
              Done with the Exercise?
            </h2>
            <div className="flex items-center justify-around">
              <button
                onClick={()=> 
                  {
                    handleDelete()
                    navigate(`/ResultTable/${encodeURIComponent(exerciseName)}/${userId}`)
                  }

              }
                className="bg-slate-500 text-white hover:bg-slate-400 py-2 px-7 rounded-lg text-center mt-2"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jointest;