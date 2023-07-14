import * as CUR from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  area: string;
}

const Navlinks = ({ area }: Props) => {
  const navLinks = [
    { key: 0, link: "About", route: "/BDT.home/about" },
    { key: 1, link: "Services", route: "/BDT.home/services" },
    { key: 2, link: "Projects", route: "/BDT.home/projects" },
    { key: 3, link: "Contact", route: "/BDT.home/contact" },
  ];

  return (
    <CUR.GridItem area={area}>
      <CUR.Grid
        templateColumns={`repeat(${navLinks.length},1fr)`}
        gap={navLinks.length / 2}
      >
        {navLinks.map(({ key, route, link }) => (
          <Link to={route} key={key}>
            {link}
          </Link>
        ))}
      </CUR.Grid>
    </CUR.GridItem>
  );
};

export default Navlinks;
