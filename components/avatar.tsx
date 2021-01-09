import { Flex, Image, Text } from "theme-ui";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <Flex sx={{ gap: 2, mt: 2 }}>
      <Image src={picture} sx={{ width: 35, height: 35, borderRadius: 9 }} alt={name} />
      <Text sx={{ fontSize: 4, fontWeight: "bold" }}>{name}</Text>
    </Flex>
  );
};

export default Avatar;
