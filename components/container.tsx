import { FC } from "react";
import { Box } from "theme-ui";

const Container: FC = (props) => {
  return <Box sx={{ m: "0 auto", px: 3 }} {...props} />;
};

export default Container;
