import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VolumeTask from "./components/VolumeTask";
// import ModeChange from "./components/ModeChange";
// import ParamsPractice from "./components/ParamsPractice";
// import Effect from "./components/Effect";
// import Grid from "./components/Grid";
// import Competition from "./components/PieTable";
// import UploadImage from "./components/UploadImage";
// import Motion from "./components/Motion";
// import Methods from "./components/Methods";
// import Theatre from "./components/Theatre";
// import EmailJs from "./components/EmailJs";
// import Count from "./components/Count";
// import FaultyCalculator from "./components/FaultyCalculator";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/param" element={<ParamsPractice />} /> */}
        {/* <Route path="/" element={<Effect />} /> */}
        {/* <Route path="/grid" element={<Grid />} /> */}
        {/* <Route path="/com" element={<Competition />} /> */}
        {/* <Route path="/img" element={<UploadImage />} /> */}
        {/* <Route path="/motion" element={<Motion />} /> */}
        {/* <Route path="/" element={<Methods />} /> */}
        {/* <Route path="/Theatre" element={<Theatre />} /> */}
        {/* <Route path="/email" element={<EmailJs />} /> */}
        {/* <Route path="/count" element={<Count />} /> */}
        {/* <Route path="/cal" element={<FaultyCalculator />} /> */}
        <Route path="/" element={<VolumeTask/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;

