import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import * as pages from "./routes/index";
import * as Chakra from "@chakra-ui/react";
import * as ChakraIcons from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Chakra.Grid
        templateAreas={{
          base: `"navbar" "main" "footer"`,
          lg: `"navbar" "main" "footer"`,
        }}
      >
        <Chakra.GridItem
          bgGradient={"linear(to-r, green.200, pink.500)"}
          area={"navbar"}
        >
          <nav>
            <Chakra.Grid
              templateAreas={{
                base: `"Brand Search Links CTA"`,
                lg: `"Brand Search Links CTA"`,
              }}
              templateColumns={`repeat(4,1fr)`}
            >
              <Chakra.GridItem area={`Brand`}>
                <Link to={"/BDT.home"}>BorDev Tech</Link>
              </Chakra.GridItem>

              <Chakra.GridItem area={`Links`}>
                <Link to={"/BDT.home/about"}>About</Link>

                <Link to={"/BDT.home/services"}>Services</Link>

                <Link to={"/BDT.home/projects"}>Projects</Link>

                <Link to={"/BDT.home/contact"}>Contact</Link>
              </Chakra.GridItem>
              <Chakra.GridItem area={`Search`}>
                <input placeholder="Search Bar" />
                <button type="button">Search Button</button>
              </Chakra.GridItem>
              <Chakra.GridItem area={`CTA`}>
                <Chakra.Menu>
                  <Chakra.MenuButton
                    as={Chakra.IconButton}
                    aria-label="Options"
                    icon={<ChakraIcons.HamburgerIcon />}
                    variant="outline"
                  />
                  <Chakra.MenuList>
                    <Chakra.MenuItem>
                      <Chakra.Button type="button">
                        Get Started Button
                      </Chakra.Button>
                    </Chakra.MenuItem>
                    <Chakra.MenuItem>
                      <Chakra.Button type="button">
                        Dark/Light Mode
                      </Chakra.Button>
                    </Chakra.MenuItem>
                  </Chakra.MenuList>
                </Chakra.Menu>
              </Chakra.GridItem>
            </Chakra.Grid>
          </nav>
        </Chakra.GridItem>
        <Routes>
          <Route path={`/BDT.home`} element={<pages.Home />} />
          <Route path={`/BDT.home/about`} element={<pages.About />} />
          <Route path={`/BDT.home/services`} element={<pages.Services />} />
          <Route path={`/BDT.home/projects`} element={<pages.Projects />} />
          <Route path={`/BDT.home/contact`} element={<pages.Contact />} />
          <Route path={`/BDT.home/index`} element={<pages.Home />} />
        </Routes>
      </Chakra.Grid>
    </>
  );
}

export default App;
