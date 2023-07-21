import * as CUR from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  homeRoute: string;
  displayType: "generic" | "brand";
  BrandName?: string;
}

const Brand = ({ homeRoute, displayType, BrandName }: Props) => {
  return (
    <CUR.Box p={"2"}>
      <CUR.Heading as={"h1"} size={"md"}>
        <Link to={homeRoute}>
          <CUR.Text textAlign={"center"}>
            {displayType === "generic"
              ? "Example Title"
              : displayType === "brand"
              ? BrandName
              : null}
          </CUR.Text>
        </Link>
      </CUR.Heading>
    </CUR.Box>
  );
};

export default Brand;
