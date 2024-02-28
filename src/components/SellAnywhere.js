import Grid from "@mui/material/Grid"; // Import Grid component
import Typography from "@mui/material/Typography";

import SellAnywherepng from "../assets/MyImages/GumroadallSVG/Presentation screen SVG/sellanywhere.png";

function SellAnywhere() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 2,
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
          bgcolor: "#FEC901",
          m: 0,
          pt: 10,
          fontFamily: "serif",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        <Typography
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            m: 1,
            p: 1,
            fontFamily: "serif",
            textAlign: "center",
            bgcolor: "#FEC901",
            color: "#FEC901",
          }}
        >
          <Grid alignItems="center">
            <img
              src={SellAnywherepng}
              height={"700px"}
              weight={"700px"}
              alt="MaxulichneyGuySectionPic"
            />
          </Grid>
        </Typography>
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
              fontSize: 70,
              fontStyle: "bold",
              textAlign: "Start",
              fontFamily: "serif",
              color: "#000",
            }}
          >
            Sell Anywhere
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontSize: 30,
              fontStyle: "bold",
              textAlign: "Start",
              fontFamily: "serif",
              color: "#000",
            }}
          >
            Sell anywhere Create and customize your storefront with our
            all-in-one platform or choose to use your personal site instead.
            With Zapier, you can seamlessly connect your Gumroad account to
            thousands of apps in your current stack.
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default SellAnywhere;
