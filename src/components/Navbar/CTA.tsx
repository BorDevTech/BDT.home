import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";

const CTA = () => {
  return (
    <>
      <CUR.GridItem area={`CTA`}>
        <CUR.Menu>
          <CUR.MenuButton
            as={CUR.IconButton}
            aria-label="Options"
            icon={<CUI.HamburgerIcon />}
            variant="outline"
          />
          <CUR.MenuList>
            <CUR.MenuItem> Get Started Button</CUR.MenuItem>
            <CUR.MenuItem>Dark/Light Mode</CUR.MenuItem>
          </CUR.MenuList>
        </CUR.Menu>
      </CUR.GridItem>
    </>
  );
};

export default CTA;
