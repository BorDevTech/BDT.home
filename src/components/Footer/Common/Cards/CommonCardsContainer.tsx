import * as CUR from "@chakra-ui/react";

type Props = {} & (VerticalColumnsWrap | HorizontalRowsWrap);

type VerticalColumnsWrap = { vertical: boolean };
type HorizontalRowsWrap = {
  vertical: false;
  spacing: "20px";
};

export const CommonCardsContainer = (props: Props) => {
  return (
    <div>
      <CUR.Wrap>
        <CUR.WrapItem>
          <CUR.Card>
            <CUR.CardHeader>
              <CUR.Heading as={"h3"} size={"xs"}>
                Header B
              </CUR.Heading>
            </CUR.CardHeader>
            <CUR.CardBody>
              <CUR.Center>
                <CUR.Text>BBBB</CUR.Text>
              </CUR.Center>
              <CUR.Divider w={"100%"} />
              <CUR.Center>
                <CUR.Text>BBBB</CUR.Text>
              </CUR.Center>
              <CUR.Divider w={"100%"} />
              <CUR.Center>
                <CUR.Text>BBBB</CUR.Text>
              </CUR.Center>
              <CUR.Divider w={"100%"} />
              <CUR.Center>
                <CUR.Text>BBBB</CUR.Text>
              </CUR.Center>
            </CUR.CardBody>
          </CUR.Card>
        </CUR.WrapItem>
        <CUR.WrapItem>B</CUR.WrapItem>
        <CUR.WrapItem>C</CUR.WrapItem>
        <CUR.WrapItem>D</CUR.WrapItem>
      </CUR.Wrap>
      {/* {
  layoutDirection === "column"
    ? console.log("blue")
    : layoutDirection === "row"
    ? console.log("green")
    : null;
} */}
    </div>
  );
};
