// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

//myip's
import Typography from "@mui/material/Typography";
import counterSectionMan from "../assets/MyImages/trendsvc.png";
import BOOKSVG from "../assets/MyImages/GumroadallSVG/MyPNG new/vectorpaintBooks.png";
import FreeSVG from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/free2.png";

//mycomponents
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
  window.open("https://trendsvc.gumroad.com/?recommended_by=search", "_blank");
};

function trendsvcGuySection() {
  return (
    <Box
      p={15}
      sx={{
        justifyContent: "space-between",
        border: "1px solid black",
        bgcolor: "#23A195",
        display: "flex",
        flexDirection: "row",
        alignItems: "center", // Align items vertically
        justifyContent: "space-between",
      }}
      spacing={2}
    >
      <Grid xs={6}>
        <Grid
          container
          item
          p={5}
          display="flex"
          flexDirection="column"
          alignItems="center" // Align items vertically
          justifyContent="space-between"
          m={5}
          sx={{ mx: "auto" }}
        >
          <Typography
            variant="body1"
            color="black"
            sx={{
              fontFamily: "Mabry pro , ",
              fontSize: 30,
              fontStyle: "Bold",
              alignItems: "center", // Align items vertically

              color: "black",
            }}
            fontFamily="Mabry pro ,"
          >
            “Originally, I took pre-orders for my Trend <br></br> Reports on
            Gumroad. But I received... <br></br> exactly $0. So I changed
            tactics: I made half <br></br> of my report free, and the other half
            paid.<br></br> Today, 99% of Trends.VC revenue is <br></br>recurring
            in the form of annual and <br></br>quarterly subscriptions.”
          </Typography>
          <Typography
            m={4}
            sx={{
              fontFamily: "Mabry pro ",
              fontSize: 25,
              fontStyle: "Bold",
              alignItems: "center", // Align items vertically

              color: "black",
            }}
          >
            DruRiley sells business insights and expertise
          </Typography>
        </Grid>

        <Box
          sx={{
            position: "absolute",
            left: 1090,
            top: 6500,
            zIndex: 1230,
            transition: "transform 0.1s ease",
          }}
        >
          <img src={BOOKSVG} alt="Description of your image" />
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: 1590,
            top: 6100,
            zIndex: 1230,
            transition: "transform 0.1s ease",
          }}
        >
          <img src={FreeSVG} alt="Description of your image" />
        </Box>

        <MyBtnStartSelling
          onClick={handleStartSellingClick} // Add onClick event
          sx={{
            fontFamily: "serif",
            fontSize: 30,
            pl: 3,
            p: 1,
            position: "absolute",
            left: 1650,
            top: 6650,
            z: 11,

            transition: "transform 0.1s ease",
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
          trendsvc
        </MyBtnStartSelling>
      </Grid>

      <Grid p={4} m={4} xs={6} alignItems="center" justify="center">
        <img src={counterSectionMan} alt="MaxulichneyGuySectionPic" />
      </Grid>
    </Box>
  );
}
export default trendsvcGuySection;
