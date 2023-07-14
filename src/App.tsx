import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as pages from "./routes/index";
import * as CUR from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <CUR.VStack>
        <CUR.Grid
          templateAreas={{
            base: `  "navbar" "main" "footer"`,
            lg: `  "main" "footer"`,
          }}
          gap={4}
          bgGradient={"linear(to-r, green.200, pink.500)"}
          h={window.innerHeight}
          w={window.innerWidth}
        >
          <Navbar />
          <Routes>
            <Route path={`/BDT.home`} element={<pages.Home />} />
            <Route path={`/BDT.home/about`} element={<pages.About />} />
            <Route path={`/BDT.home/services`} element={<pages.Services />} />
            <Route path={`/BDT.home/projects`} element={<pages.Projects />} />
            <Route path={`/BDT.home/contact`} element={<pages.Contact />} />
            <Route path={`/BDT.home/index`} element={<pages.Home />} />
          </Routes>
        </CUR.Grid>
      </CUR.VStack>
    </>
  );
}

export default App;
