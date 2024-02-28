//myip's
import * as React from "react";
import "./App.css";
// import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";

// Material Kit 2 React examples
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

// Presentation page sections
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

function App() {
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
      <Box p={6} m={6} border="1px solid black" borderRadius="12px">
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              lg={5}
              ml="auto"
              sx={{ textAlign: { xs: "center", lg: "left" } }}
            >
              <Typography variant="h1" fontWeight="bold" mb={0.5}>
                Crowfunding
              </Typography>
              <Typography variant="body1" color="text">
                A new way of gumroad where Creators or Customer can become
                investors{" "}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              my={{ xs: 5, lg: "auto" }}
              mr={{ xs: 0, lg: "auto" }}
              sx={{ textAlign: { xs: "center", lg: "right" } }}
            >
              <Button variant="contained" size="large">
                {/* <Link to="/crowdfunding">What is Crowdfunding?</Link> */}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box pt={6} mt={6}>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
