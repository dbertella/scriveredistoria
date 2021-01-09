import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import { Box, Heading } from "theme-ui";

const Footer = () => {
  return (
    <Box as="footer" sx={{ my: 5 }}>
      <Container>
        <Heading as="h3">
          © {new Date().getFullYear()} Professor Andrea Cazzaniga
        </Heading>
        <Heading as="h4" sx={{ mt: 3 }}>
          insegnante e autore di manuali di storia
        </Heading>
      </Container>
    </Box>
  );
};

export default Footer;
