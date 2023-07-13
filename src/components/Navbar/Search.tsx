import * as CUR from "@chakra-ui/react";
import * as CUI from "@chakra-ui/icons";

const Search = () => {
  return (
    <>
      <CUR.GridItem area={`Search`}>
        <CUR.Stack>
          <CUR.Card>
            <CUR.InputGroup>
              <CUR.Input></CUR.Input>
              <CUR.Divider orientation="vertical" />
              <CUR.InputRightElement>
                <CUI.SearchIcon />
              </CUR.InputRightElement>
            </CUR.InputGroup>
          </CUR.Card>
        </CUR.Stack>
      </CUR.GridItem>
    </>
  );
};

export default Search;
