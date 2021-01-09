import { Flex, Heading } from "theme-ui";

const Intro = () => {
  return (
    <Flex
      sx={{
        my: 3,
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Heading as="h1" sx={{ fontSize: 7 }}>
        Scrivere di Storia
      </Heading>
      <Heading as="h4">
        La storia viva: spunti, curiosità, aneddoti sulla storia antica e
        medievale
      </Heading>
    </Flex>
  );
};

export default Intro;
