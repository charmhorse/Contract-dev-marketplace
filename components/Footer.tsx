"use client";

import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "fixed",
        bottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="start">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Commune AI
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Next.js | Material UI | Tailwind CSS`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
