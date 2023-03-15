import { Alert, Container, Snackbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

type Props = {};

const Index = (props: Props) => {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Outlet />

      </Container>
    </div>
  );
};

export default Index;
