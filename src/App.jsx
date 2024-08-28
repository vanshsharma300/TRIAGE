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
import QuesShow from "./components/QuesShow";
import Newexercise from "./components/Newexercise";
import Jointest from "./components/Jointest";
import Exerciseshow from "./components/Exerciseshow";
import Testcaseshow from "./components/Testcaseshow";
import ResultTable from "./components/ResultTable";
import ListofResults from "./components/ListofResults";
import GlobalResult from "./components/GlobalResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/AdminHome/:id" element={<AdminHome />} />
        <Route path="/ChangePass/:id" element={<ChangePassword />} />
        <Route path="/ListofExercise/:id" element={<ListofExercise />} />
        <Route path="/ListofCases/:id" element={<ListofCases />} />
        <Route path="/ListofQuestionnaires/:id" element={<ListofQuestionnaires />}/>
        <Route path="/Userhome/:id" element={<Userhome />} />
        <Route path="/Newcase/:id" element={<Newcase />} />
        <Route path="/NewQues/:id" element={<NewQuestionnaires />} />
        <Route path="/Manual" element={<ManualQues />} />
        <Route path="/Caseshow/:userId/:id" element={<Caseshow />} />
        <Route path="/QuesShow/:id/:name" element={<QuesShow />} />
        <Route path="/Newexercise/:id" element={<Newexercise />} />
        <Route path="/Jointest/:exerciseName/:id" element={<Jointest />} />
        <Route path="/Exerciseshow/:id/:name" element={<Exerciseshow />} />
        <Route path="/Testcaseshow/:exerciseName/:userId/:id" element={<Testcaseshow />} />
        <Route path="/ResultTable/:exerciseName/:id" element={<ResultTable />} />
        <Route path="/ListofResults/:id" element={<ListofResults/>} />
        <Route path="/GlobalResult/:id/:exerciseName" element={<GlobalResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
