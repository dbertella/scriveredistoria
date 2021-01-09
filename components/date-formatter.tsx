import dayjs from "dayjs";
import { Text } from "theme-ui";
import "dayjs/locale/it";

dayjs.locale("it");

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = dayjs(dateString);
  return (
    <Text sx={{ color: "darkGrey" }}>
      <time dateTime={dateString}>{date.format("D MMMM YYYY")}</time>
    </Text>
  );
};

export default DateFormatter;
