import * as Chakra from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Chakra.GridItem
        area={"main"}
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        Home
      </Chakra.GridItem>
      <Chakra.GridItem
        area={"footer"}
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        Footer
      </Chakra.GridItem>
    </>
  );
};

export default Home;
