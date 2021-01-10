import React, { useEffect } from "react";
import { Flex, Button, Text, useColorMode } from "theme-ui";

export const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    const changeColorMode = (e: any) => {
      e.matches ? setColorMode("dark") : setColorMode("light");
    };

    changeColorMode(window.matchMedia("(prefers-color-scheme: dark)"));

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", changeColorMode);

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", changeColorMode);
  }, []);
  return (
    <Flex sx={{ position: "relative", alignItems: "center" }}>
      <Text
        sx={{
          position: "absolute",
          right: "3.3rem",
          fontSize: 0,
        }}
      >
        {colorMode === "default" ? "LIGHT" : "DARK"}
      </Text>
      <Button
        onClick={() => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
        sx={{
          bg: "background",
          border: "1px solid",
          borderColor: "text",
          borderRadius: "30px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden",
          padding: 0,
          position: "relative",
          width: "3rem",
          height: "1.5rem",
          outline: 0,
          "&:hover": {
            bg: "transparent",
          },
          span: {
            flex: 1,
            lineHeight: 0.9,
            fontSize: "0.8rem",
            textAlign: "center",
            transition: "all 0.3s linear",
          },
        }}
      >
        <Text
          as="span"
          sx={{
            transform:
              colorMode === "default" ? "translateY(0)" : "translateY(100px)",
          }}
        >
          ⚫️
        </Text>
        <Text
          as="span"
          sx={{
            transform:
              colorMode === "default" ? "translateY(-100px)" : "translateY(0)",
          }}
        >
          💡
        </Text>
      </Button>
    </Flex>
  );
};
