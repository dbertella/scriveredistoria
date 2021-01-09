import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Avatar name={author.name} picture={author.picture} />
      <CoverImage title={title} src={coverImage} />
      <DateFormatter dateString={date} />
    </>
  );
};

export default PostHeader;
