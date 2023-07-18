import * as CUR from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {}

const Navlinks = ({}: Props) => {
  const navLinks = [
    { key: 0, link: "About", route: "/BDT.home/about" },
    { key: 1, link: "Services", route: "/BDT.home/services" },
    { key: 2, link: "Projects", route: "/BDT.home/projects" },
    { key: 3, link: "Contact", route: "/BDT.home/contact" },
  ];

  return (
    <>
      <CUR.Tabs>
        <CUR.TabList>
          {navLinks.map(({ key, route, link }) => (
            <CUR.Tab>
              <Link to={route} key={key}>
                {link}
              </Link>
            </CUR.Tab>
          ))}
        </CUR.TabList>
      </CUR.Tabs>
    </>
  );
};

export default Navlinks;
