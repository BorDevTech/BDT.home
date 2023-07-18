import * as CUR from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  homeRoute: string;
  displayType: "generic" | "brand";
  BrandName?: string;
}

const Brand = ({ homeRoute, displayType, BrandName }: Props) => {
  return (
    <CUR.Heading as={Link} to={homeRoute}>
      {displayType === "generic"
        ? "Example Title"
        : displayType === "brand"
        ? BrandName
        : null}
    </CUR.Heading>
  );
};

export default Brand;
