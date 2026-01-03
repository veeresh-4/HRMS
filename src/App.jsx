import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./components/Dashboard";
import { Hrms } from "./components/Hrms";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="/add-employee" element={<Hrms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
