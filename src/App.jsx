import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Studio from "./pages/Studio";

function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Landing />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="/studio" element={<Studio />} /></Routes></BrowserRouter>;
}
export default App;
