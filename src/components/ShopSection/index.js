import { Box } from "@mui/material";
import React from "react";
import ShopCatalogue from "../ShopCatalogue";
import SearchBar from "../SearchBar";

function ShopSection() {
  return (
    <Box sc={styles.container}>
      <SearchBar />
      <ShopCatalogue />
    </Box>
  );
}

export default ShopSection;

const styles = {
  container: {
    width: "100%",
    height: "auto",
    background: "#000000",
  },
};
