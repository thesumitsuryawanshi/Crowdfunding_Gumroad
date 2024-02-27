// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//myip
import { styled } from "@mui/system";

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

const ContainerWrapper = styled(Container)({
  position: "relative",
  justifyContent: "center",
  zIndex: 2,
  py: 12,
});

const GridItemWrapper = styled(Grid)({
  container: true,
  item: true,
  xs: 12,
  md: 7,
  justifyContent: "center",
  mx: "auto",
  textAlign: "center",
});

function StartSelling() {
  const handleStartSellingClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("https://app.gumroad.com/signup", "_blank");
  };
  return (
    <>
      <Box component="section">
        <Box
          variant="gradient"
          position="relative"
          sx={{ overflow: "hidden", bgcolor: "#fc72e0" }}
        >
          <Box
            // component="img"
            // src={bgImage}
            // alt="pattern-lines"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            zIndex={1}
            opacity={0.6}
          />
          <ContainerWrapper>
            <Typography variant="h1" color="white"></Typography>

            <GridItemWrapper>
              <Typography
                variant="h1"
                color="white"
                sx={{ m: 10, fontFamily: "sansserif" }} // Specify the font family
              >
                17. Share your work. <br /> Someone out there needs it.
              </Typography>

              <ButtonContainer sx={{ m: 10 }}>
                <BoxYellow>
                  <BoxRed>
                    <MyBtnStartSelling
                      onClick={handleStartSellingClick} // Add onClick event
                      sx={{ px: 9, py: 1.5 }}
                    >
                      {" "}
                      Start Selling
                    </MyBtnStartSelling>{" "}
                  </BoxRed>
                </BoxYellow>
              </ButtonContainer>
            </GridItemWrapper>
          </ContainerWrapper>
        </Box>
      </Box>
    </>
  );
}
export default StartSelling;
