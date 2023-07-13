import * as CUR from "@chakra-ui/react";
import Brand from "./Brand";
import CTA from "./CTA";
import Search from "./Search";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const AppName = "BorDev Tech";
  return (
    <>
      <nav>
        <CUR.Grid
          templateAreas={{
            base: `"Brand Search Links CTA"`,
            lg: `"Brand Search Links CTA"`,
          }}
          templateColumns={`repeat(4,1fr)`}
          bgGradient={"linear(to-r, green.200, pink.500)"}
        >
          <Brand AppName={AppName} />
          <Navlinks />
          <Search />
          <CTA />
        </CUR.Grid>
      </nav>
    </>
  );
};

export default Navbar;
