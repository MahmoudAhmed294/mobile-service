import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";

type Props = {
  handleNext: any;
  handleBack: any;
  setOrderCustomer: Function;
};

const CustomerDetails = ({
  handleBack,
  handleNext,
  setOrderCustomer,
}: Props) => {
  const matches = useMediaQuery("(max-width:900px)");

  const [isValidation, setIsValidation] = useState<boolean>(false);
  const [customerDetailsValues, setCustomerDetailsValues] = useState<any>({
    customer: "",
    phone: "",
  });

  const handleCheckValidation = () => {
    if (
      customerDetailsValues.customer !== "" &&
      customerDetailsValues.phone !== ""
    ) {
      setOrderCustomer(customerDetailsValues);
      handleNext();
    } else {
      setIsValidation(true);
    }
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setCustomerDetailsValues({
      ...customerDetailsValues,
      [name]: value,
    });
  };

  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{ height: matches ? "100%" : "60vh", mb: matches ? 4 : 2 }}
      >
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <FormLabel sx={{ mb: 0.5 }} htmlFor="name">
              Customer name
            </FormLabel>
            <TextField
              id="name"
              placeholder="Enter Customer name"
              type="text"
              name="customer"
              error={customerDetailsValues.customer === "" && isValidation}
              value={customerDetailsValues.customer}
              onChange={handleInputChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <FormLabel sx={{ mb: 0.5 }} htmlFor="Mobile number">
              Mobile number
            </FormLabel>
            <TextField
              id="Mobile number"
              placeholder="Enter Mobile number"
              type="text"
              name="phone"
              error={customerDetailsValues.phone === "" && isValidation}
              value={customerDetailsValues.phone}
              onChange={(e)=>e.target.value.length !==14 && handleInputChange(e)}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => handleBack()}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleCheckValidation} sx={{ mr: 1 }}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default CustomerDetails;
