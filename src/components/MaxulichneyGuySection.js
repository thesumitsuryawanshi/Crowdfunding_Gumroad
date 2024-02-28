import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

//my ip's
import { useScrollTrigger } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import BOOKSVG from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/yellowHandwritingPen.svg";
import MaxulichneyGuySectionPic from "../assets/MyImages/MaxulichneyGuySection.png";

const MyBtnStartSelling = styled("button")({
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

const handleStartSellingClick = () => {
  window.open(
    "https://maxulichney.gumroad.com/?recommended_by=search",
    "_blank"
  );
};

function MaxulichneyGuySection() {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 40, // Adjust threshold as needed
  });

  return (
    <Box
      p={6}
      sx={{
        justifyContent: "space-between",
        bgcolor: "#FE91E8",
        flexDirection: "row",
        display: "flex",
      }}
      spacing={2}
    >
      <Grid
        xs={6}
        container
        item
        p={3}
        m={3}
        alignItems="flex-start"
        textAlign="center"
        display="flex"
        flexDirection={"column"}
        sx={{ mx: "auto" }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Mabry pro , Sans-serif ",
            fontSize: 70,
            fontStyle: "Bold",
            color: "white",
            mb: 6,
            alignItems: "center", // Align items vertically
          }}
          fontFamily="Mabry pro , Sans-serif "
        ></Typography>
        <Typography
          variant="body1"
          color="black"
          sx={{
            fontFamily: "Mabry pro , Sans-serif",
            fontSize: 30,
            fontStyle: "Bold",
            alignItems: "center",
            textAlign: "center", // Align items vertically
            color: "black",
          }}
        >
          “I launched MaxPacks as an experimental <br></br> side gig; but within
          2 years those Procreate <br></br> brushes were earning more than my
          6-figure <br></br> salary in CG. Leaving in favor of <br></br>Gumroad
          enabled me to explore other <br></br> aspects of my art, develop new
          hobbies, <br></br> and finally prioritize my personal life.” <br></br>
          Max Ulichney sells Procreate Brush Packs
        </Typography>
        <Typography
          m={6}
          sx={{
            fontFamily: "Mabry pro , ",
            fontSize: 25,
            fontStyle: "Bold",
            alignItems: "center", // Align items vertically

            color: "black",
          }}
        >
          Max Ulichney sells Procreate Brush Packs{" "}
        </Typography>

        <MyBtnStartSelling
          onClick={handleStartSellingClick} // Add onClick event
          sx={{
            fontFamily: "serif",
            fontSize: 20,
            pl: 3,
            p: 1,
            position: "absolute",
            left: 1690,
            top: 4900,
            transition: "transform 0.1s ease",
            transform: trigger ? "translateY(-40px)" : "translateY(10)",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#FF90E8" />
            <path
              d="M14.6108 24.0635C9.92396 24.0635 7.16699 20.3043 7.16699 15.6282C7.16699 10.7688 10.1997 6.82617 15.9893 6.82617C21.9627 6.82617 23.9845 10.8604 24.0764 13.1526H19.7572C19.6653 11.869 18.5625 9.94356 15.8974 9.94356C13.0485 9.94356 11.2105 12.4191 11.2105 15.4448C11.2105 18.4705 13.0485 20.9461 15.8974 20.9461C18.4706 20.9461 19.5734 18.929 20.0329 16.9118H15.8974V15.2615H24.575V23.6968H20.768V18.3789C20.4923 20.3043 19.2977 24.0635 14.6108 24.0635Z"
              fill="black"
            />
          </svg>
          maxulichney
        </MyBtnStartSelling>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          left: 1260,
          top: 4770,
          zIndex: 1230,
          transition: "transform 0.1s ease",
        }}
      >
        <img src={BOOKSVG} alt="Description of your image" />
      </Box>

      <Grid alignItems="center" justify="center" xs={6} mr={5}>
        <img
          src={MaxulichneyGuySectionPic}
          height={"600px"}
          weight={"600px"}
          alt="MaxulichneyGuySectionPic"
        />
      </Grid>
    </Box>
  );
}
export default MaxulichneyGuySection;
