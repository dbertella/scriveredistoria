import Avatar from "./avatar";
import PostTitle from "./post-title";
import Author from "../types/author";
import { Box, Flex, Image } from "theme-ui";

type Props = {
  title: string;
  coverImage: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, author }: Props) => {
  return (
    <Box sx={{ my: 5 }}>
      <PostTitle>{title}</PostTitle>
      <Avatar name={author.name} picture={author.picture} />
      <Box my={4} />
      <Flex
        sx={{
          justifyContent: "center",
        }}
      >
        <Image alt={title} src={coverImage} />
      </Flex>
      <Box my={5} />
    </Box>
  );
};

export default PostHeader;
