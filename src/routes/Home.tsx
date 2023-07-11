import * as Chakra from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Chakra.GridItem
        area={"main"}
        bgGradient="linear(to-r, green.200, pink.500)"
        h={"auto"}
      >
        <Chakra.Card>
          <Chakra.CardBody>Home</Chakra.CardBody>
        </Chakra.Card>
      </Chakra.GridItem>
      <Chakra.GridItem
        area={"footer"}
        bgGradient="linear(to-r, green.200, pink.500)"
        h={"auto"}
      >
        Footer
      </Chakra.GridItem>
    </>
  );
};

export default Home;
