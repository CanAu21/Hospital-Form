import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import AddPatients from "./pages/AddPatients";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/add-patient" element={<AddPatients/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
