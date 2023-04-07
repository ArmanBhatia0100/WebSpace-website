import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Destination from "./pages/destination/Destination";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
      </Routes>
    </div>
  );
}
