import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import * as pages from "./routes/index";
import * as Chakra from "@chakra-ui/react";

function App() {
  return (
    <>
      <Chakra.Grid
        templateAreas={{
          base: `"navbar" "main" "footer"`,
          lg: `"navbar" "main" "footer"`,
        }}
      ></Chakra.Grid>
      <Chakra.Box
        w={window.innerWidth}
        h={window.innerHeight}
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Chakra.Card>
          <Chakra.CardBody>
            <nav>
              <Link to={"/BDT.home"}>BorDev Tech</Link>
              <Link to={"/BDT.home/about"}>About</Link>
              <Link to={"/BDT.home/services"}>Services</Link>
              <Link to={"/BDT.home/projects"}>Projects</Link>
              <Link to={"/BDT.home/contact"}>Contact</Link>
              <input placeholder="Search Bar" />
              <button type="button">Search Button</button>
              <button type="button">Get Started Button</button>
              <button type="button">Dark/Light Mode Toggle</button>
            </nav>
          </Chakra.CardBody>
        </Chakra.Card>
        <Routes>
          <Route path={`/BDT.home`} element={<pages.Home />} />
          <Route path={`/BDT.home/about`} element={<pages.About />} />
          <Route path={`/BDT.home/services`} element={<pages.Services />} />
          <Route path={`/BDT.home/projects`} element={<pages.Projects />} />
          <Route path={`/BDT.home/contact`} element={<pages.Contact />} />
          <Route path={`/BDT.home/index`} element={<pages.Home />} />
        </Routes>
      </Chakra.Box>
    </>
  );
}

export default App;
