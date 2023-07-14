import * as Chakra from "@chakra-ui/react";

const Services = () => {
  return (
    <>
      <Chakra.GridItem
        area={"main"}
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        Services
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

export default Services;
