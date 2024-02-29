import Vegalia from "../assets/MyImages/vegalia.png";
import { styled } from "@mui/system";
import { Grid, Box } from "@mui/material"; // Import Grid component
import Typography from "@mui/material/Typography";

// Myips

import Yellowpaintbrush from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/3gcoins.svg";

// mycomponents
const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  textAlign: "center",
});
const MyBtnStartSelling = styled("Button")({
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
const MyBtnVegalia = styled("Button")({
  color: "black",
  backgroundColor: "white",
  borderRadius: 44,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  border: "3px solid #000",
  display: "flex", // Use Flexbox
  alignItems: "center", // Center items vertically
  justifyContent: "center", // Center items horizontally
  textAlign: "center",
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

const VegaliaBTN = styled("button")({
  color: "black",
  backgroundColor: "white",
  borderRadius: 44,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  border: "3px solid #000",
  display: "flex", // Use Flexbox
  alignItems: "center", // Center items vertically
  justifyContent: "center", // Center items horizontally
  textAlign: "center",
  "&:hover": {
    transform: "translateY(-9px) translateX(-9px)",
  },
});

function firstdivisionofgumroad() {
  const handleStartSellingClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("https://app.gumroad.com/signup", "_blank");
  };
  const VengaliaClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open(
      "https://byvegalia.gumroad.com/?recommended_by=search",
      "_blank"
    );
  };

  return (
    <Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 2,
          border: "1px solid black",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            bgcolor: "#FF91E9",
            m: 0,
            p: 0,
            textAlign: "start",

            fontFamily: "serif",
            borderRight: "1px solid black",
          }}
        >
          <Typography
            sx={{
              fontSize: 60,
              fontStyle: "Bold",
              m: 6,
              p: 6,
              textAlign: "start",

              fontFamily: "Mabry pro , Sans-serif",
              bgcolor: "#FF91E9",
              color: "#FF91E9",
            }}
          >
            <Typography
              sx={{
                fontSize: 90,
                fontStyle: "Bold",
                color: "#000",

                fontStyle: "Bold",
                textAlign: "start",
                fontFamily: "Mabry pro, sans-serif",
                fontWeight: "bold",
              }}
            >
              Go from <br></br> zero to $1{" "}
            </Typography>
            <Typography
              color="white"
              sx={{
                justifyContent: "flex-start",
                fontSize: 22,
                fontFamily: "Mabry pro, sans-serif",
                color: "#000",
                fontStyle: "Bold",
              }}
            >
              With Gumroad, anyone can earn their first dollar online. Just
              start with what you know, see what sticks, and get paid. It’s that
              easy.
              <ButtonContainer
                sx={{ m: 10, justifyContent: "flex-start", textAlign: "start" }}
              >
                <BoxYellow>
                  <BoxRed>
                    <MyBtnStartSelling
                      onClick={handleStartSellingClick} // Add onClick event
                      sx={{ px: 9, py: 1.5, fontSize: 24 }}
                    >
                      Start Selling
                    </MyBtnStartSelling>{" "}
                  </BoxRed>
                </BoxYellow>
              </ButtonContainer>
            </Typography>
          </Typography>
        </Grid>

        <MyBtnVegalia
          onClick={VengaliaClick} // Add onClick event
          sx={{
            fontFamily: "serif",
            fontSize: 25,

            p: 1,
            position: "absolute",
            left: 1600,
            top: 840,
            z: 11,

            transition: "transform 0.1s ease",
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              paddingRight: "10px",
            }}
          >
            <circle cx="16" cy="16" r="16" fill="#FF90E8" />
            <path
              d="M14.6108 24.0635C9.92396 24.0635 7.16699 20.3043 7.16699 15.6282C7.16699 10.7688 10.1997 6.82617 15.9893 6.82617C21.9627 6.82617 23.9845 10.8604 24.0764 13.1526H19.7572C19.6653 11.869 18.5625 9.94356 15.8974 9.94356C13.0485 9.94356 11.2105 12.4191 11.2105 15.4448C11.2105 18.4705 13.0485 20.9461 15.8974 20.9461C18.4706 20.9461 19.5734 18.929 20.0329 16.9118H15.8974V15.2615H24.575V23.6968H20.768V18.3789C20.4923 20.3043 19.2977 24.0635 14.6108 24.0635Z"
              fill="black"
            />
          </svg>
          Vegalia
        </MyBtnVegalia>
        <Grid
          item
          xs={6}
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            bgcolor: "#FEC901",
            m: 0,
            p: 0,
            fontFamily: "serif",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", // Align content to the bottom
          }}
        >
          <Typography
            sx={{
              fontSize: 60,
              fontStyle: "bold",
              m: 6,
              p: 6,
              fontFamily: "serif",
              textAlign: "center",
              bgcolor: "#FEC901",
              color: "#000",
            }}
          >
            <Grid
              sx={{
                position: "absolute",
                left: 1560,
                top: 390,
                z: 30,
                transition: "transform 0.1s ease",
              }}
            ></Grid>

            <img src={Vegalia} alt="MaxulichneyGuySectionPic" />
            <Typography
              pt={6}
              color="#000"
              sx={{
                position: "absolute",
                left: 970,
                top: 950,
                z: 30,
                transition: "transform 0.1s ease",
              }}
            >
              {" "}
              Vegalia sells Procreate brushes
            </Typography>
          </Typography>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            left: 1150,
            top: 800,
            zIndex: 1230,
            transition: "transform 0.1s ease",
          }}
        >
          <img src={Yellowpaintbrush} alt="Yellowpaintbrush " />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 1500,
            top: 400,
            zIndex: 1230,
            transition: "transform 0.1s ease",
          }}
        >
          <img src={Yellowpaintbrush} alt="Yellowpaintbrush " />
        </Box>
      </Grid>
    </Grid>
  );
}

export default firstdivisionofgumroad;
