//myips
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SellTOAnyoneSVG from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/sellToAnyone.svg";

function SellToAnyone() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
        textAlign: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#000",
          p: 12,
          fontFamily: "serif",
          textAlign: "center",
          borderRight: "1px solid black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex -center",
        }}
      >
        <Grid alignItems="center">
          <img
            src={SellTOAnyoneSVG}
            height={"700px"}
            weight={"700px"}
            alt="MaxulichneyGuySectionPic"
          />
        </Grid>
        <Typography
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            p: 1,
            fontFamily: "serif",
            textAlign: "center",
            bgcolor: "#000",
            color: "#000",
          }}
        ></Typography>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#fff",
          m: 0,
          p: 0,
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 35,
            fontStyle: "bold",
            m: 6,
            p: 6,
            textAlign: "Start",
            fontFamily: "serif",
            bgcolor: "#fff",
            color: "#000",
          }}
        >
          <Typography
            sx={{
              fontSize: 55,
              fontStyle: "bold",
              textAlign: "Start",
              fontFamily: "Mabry pro , ",
              color: "#000",
            }}
          >
            Sell to Anyone
          </Typography>
          <br></br>
          <Typography
            variant="body1"
            color="white"
            sx={{
              textAlign: "start",
              fontSize: 30,
              fontFamily: "Mabry pro ,  ",
              color: "#000",
              fontStyle: "Bold",
            }}
          >
            Build a loyal following with simple posts, email newsletters, and
            automated workflows. Plus let your customers pay what they want or
            choose between one-time, recurring, or fixed-length payments in your
            currency of choice. (We’ll handle the fine print, like VAT).
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SellToAnyone;
