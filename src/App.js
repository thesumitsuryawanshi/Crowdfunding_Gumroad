//myip's
import * as React from "react";
import "./App.css";
// import { Link } from "react-router-dom";
// Material Kit 2 React components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import { styled } from "@mui/system";

// Presentation page sections

import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import TrendSVCGuySection from "./components/trendsvcGuySection";
import MaxulichneyGuySection from "./components/MaxulichneyGuySection";
import SellAnywhere from "./components/SellAnywhere";
import SmileyGirl from "./components/SmileyGirl";
import PeopleInPark from "./components/PeopleInPark";
import StartSelling from "./components/StartSelling";
import SellToAnyone from "./components/SellToAnyone";
import Firstdivisionofgumroad from "./components/firstdivisionofgumroad";
import SellAnything from "./components/sellinganything";
import MakeYourOwnRoad from "./components/MakeYourOwnRoad";
import TwoSVGS from "./components/TwoSVGS";
import TwoText from "./components/TwoText";
import TopAnimationGuy from "./components/TopAnimationGuy";
import AmountEarned from "./components/amountEarned";
import Seventeenblocks from "./components/seventeenblocks";

//mycomponets

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

function App() {
  const handleStartSellingClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("https://app.gumroad.com/signup", "_blank");
  };
  return (
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
                >
                  {" "}
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
  );
}

export default App;
