import {BrowserRouter as Router, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./Home";
const MainSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" />
        <Route path="/resume" />
      </Routes>
    </Router>
  );
};

export default MainSwitch;
