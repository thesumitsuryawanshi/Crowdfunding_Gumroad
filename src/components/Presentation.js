// @mui material components
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";

// Material Kit 2 React examples
import DefaultNavBar from "./NavBar";
import DefaultFooter from "./footer";

// Presentation page sections
import TrendSVCGuySection from "./trendsvcGuySection";
import MaxulichneyGuySection from "./MaxulichneyGuySection";
import SellAnywhere from "./SellAnywhere";
import Seventeenblocks from "./Seventeenblocks";
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
import BuiltByDevelopers from "./BuiltByDevelopers";

//myip's
import * as React from "react";

function Presentation() {
  return (
    <>
      <Box>
        <img
          src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
          width="100%"
          height="100%"
        ></img>
        <DefaultNavBar />
        <Firstdivisionofgumroad></Firstdivisionofgumroad>
        <TopAnimationGuy />
        <TwoText></TwoText>
        <TwoSVGS></TwoSVGS>
        <MakeYourOwnRoad />
        <SellAnything />
        <MaxulichneyGuySection />
        <SellToAnyone />
        <TrendSVCGuySection></TrendSVCGuySection>
        <SellAnywhere />
        <Seventeenblocks />
        <SmileyGirl />
        <BuiltByDevelopers />
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
                  <Link to="/crowdfunding">What is Crowdfunding?</Link>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* 19. footer */}
        <Box pt={6} px={1} mt={6}>
          <DefaultFooter />
        </Box>
      </Box>
    </>
  );
}

export default Presentation;
