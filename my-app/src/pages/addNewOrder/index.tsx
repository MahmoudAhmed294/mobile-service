import React, { useState, useEffect } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddMobileDetails from "./components/AddMobileDetails";
import CustomerDetails from "./components/CustomerDetails";
import Success from "./components/Success";
import { OrderDetails } from "../../api/types";

const steps = ["Add mobile details", "Customer details", "Success"];

type Props = {};

const Index = (props: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [orderFromMobileDetails, setOrderFromMobileDetails] = useState<any>();
  const [orderCustomer, setOrderCustomer] = useState<any>();
  const matches = useMediaQuery("(max-width:600px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Grid container mt={3}>
      <Grid item xs={12}>
        <Stepper
          activeStep={activeStep}
          sx={{
            px: { xs: 0, md: 4 },
            ".MuiStepConnector-root": {
              top: "19px",
            },
            ".MuiStepLabel-root": {},
            position: "relative",
          }}
          alternativeLabel={matches}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  ".MuiStepLabel-label": {
                    color: "#fff",
                    fontSize: matches ? "0.9rem" : "1.125rem",
                    fontWeight: matches ? 400 : 500,
                  },
                  ".MuiStepLabel-iconContainer svg": {
                    width: "1.4em",
                    height: "1.4em",
                    color: "#232A30",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                  },
                  ".Mui-completed": {
                    color: "#4082FF !important",
                    border: "unset !important",
                  },
                  ".MuiStepLabel-iconContainer .Mui-active": {
                    color: "#4082FF !important",
                    border: "unset !important",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <Box my={2}>
            {activeStep === 0 ? (
              <AddMobileDetails
                handleNext={handleNext}
                setOrderFromMobileDetails={setOrderFromMobileDetails}
              />
            ) : activeStep === 1 ? (
              <CustomerDetails
                handleNext={handleNext}
                handleBack={handleBack}
                setOrderCustomer={setOrderCustomer}
              />
            ) : (
              activeStep === 2 && <Success order={{...orderFromMobileDetails ,...orderCustomer}} />
            )}
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default Index;
