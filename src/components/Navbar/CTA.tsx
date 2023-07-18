import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";

interface Props {}

const CTA = ({}: Props) => {
  return (
    <CUR.Menu>
      <CUR.MenuButton
        as={CUR.IconButton}
        aria-label="Options"
        icon={<CUI.HamburgerIcon />}
      />
      <CUR.MenuList>
        <CUR.MenuOptionGroup title={"Quick Actions"}>
          <CUR.MenuItem> Get Started Button</CUR.MenuItem>
          <CUR.MenuItem>Dark/Light Mode</CUR.MenuItem>
        </CUR.MenuOptionGroup>
        <CUR.MenuOptionGroup title={"Accessibility"}>
          <CUR.MenuItem> Get Started Button</CUR.MenuItem>
          <CUR.MenuItem>Dark/Light Mode</CUR.MenuItem>
          <CUR.Menu>
            <CUR.MenuButton
              as={CUR.IconButton}
              aria-label="Accessibility Options"
              icon={<CUI.InfoOutlineIcon />}
            />
            <CUR.MenuList>
              dad
              <CUR.MenuItem>Dark Mode</CUR.MenuItem>
            </CUR.MenuList>
          </CUR.Menu>
        </CUR.MenuOptionGroup>
      </CUR.MenuList>
    </CUR.Menu>
  );
};

export default CTA;
