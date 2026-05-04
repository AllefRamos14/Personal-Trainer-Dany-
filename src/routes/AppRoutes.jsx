import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Plans from "../pages/Plans";
import Schedule from "../pages/Schedule";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/planos" element={<Plans />} />
      <Route path="/horarios" element={<Schedule />} />
    </Routes>
  );
}

export default AppRoutes;
