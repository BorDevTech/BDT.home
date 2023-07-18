import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as pages from "./routes/index";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`/BDT.home`} element={<pages.Home />} />
        <Route path={`/BDT.home/about`} element={<pages.About />} />
        <Route path={`/BDT.home/services`} element={<pages.Services />} />
        <Route path={`/BDT.home/projects`} element={<pages.Projects />} />
        <Route path={`/BDT.home/contact`} element={<pages.Contact />} />
        <Route path={`/BDT.home/index`} element={<pages.Home />} />
      </Routes>
    </>
  );
}

export default App;
