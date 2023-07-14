import * as CUR from "@chakra-ui/react";
import Brand from "./Brand";
import CTA from "./CTA";
import Navlinks from "./Navlinks";
import "./navbarStyles.css";

const Navbar = () => {
  const AppName = "BorDev Tech";
  return (
    <CUR.GridItem area={"navbar"} w={window.innerWidth}>
      <nav>
        <CUR.Card>
          <CUR.Flex bgGradient={"linear(to-r, green.200, pink.500)"}>
            <Brand AppName={AppName} area={"brand"} />
            <CUR.Spacer />
            <Navlinks area={"navlinks"} />
            <CUR.Spacer />
            <CTA area={"cta"} />
          </CUR.Flex>
        </CUR.Card>
      </nav>
    </CUR.GridItem>
  );
};

export default Navbar;
