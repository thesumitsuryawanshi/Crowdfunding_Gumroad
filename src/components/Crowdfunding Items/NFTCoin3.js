import Grid from "@mui/material/Grid";

// Myips
import NavBar from "../NavBar";
import StartSelling from "../StartSelling";
import DefaultFooter from "../footer";
import { loadStripe } from "@stripe/stripe-js";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import bitcoin2 from "../../assets/MyImages/Crowdfunding Images/pixelcoin1.png";
import { Button, Container, Typography } from "@mui/material";

function NFTCoin3() {
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
      <NavBar />

      <Container>
        <Grid
          border="1px solid black"
          borderRadius={" 12px"}
          p={4}
          m={4}
          display="flex"
          flexDirection="row"
          justifyContent={"space-between"}
        >
          <Grid m={5} p={5} alignItems={"center"}>
            <Typography variant="h3">
              GET A PIECE OF SMART CUPS For a Better Planet,
            </Typography>
            <Typography fontSize={18}>
              <br></br>
              <br></br>Lorem ipsum saepe praesentium et aliquam omnis aut
              eveniet nihil vel expedita quibusdam. Eum consequatur perspiciatis
              ut deserunt tempore ea quisquam omnis est animi autem qui nulla
              ullam sit voluptatem
              <br></br>
              <br></br>Lorem ipsum quidem ea nobis vitae. At tenetur voluptate
              33 amet autem est enim recusandae!<br></br> Ut dolorem quibusdam
              eum autem ullam non nihil recusandae ut libero rerum est molestias
              dicta aut quae consequuntur. Ut Quis inventore a magnam libero et
              omnis enim et magnam eius?
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
            <Typography fontSize={14}>
              <br></br>Lorem ipsum dolor sit amet. Ea odio harum qui perferendis
              suscipit aut modi totam. Ut molestias placeat eos aliquid ducimus
              consequatur dolore et quidem autem ut totam quasi. Hic corporis
              suscipit sed itaque nisi sed debitis nihil ut ratione aspernatur
              sed sequi architecto.<br></br>
            </Typography>
          </Grid>
          <Grid m={5} p={5}>
            <Card>
              <CardMedia
                sx={{ height: 300 }}
                image={bitcoin2}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Crypto Bitcoins Guide - The Beginner's Guide to Cryptocurrency
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Crypto Bitcoins Guide: Many individuals believe that bitcoins
                  represent a new era of digital currency and often get confused
                  with them.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <StartSelling />
      <DefaultFooter />
    </>
  );
}

export default NFTCoin3;
