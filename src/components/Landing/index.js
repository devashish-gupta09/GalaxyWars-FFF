import { Box } from "@mui/system";
import React from "react";
import GameStore from "../GameStore";
import NavBar from "../Navbar";
import ShopSection from "../ShopSection";

function Landing() {
  return (
    <Box>
      <NavBar />
      <GameStore />
      <ShopSection />
    </Box>
  );
}

export default Landing;
