import { Flex, Image, Text } from "theme-ui";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <Flex sx={{ my: 3, alignItems: "center" }}>
      <Image
        src={picture}
        sx={{ width: 35, height: 35, borderRadius: "50%" }}
        alt={name}
      />
      <Text sx={{ fontSize: 3, ml: 2 }}>{name}</Text>
    </Flex>
  );
};

export default Avatar;
