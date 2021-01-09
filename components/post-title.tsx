import { ReactNode } from "react";
import { Heading } from "theme-ui";
type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <Heading as="h1" sx={{ fontSize: 7 }}>
      {children}
    </Heading>
  );
};

export default PostTitle;
