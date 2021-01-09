import Link from "next/link";
import { Heading } from "theme-ui";

const Header = () => {
  return (
    <Heading as="h2" sx={{ mt: 2 }}>
      <Link href="/">
        <a>Home</a>
      </Link>
      .
    </Heading>
  );
};

export default Header;
