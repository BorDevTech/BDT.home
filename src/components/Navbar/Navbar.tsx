import * as CUR from "@chakra-ui/react";
import Brand from "./Brand";
import CTA from "./CTA";
import Navlinks from "./Navlinks";
import "./navbarStyles.css";
import Search from "./Search";

const Navbar = () => {
  return (
    <CUR.Card>
      <nav>
        <CUR.Flex
          p={"1.5px"}
          bgGradient="linear(to-r, blue.200,yellow.300, orange.400)"
        >
          <CUR.Flex gap={4}>
            <Brand
              homeRoute={"/BDT.home"}
              displayType={"brand"}
              BrandName="BorDev Tech"
            />
          </CUR.Flex>
          <CUR.Spacer />
          <Navlinks />
          <CUR.Spacer />
          <CUR.Flex gap={12}>
            <Search />
            <CTA />
          </CUR.Flex>
        </CUR.Flex>
      </nav>
    </CUR.Card>
  );
};

export default Navbar;
