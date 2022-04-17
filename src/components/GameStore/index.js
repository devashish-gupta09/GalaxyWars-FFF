import { Box } from "@mui/material";
import React from "react";

import Image from "next/image";

function GameStore() {
  return <Box sx={styles.container}></Box>;
}

export default GameStore;

const styles = {
  container: {
    width: "100%",
    display: "absolute",
    top: "10vh",
    height: "50vh",
    background: "url(/assets/head-img.svg) no-repeat center center",
    backgroundColor: "#000000",
  },
};
