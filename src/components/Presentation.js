// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
// Material Kit 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//myip's
import * as React from "react";

// Presentation page sections

import NavBar from "./NavBar";
import Footer from "./footer";
import TrendSVCGuySection from "./trendsvcGuySection";
import MaxulichneyGuySection from "./MaxulichneyGuySection";
import SellAnywhere from "./SellAnywhere";
import SmileyGirl from "./SmileyGirl";
import PeopleInPark from "./PeopleInPark";
import StartSelling from "./StartSelling";
import SellToAnyone from "./SellToAnyone";
import Firstdivisionofgumroad from "./firstdivisionofgumroad";
import SellAnything from "./sellinganything";
import MakeYourOwnRoad from "./MakeYourOwnRoad";
import TwoSVGS from "./TwoSVGS";
import TwoText from "./TwoText";
import TopAnimationGuy from "./TopAnimationGuy";
import AmountEarned from "./amountEarned";
import Seventeenblocks from "./seventeenblocks";
import { Toolbar } from "@mui/material";

//myip's

// mycomponents
const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  textAlign: "center",
});
const MyBtnStartSelling = styled("div")({
  color: "white",
  backgroundColor: "black",
  borderRadius: 4,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  outline: "none",
  border: "2px solid #000" /* Thin black border */,
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(-9px) translateX(-9px)",
  },
});
const BoxRed = styled("div")({
  color: "white",
  backgroundColor: "#f21326",
  borderRadius: 4,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  outline: "none",
  border: "2px solid #000" /* Thin black border */,
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(-9px) translateX(-9px)",
  },
});

const BoxYellow = styled("div")({
  color: "white",
  backgroundColor: "#e8fc03",
  borderRadius: 4,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  outline: "none",
  border: "2px solid #000" /* Thin black border */,
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(9px) translateX(9px)",
  },
});

function Presentation() {
  const handleStartSellingClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("http://localhost:3000/crowdfunding");
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className="App">
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
            width="100%"
            height="100%"
          ></img>
          <NavBar />
          <Firstdivisionofgumroad></Firstdivisionofgumroad>
          <TopAnimationGuy />
          <TwoText></TwoText>
          <TwoSVGS></TwoSVGS>
          <MakeYourOwnRoad />
          <SellAnything />
          <MaxulichneyGuySection />
          <SellToAnyone />
          <TrendSVCGuySection />
          <SellAnywhere />
          <Seventeenblocks />
          <SmileyGirl />
          <AmountEarned />
          <PeopleInPark />
          <StartSelling />
          <Box p={3} m={3} border="1px solid black" borderRadius="12px">
            <Container>
              <Grid item xs={12}>
                <Typography variant="h1" fontWeight="bold" mb={0.5}>
                  Crowfunding
                </Typography>
                <Typography variant="body1" color="text">
                  Enter a new realm with Gumroad, where <br></br> creators and
                  customers alike can step <br></br> into the role of investors,
                  transforming the crowdfunding landscape.
                </Typography>
              </Grid>

              <ButtonContainer sx={{ m: 6 }}>
                <BoxYellow>
                  <BoxRed>
                    <MyBtnStartSelling
                      onClick={handleStartSellingClick} // Add onClick event
                      sx={{ px: 9, py: 1.5 }}
                      Link
                    >
                      Crowdfunding
                    </MyBtnStartSelling>{" "}
                  </BoxRed>
                </BoxYellow>
              </ButtonContainer>
            </Container>
          </Box>
          <Box pt={2} mt={2}>
            <Footer />
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Presentation;
