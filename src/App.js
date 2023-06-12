import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Career from "./Components/Career";
import JobDetails from "./Components/JobDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="row">
          <Routes>
            <Route path="/" element={<Career />} />
            <Route path="/job/:jobId" element={<JobDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
