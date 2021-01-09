import { Flex, Image, Text } from "theme-ui";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <Flex sx={{ gap: 2, my: 3, alignItems: "center" }}>
      <Image
        src={picture}
        sx={{ width: 35, height: 35, borderRadius: 9 }}
        alt={name}
      />
      <Text sx={{ fontSize: 3 }}>{name}</Text>
    </Flex>
  );
};

export default Avatar;
