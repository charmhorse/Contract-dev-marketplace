"use client";

import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton"
import Image from "next/image";
import CommuneIcon from "../public/img/logo/commune.gif";


export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#1f2937",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="start">
          <Grid item xs={12}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Image src={CommuneIcon} width={150} height={150} alt="logo" />
            </IconButton>
            <Typography color="white" variant="h5">
              Commune AI
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | In Development`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
