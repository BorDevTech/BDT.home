import * as CUR from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  AppName?: String;
}

const Brand = ({ AppName }: Props) => {
  return (
    <>
      <CUR.GridItem area={`Brand`}>
        <CUR.Heading size={"lg"}>
          <Link to={"/BDT.home"}>{AppName}</Link>
        </CUR.Heading>
      </CUR.GridItem>
    </>
  );
};

export default Brand;
