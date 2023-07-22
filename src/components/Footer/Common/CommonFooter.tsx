import * as CUR from "@chakra-ui/react";
import { CommonCardsContainer } from "./Cards/CommonCardsContainer";

type Props = {} & (VerticalLayoutDirection | HorizontalLayoutDirection);

type VerticalLayoutDirection = {
  layoutDirection: "column";
};
type HorizontalLayoutDirection = {
  layoutDirection: "row";
};

const CommonFooter = (props: Props) => {
  const { layoutDirection } = props;

  return (
    <>
      <CUR.Stack direction={layoutDirection}>
        <CommonCardsContainer vertical={false} />
        <CUR.Wrap>
          <CUR.WrapItem>
            <CUR.Card>
              <CUR.CardHeader>
                <CUR.Heading as={"h3"} size={"xs"}>
                  d
                </CUR.Heading>
              </CUR.CardHeader>
              <CUR.CardBody>
                <CUR.Center>
                  <CUR.Text>AAAA</CUR.Text>
                </CUR.Center>
                <CUR.Divider w={"100%"} />
                <CUR.Center>
                  <CUR.Text>AAAA</CUR.Text>
                </CUR.Center>
                <CUR.Divider w={"100%"} />
                <CUR.Center>
                  <CUR.Text>AAAA</CUR.Text>
                </CUR.Center>
                <CUR.Divider w={"100%"} />
                <CUR.Center>
                  <CUR.Text>AAAA</CUR.Text>
                </CUR.Center>
              </CUR.CardBody>
            </CUR.Card>
          </CUR.WrapItem>
        </CUR.Wrap>
      </CUR.Stack>
    </>
  );
};

export default CommonFooter;
