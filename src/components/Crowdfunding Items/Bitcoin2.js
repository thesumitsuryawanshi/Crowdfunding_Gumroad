import Grid from "@mui/material/Grid";

//barchart
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { AppBar, Toolbar } from "@mui/material";
// Myips
import NavBar from "../NavBar";
import StartSelling from "../StartSelling";
import DefaultFooter from "../footer";
import { loadStripe } from "@stripe/stripe-js";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import bitcoin2 from "../../assets/MyImages/Crowdfunding Images/bitcoin1.png";
import { Button, Container, Typography } from "@mui/material";

const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const data = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
  { label: "Group C", value: 300 },
  { label: "Group D", value: 200 },
  { label: "Group E", value: 278 },
  { label: "Group F", value: 189 },
];

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

function Bitcoin2() {
  const OpenStripe = async () => {
    console.log("Here is the Data");
    const stripe = await loadStripe(
      "pk_test_51Omv38SDApL2Y6yKwb3LKSLCVe6zsFYvvL4x6keruJxjr2YcRQKcY6q1YeuvWunDNUOlL2SFxJLUjmhlDXNNJGuw00n73z6p3r"
    );
    const body = {
      products: [
        {
          name: "Crypto Bitcoins Guide - The Beginner's Guide to Cryptocurrency",
          price: 100,
          quantity: 1,
          description: "Description of the product",
          billing_address: {
            name: "John Doe",
            line1: "123 Main St",
            city: "Anytown",
            postal_code: "12345",
            state: "CA",
            country: "US",
          },
        },
      ],
    };

    const headers = { "Content-Type": "application/json" };

    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.log(result.error);
    }

    //link to goto back to the parent (Crowdfunding page)
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#fff" }}>
        <NavBar color="white" />
      </AppBar>

      <Container>
        <Grid border="1px solid black" borderRadius={" 12px"} p={1} m={1}>
          <Grid>
            <Grid
              p={4}
              m={4}
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
            >
              <Grid m={2} p={2} alignItems={"center"}>
                <Typography variant="h3">
                  Crypto Bitcoins Guide - The Beginner's Guide to Cryptocurrency
                </Typography>
                <Typography fontSize={18}>
                  <br></br>
                  <br></br>Crypto Bitcoins Guide: Many individuals believe that
                  bitcoins represent a new era of digital currency and often get
                  confused with them.
                  <br></br>
                  <br></br>Lorem ipsum quidem ea nobis vitae. At tenetur
                  voluptate 33 amet autem est enim recusandae!<br></br> Ut
                  dolorem quibusdam eum autem ullam non nihil recusandae ut
                  libero rerum est molestias dicta aut quae consequuntur. Ut
                  Quis inventore a magnam libero et omnis enim et magnam eius?
                  <br></br> <br></br>
                </Typography>
                <Button
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"start"}
                  style={{
                    margin: 2,
                    color: "#000",
                    fontSize: 13, // Set the font size here
                    backgroundColor: "#fff",
                    border: "1px solid black",
                    borderRadius: "4px",
                  }}
                  size="small"
                  onClick={OpenStripe}
                >
                  Starting Investment : $100/-
                </Button>{" "}
              </Grid>

              <Grid m={2} p={2}>
                <Card>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={bitcoin2}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Crypto Bitcoins Guide - The Beginner's Guide to
                      Cryptocurrency
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Crypto Bitcoins Guide: Many individuals believe that
                      bitcoins represent a new era of digital currency and often
                      get confused with them.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid display={"flex"} flexDirection={"row"}>
            <Grid p={5} m={5}>
              <BarChart
                width={500}
                height={300}
                series={[
                  { data: pData, label: "pv", stack: "stack1" },
                  { data: amtData, label: "amt" },
                  { data: uData, label: "uv", stack: "stack1" },
                ]}
                xAxis={[{ data: xLabels, scaleType: "band" }]}
              />
            </Grid>
            <Grid
              p={1}
              m={1}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-center"}
            >
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "series A" },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <StartSelling />
      <DefaultFooter />
    </>
  );
}

export default Bitcoin2;
