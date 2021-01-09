import Link from "next/link";
import { Flex, Image } from "theme-ui";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        objectFit: "cover",
        verticalAlign: "bottom",
      }}
      src={src}
      alt={`Cover Image for ${title}`}
    />
  );
  return (
    <>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default CoverImage;
