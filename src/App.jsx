import AdminHome from "./components/AdminHome";
import ChangePassword from "./components/ChangePassword";
import ListofCases from "./components/ListofCases";
import ListofExercise from "./components/ListofExercise";
import ListofQuestionnaires from "./components/ListofQuestionnaires";
import LogIn from "./components/LogIn";
import Signup from "./components/Signup";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userhome from "./components/Userhome";
import Newcase from "./components/Newcase";
import NewQuestionnaires from "./components/NewQuestionnaires";
import ManualQues from "./components/ManualQues";
import Caseshow from "./components/Caseshow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/ChangePass" element={<ChangePassword />} />
        <Route path="/ListofExercise" element={<ListofExercise />} />
        <Route path="/ListofCases" element={<ListofCases />} />
        <Route path="/ListofQuestionnaires" element={<ListofQuestionnaires />}/>
        <Route path="/Userhome" element={<Userhome />} />
        <Route path="/Newcase" element={<Newcase />} />
        <Route path="/NewQues" element={<NewQuestionnaires />} />
        <Route path="/NewQues" element={<NewQuestionnaires />} />
        <Route path="/Manual" element={<ManualQues />} />
        <Route path="/Caseshow/:id" element={<Caseshow />} />
      </Routes>
     
      

    </BrowserRouter>
  );
}

export default App;
