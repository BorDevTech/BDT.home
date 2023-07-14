import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";

interface Props {
  area: string;
}

const CTA = ({ area }: Props) => {
  return (
    <CUR.GridItem area={area}>
      <CUR.Menu>
        <CUR.MenuButton
          as={CUR.IconButton}
          aria-label="Options"
          icon={<CUI.HamburgerIcon />}
        />
        <CUR.MenuList>
          <CUR.MenuItem> Get Started Button</CUR.MenuItem>
          <CUR.MenuItem>Dark/Light Mode</CUR.MenuItem>
        </CUR.MenuList>
      </CUR.Menu>
    </CUR.GridItem>
  );
};

export default CTA;
