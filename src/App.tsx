import { Routes, Route } from "react-router-dom";
import * as pages from "./routes/index";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={`/`} element={<pages.Home />} />
        <Route path={`/about`} element={<pages.About />} />
        <Route path={`/services`} element={<pages.Services />} />
        <Route path={`/projects`} element={<pages.Projects />} />
        <Route path={`/contact`} element={<pages.Contact />} />
        <Route path={`/index`} element={<pages.Home />} />
      </Routes>
    </>
  );
}

export default App;
