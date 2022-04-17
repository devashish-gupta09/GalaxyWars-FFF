import { Box } from "@mui/material";
import React, { useState } from "react";

import Image from "next/image";

function ShopCatalogue() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.pages}>
        {iconData.map((item) => (
          <Box key={item.key} sx={styles.box}>
            <Box
              key={item.key}
              sx={styles.pageIcon}
              onMouseOver={handleMouseHover}
              onMouseOut={handleMouseOut}
            >
              <Image
                src={item.img}
                sx={styles.imgBox}
                alt="icon"
                width={30}
                height={30}
              />
            </Box>
            {/* {isHovering && <Box sx={styles.pageIconHover}>{item.name}</Box>} */}
          </Box>
        ))}
      </Box>
      <Box sx={styles.catalogue}>
        <Box sx={styles.carousel}>
          <Box sx={styles.carouselBox}>
            <Box sx={styles.carouselItem}>
              <Box sx={styles.price}>
                <Image
                  src="/assets/price-icon.svg"
                  alt="coin"
                  width={20}
                  height={20}
                />
                7000
              </Box>
              <Box sx={styles.itemName}>Lucrehulk-class battleship</Box>
            </Box>
          </Box>
          <Box sx={styles.cockpitVoice}>
            <Box sx={styles.price}>
              <Image
                src="/assets/price-icon.svg"
                alt="coin"
                width={20}
                height={20}
              />
              2000
            </Box>
            <Box sx={styles.itemName}>COVIS ARCHER</Box>
          </Box>
        </Box>
        <Box sx={styles.ships}>
          <Box
            sx={{
              height: "15em",
              width: "15em",
              background:
                "url('/assets/home/Star Sparrow Modular Spaceship.png')",
            }}
          >
            <Box sx={styles.ship}>
              <Box sx={styles.price}>
                <Image
                  src="/assets/price-icon.svg"
                  alt="coin"
                  width={20}
                  height={20}
                />
                5000
              </Box>
              <Box sx={styles.shipName}>Star Sparrow Modular Spaceship</Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "15em",
              width: "15em",
              background: "url('/assets/home/Heavy Class Firefly.png')",
            }}
          >
            <Box sx={styles.ship}>
              <Box sx={styles.price}>
                <Image
                  src="/assets/price-icon.svg"
                  alt="coin"
                  width={20}
                  height={20}
                />
                5000
              </Box>
              <Box sx={styles.shipName}>Heavy Class Firefly</Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "15em",
              width: "15em",
              background: "url('/assets/home/X-wing starfighter.png')",
            }}
          >
            <Box sx={styles.ship}>
              <Box sx={styles.price}>
                <Image
                  src="/assets/price-icon.svg"
                  alt="coin"
                  width={20}
                  height={20}
                />
                5000
              </Box>
              <Box sx={styles.shipName}>X-wing starfighter</Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "15em",
              width: "15em",
              background:
                "url('/assets/home/USS Enterprise D, Star Trek TNG.png')",
            }}
          >
            <Box sx={styles.ship}>
              <Box sx={styles.price}>
                <Image
                  src="/assets/price-icon.svg"
                  alt="coin"
                  width={20}
                  height={20}
                />
                5000
              </Box>
              <Box sx={styles.shipName}>USS Enterprise D, Star Trek TNG</Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "15em",
              width: "15em",
              background: "url('/assets/home/Textured X-wing .png')",
            }}
          >
            <Box sx={styles.ship}>
              <Box sx={styles.price}>
                <Image
                  src="/assets/price-icon.svg"
                  alt="coin"
                  width={20}
                  height={20}
                />
                5000
              </Box>
              <Box sx={styles.shipName}>Textured X-wing</Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "15em",
              width: "15em",
              background: "url('/assets/home/Drone 16358.png')",
            }}
          >
            <Box sx={styles.ship}>
              <Box sx={styles.price}>
                <Image
                  src="/assets/price-icon.svg"
                  alt="coin"
                  width={20}
                  height={20}
                />
                5000
              </Box>
              <Box sx={styles.shipName}>Drone 16358</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShopCatalogue;

const styles = {
  container: {
    width: "100%",
    background: "#000000",
    display: "flex",
    flexDirection: "row",
    padding: "2em",
  },
  box: {
    display: "flex",
    flexDirection: "row",
  },
  pageIcon: {
    border: "2px solid #FFFFFF",
    margin: "1em",
    padding: "0.5em",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #F4A123",
    },
  },
  pageIconHover: {
    background: "#F4A123",
  },
  catalogue: {
    paddingLeft: "8em",
  },
  carousel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  carouselBox: {
    border: "2px solid #F4A123",
  },
  carouselItem: {
    width: "40em",
    height: "20em",
    background:
      'url("/assets/carousel-pics/Lucrehulk-class battleship-CLASSIC.png") no-repeat center center',
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-end",
    alignItems: "flex-end",
    justifyContent: "space-between",
    // "&:hover": {
    //   width: "45em",
    //   height: "25em",
    // },
  },
  price: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    background: "#F4A1237A",
    width: "5em",
    padding: "0.1em 1em",
    float: "right",
  },
  itemName: {
    width: "100%",
    height: "5em",
    paddingBottom: "1em",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    background:
      "linear-gradient(178.79deg, rgba(244, 161, 35, 0) 1.03%, rgba(244, 161, 35, 0.59) 51.86%)",
    color: "#fff",
    fontSize: "1.5em",
  },
  cockpitVoice: {
    width: "15em",
    height: "20em",
    border: "2px solid #F4A123",
    background:
      "url('/assets/carousel-pics/covis-archer.svg') no-repeat center center",
    marginLeft: "5em",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-end",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  ships: {
    marginTop: "5em",
    display: "grid",
    gap: 5,
    gridTemplateColumns: {
      md: "repeat(3, 1fr)",
      sm: "repeat(3, 1fr)",
    },
  },
  ship: {
    width: "15em",
    height: "15em",
    border: "2px solid #F4A123",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-end",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  shipName: {
    width: "100%",
    height: "5em",
    padding: "1em",
    paddingBottom: "1em",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    color: "#fff",
    fontSize: "1.2em",
    textAlign: "center",
  },
};

const iconData = [
  {
    img: "/assets/home-icon.svg",
    name: "Home",
  },
  {
    img: "/assets/paint-icon.svg",
    name: "Paint Jobs",
  },
  {
    img: "/assets/shipkit-icon.svg",
    name: "Ship Kits",
  },
  {
    img: "/assets/cockpit-icon.svg",
    name: "Cockpit Voice Assistants",
  },
  {
    img: "/assets/fleetcarrier-icon.svg",
    name: "Fleet Carrier Layouts",
  },
];

const shipData = [
  {
    img: "/assets/home/Star Sparrow Modular Spaceship.png",
    name: "Star Sparrow Modular Spaceship",
    price: "5000",
  },
  {
    img: "/assets/home/Heavy Class Firefly.png",
    name: "Heavy Class Firefly",
    price: "5000",
  },
  {
    img: "/assets/home/X-wing starfighter.png",
    name: "X-wing starfighter",
    price: "5000",
  },
  {
    img: "/assets/home/USS Enterprise D, Star Trek TNG.png",
    name: "USS Enterprise D, Star Trek TNG",
    price: "5000",
  },
  {
    img: "/assets/home/Textured X-wing .png",
    name: "Textured X-wing",
    price: "5000",
  },
  {
    img: "/assets/home/Drone 16358.png",
    name: "Drone 16358",
    price: "5000",
  },
];
