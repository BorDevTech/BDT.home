import * as CUR from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface RouteLinks {
  id: number;
  link: string;
  route: string;
}

const Navlinks = () => {
  const navLinks: RouteLinks[] = [
    { id: 0, link: "About", route: "/BDT.home/about" },
    { id: 1, link: "Services", route: "/BDT.home/services" },
    { id: 2, link: "Projects", route: "/BDT.home/projects" },
    { id: 3, link: "Contact", route: "/BDT.home/contact" },
  ];

  return (
    <>
      <CUR.GridItem area={"Links"}>
        <ul>
          {navLinks.map((item) => (
            <>
              <li key={item.id}>
                <Link to={item.route}>{item.link}</Link>
              </li>
              {console.log(item.id)}
            </>
          ))}
        </ul>
      </CUR.GridItem>
    </>
  );
};

export default Navlinks;
