//myip's
import * as React from "react";
import DefaultNavBar from "./NavBar";

import DefaultFooter from "./footer";
import { Typography, Box } from "@mui/material";

function Stripesuccess() {
  return (
    <>
      <Box>
        <img
          src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
          width="100%"
          height="100%"
        ></img>
        <DefaultNavBar />
        <Typography>Sucesss</Typography>
        {/* 19. footer */}
        <Box pt={6} px={1} mt={6}>
          <DefaultFooter />
        </Box>
      </Box>
    </>
  );
}

export default Stripesuccess;
