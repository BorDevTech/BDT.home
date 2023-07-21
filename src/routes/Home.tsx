import * as CUR from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <CUR.VStack bgGradient="linear(to-r, green.200, pink.500)">
        <CUR.Box w={"80%"} mt={"50px"}>
          <CUR.Flex></CUR.Flex>
          <CUR.Card bg={"blackAlpha.200"}>
            <CUR.CardHeader>
              <CUR.Center>
                <CUR.Heading size={"lg"}>Welcome!</CUR.Heading>
              </CUR.Center>
            </CUR.CardHeader>
            <CUR.CardBody>
              <CUR.Text as={"b"}>
                Here at BorDev Tech we provide top-notch service to get you on
                your feet and ready to go! Our wide range of experience helps
                us, help you in building anything you can dream of.
              </CUR.Text>
            </CUR.CardBody>
          </CUR.Card>
          <CUR.Spacer />
          <CUR.Center>
            <CUR.VStack>
              <CUR.Spacer />
              <CUR.Spacer />
              <CUR.Spacer />
              <CUR.HStack>
                <CUR.Button w={"100px"}>Get Started</CUR.Button>
                <CUR.Center height="50px">
                  <CUR.Divider orientation="vertical" />
                </CUR.Center>
                <CUR.Button w={"100px"}>Pricing</CUR.Button>
              </CUR.HStack>
            </CUR.VStack>
          </CUR.Center>
        </CUR.Box>

        <CUR.Flex>Footer</CUR.Flex>
      </CUR.VStack>
    </>
  );
};

export default Home;
