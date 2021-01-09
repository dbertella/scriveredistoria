import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";
import { Box, Text, Heading } from "theme-ui";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Box>
      <CoverImage title={title} src={coverImage} slug={slug} />
      <Box
        sx={{ maxWidth: "48em", my: [3, 4, 5], mx: "auto" }}
        variant="styles.container"
      >
        <Heading as="h3">
          <Link href={`/posts/${slug}`} passHref>
            <a>{title}</a>
          </Link>
        </Heading>
        <Text
          sx={{
            p: 1,
            fontSize: 0,
            color: "darkGrey",
          }}
        >
          <DateFormatter dateString={date} />
        </Text>
        <Text>{excerpt}</Text>
        <Avatar name={author.name} picture={author.picture} />
      </Box>
    </Box>
  );
};

export default HeroPost;
