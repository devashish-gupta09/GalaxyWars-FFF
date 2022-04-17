import { Box } from "@mui/material";
import React from "react";

import Image from "next/image";
import BlockButton from "../BlockButton";

function SearchBar() {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.icon}>
        <Image
          src="/assets/filter-icon.svg"
          alt="filter-icon"
          height={50}
          width={50}
        />
      </Box>
      <Box sx={styles.search}></Box>
      <Box sx={styles.btn}>
        <BlockButton text="reset" />
      </Box>
    </Box>
  );
}

export default SearchBar;

const styles = {
  container: {
    width: "100%",
    height: "12vh",
    marginTop: "10vh",
    padding: "0 10em",
    background:
      "linear-gradient(90deg, rgba(155, 185, 203, 0) 0%, rgba(155, 185, 203, 0) 0.01%, #9BB9CB 23.39%, #9BB9CB 69.46%, rgba(155, 185, 203, 0) 102.86%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
