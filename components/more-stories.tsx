import { Grid, Box, Heading } from "theme-ui";
import PostPreview from "./post-preview";
import { useRef } from "react";

import Post from "../types/post";

type Props = {
  posts: Post[];
};

export default function MoreStories({ posts }: Props) {
  return (
    <Box as="section" sx={{ position: "relative", zIndex: 1 }}>
      <Grid columns={["auto", "1fr 1fr"]} gap={3}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Grid>
    </Box>
  );
}
