import * as Chakra from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Chakra.GridItem
        area={"main"}
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Chakra.Center>
          <Chakra.Card w={"95%"}>
            <Chakra.CardBody>Home</Chakra.CardBody>
          </Chakra.Card>
        </Chakra.Center>
      </Chakra.GridItem>
      <Chakra.GridItem
        area={"footer"}
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Chakra.Center>
          <Chakra.Card w={"95%"}>
            <Chakra.CardBody>Footer</Chakra.CardBody>
          </Chakra.Card>
        </Chakra.Center>
      </Chakra.GridItem>
    </>
  );
};

export default Home;
