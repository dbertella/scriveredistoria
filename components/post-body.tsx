import { Box } from "theme-ui";
import DateFormatter from "./date-formatter";

type Props = {
  content: string;
  date: string;
};

const PostBody = ({ content, date }: Props) => {
  return (
    <Box sx={{ px: [2, 3, 6] }}>
      <DateFormatter dateString={date} />
      <Box sx={{ my: 5 }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default PostBody;
