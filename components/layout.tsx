import { Box } from "theme-ui";
import Alert from "./alert";
import { DarkModeToggle } from "./dark-toggle";
import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <Alert preview={preview} />
        <main>
          <Box sx={{ position: "absolute", right: 3 }}>
            <DarkModeToggle />
          </Box>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
