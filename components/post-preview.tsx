/** @jsxRuntime classic */
/** @jsx jsx */
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { Card, Styled, Text, Box, jsx, Button, Flex, Heading } from "theme-ui";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{ position: "relative", height: [150, null, 200], m: -3, mb: 1 }}
      >
        <CoverImage slug={slug} title={title} src={coverImage} />
      </Box>
      <Text
        sx={{
          py: 2,
          color: "darkGrey",
        }}
      >
        <DateFormatter dateString={date} />
      </Text>
      <Heading as="h3" sx={{ mb: 3 }}>
        <Link href={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </Heading>

      <Text sx={{ flex: 1 }}>{excerpt}</Text>
      <Avatar name={author.name} picture={author.picture} />
      <Flex sx={{ justifyContent: "flex-end" }}>
        <Link href={`/posts/${slug}`} passHref>
          <Button variant="outline">Leggi di più</Button>
        </Link>
      </Flex>
    </Card>
  );
};

export default PostPreview;
