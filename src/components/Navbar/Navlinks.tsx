import * as CUR from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Navlinks = () => {
  const navLinks = [
    { key: 0, link: "About", route: " /b/about/" },
    { key: 1, link: "Services", route: " /b/services/" },
    { key: 2, link: "Projects", route: " /b/projects/" },
    { key: 3, link: "Contact", route: " /b/contact/" },
  ];
  const navigate = useNavigate();

  return (
    <>
      <CUR.Tabs isFitted variant="soft-rounded">
        <CUR.TabList>
          {navLinks.map(({ key, route, link }) => (
            <CUR.Tab key={key}>
              <Link to={route} onClick={() => navigate(route)}>
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
