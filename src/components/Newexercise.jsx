import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import LOGO from "../assets/Images/TriageLogo.png";
import axios from "axios";

const Newexercise = () => { 
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [questionnaires, setQuestionnaires] = useState([]);
  const [exName, setExname] = useState("");
  const [quesName, setQuesname] = useState("");
  const [isUser, setIsuser] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:8081/getusers");
        console.log("Users data:", data);
        setUsers(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchQuestionnaires = async () => {
      try {
        const { data } = await axios.get("http://localhost:8081/getQues");
        console.log("Raw Questionnaires data:", data);
        
        // Filter to get unique questionnaire names
        const uniqueQuestionnaires = data.data.reduce((acc, current) => {
          if (!acc.some(item => item.quesName === current.quesName)) {
            acc.push(current);
          }
          return acc;
        }, []);
        
        setQuestionnaires(uniqueQuestionnaires);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestionnaires();
  }, []);


  const handleCheck = (id) => {
    setIsuser((prev) => {
      if (prev.includes(id)) {
        return prev.filter((userId) => userId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const postData = {
       exerciseName: exName,
       quesName ,
       userId : isUser
      };
      const response = await axios.post("http://localhost:8081/submitexercise", postData);
      const resData = await axios.post("http://localhost:8081/submit-Exercise-two", postData);
      console.log("Submit response:", response.data);
      console.log("Submit second response:", resData.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };


  return (
    <div>
      {/* navigation bar */}
     
      <div className="flex justify-end mx-4 mt-2">
        <Link to={`/ListofExercise/${id}`}  className="text-3xl font-semibold text-right text-blue-500 hover:underline">List of Exercise</Link>
      </div>
      <div className="flex flex-col mt-9 items-center mb-10 ">
        <div className="border shadow-xl rounded-3xl mb-8 w-5/6 md:w-4/5 bg-white">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mt-10 mb-8 gap-2">
              <label className="text-lg font-bold">Enter name of Exercise :</label>
              <input
                type="text"
                onChange={(e)=>setExname(e.target.value)}
                required
                className="w-1/2 border-2 border-zinc-800 px-2 py-1"
              />
            </div>
            <div className="flex flex-col items-center mt-10 mb-8 gap-2">
              <label className="text-lg font-bold">Select the questionnaire</label>
              <select className="w-1/2 border-2 border-zinc-800 px-2 py-1"  onChange={(e)=>setQuesname(e.target.value)}>
                {questionnaires.map((questionnaire) => (
                  <option key={questionnaire.Qid} value={questionnaire.quesName}>
                    {questionnaire.quesName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <h1 className="text-center text-xl font-medium italic">
                Select below users:
              </h1>
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="border min-w-full text-center text-sm font-light">
                      <thead className="font-medium bg-blue-900 text-white">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Select
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="font-medium border-b border-zinc-800">
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.username}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {user.email}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <input 
                                checked={isUser.includes(user.id)}
                                onChange={() => handleCheck(user.id)}
                              type="checkbox" className="w-12" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="flex items-center justify-center mt-10 mb-10">
                      <button
                        type="submit"
                        className="border-2 border-black px-3 bg-zinc-400 font-medium"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newexercise;
