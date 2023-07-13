import * as CUR from "@chakra-ui/react";
import Brand from "./Brand";
import CTA from "./CTA";
import Navlinks from "./Navlinks";
import "./navbarStyles.css";

const Navbar = () => {
  const AppName = "BorDev Tech";
  return (
    <>
      <nav>
        <CUR.HStack
          bgGradient={"linear(to-r, green.200, pink.500)"}
          spacing={{
            base: 2,
            lg: 24,
          }}
        >
          <Brand AppName={AppName} />
          <Navlinks />
          <CTA />
        </CUR.HStack>
      </nav>
    </>
  );
};

export default Navbar;
