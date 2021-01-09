import { Box } from "theme-ui";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <Box variant="styles.container">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default PostBody;
