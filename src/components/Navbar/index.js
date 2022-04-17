import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

import BlockButton from "../BlockButton";
import Image from "next/image";

function NavBar() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.flex}>
        <Box sx={styles.logo}>
          <Image
            src="/assets/app-logo.svg"
            alt="logo"
            height={150}
            width={150}
          />
          {/* <img src="/assets/app-logo.svg" alt="logo" /> */}
        </Box>
        <Box sx={styles.navButtons}>
          <Box sx={styles.navButton}>Explore</Box>
          <Box sx={styles.navButton}>News</Box>
          <Box sx={styles.navButton}>Community</Box>
          <Box sx={styles.navButton}>Equip</Box>
          <Box sx={styles.navButton}>Guide</Box>
          <Box sx={styles.navButton}>Store</Box>
          <BlockButton text="Buy Now" />
          <Box sx={styles.navButton}>
            <ShoppingCartIcon />
            Cart
          </Box>
          <Box sx={styles.navButton}>Login</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;

const styles = {
  container: {
    height: "10vh",
    width: "100%",
    backgroundColor: "#000000",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "100%",
    margin: "0 5em",
  },
  logo: {
    marginTop: "3em",
  },
  navButtons: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  navButton: {
    display: "flex",
    color: "#fff",
    margin: "0.5em 0.75em",
    padding: "0.5em 0.75em",
    textTransform: "uppercase",
    fontWeight: "600",
    verticalAlign: "middle",
    cursor: "pointer",
    "&:hover": {
      background: "#764E11",
    },
  },
};
