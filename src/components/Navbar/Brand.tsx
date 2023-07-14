import * as CUR from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  AppName?: string;
  area?: string;
}

const Brand = ({ AppName, area }: Props) => {
  return (
    <CUR.GridItem area={area}>
      <CUR.Heading size={"lg"}>
        <Link to={"/BDT.home"}>{AppName}</Link>
      </CUR.Heading>
    </CUR.GridItem>
  );
};

export default Brand;
