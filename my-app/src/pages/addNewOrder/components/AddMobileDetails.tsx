import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  MenuItem,
  Select,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Status from "../../../components/Status";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";
type Props = {
  handleNext: any;
  setOrderFromMobileDetails: Function;
};

const AddMobileDetails = ({ handleNext, setOrderFromMobileDetails }: Props) => {
  const navigate = useNavigate();
  const [isValidation, setIsValidation] = useState<boolean>(false);
  const [mobileDetails, setMobileDetails] = useState<any>({
    brand: "",
    problem: "",
    date: "",
    paid: false,
    status: "Under Process",
    model: "",
    serialNumber: "",
    isInWarranty: false,
    cost: 0,
    costReceived: 0,
    remainingCost: 0,
    comments: "",
    maintenancePeriod: 0,
    spareParts: "",
    engineerName: "",
  });

  const handleCheckValidation = () => {
    if (
      mobileDetails.brand !== "" &&
      mobileDetails.problem !== "" &&
      mobileDetails.date !== "" &&
      mobileDetails.model !== "" &&
      mobileDetails.cost !== 0 &&
      mobileDetails.maintenancePeriod !== 0 &&
      mobileDetails.engineerName !== "" &&
      mobileDetails.cost - mobileDetails.costReceived > 1
    ) {
      setOrderFromMobileDetails(mobileDetails);
      handleNext();
    } else {
      setIsValidation(true);
    }
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
      setMobileDetails({
        ...mobileDetails,
        [name]: value,
      });
  };

  return (
    <div>
      <Stack alignItems="flex-end">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Engineer name">
                  Engineer name
                </FormLabel>
                <TextField
                  id="Engineer name"
                  placeholder="Enter Engineer name"
                  type="text"
                  name="engineerName"
                  error={mobileDetails.engineerName === "" && isValidation}
                  value={mobileDetails.engineerName}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl fullWidth>
                <Typography>Out of warranty?</Typography>
                <RadioGroup
                  row
                  name="isInWarranty"
                  value={mobileDetails.isInWarranty}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio sx={{ color: "gray.font" }} />}
                    label="Yes"
                  />
                  <FormControlLabel
                    sx={{ ml: 12 }}
                    value={false}
                    control={<Radio sx={{ color: "gray.font" }} />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Cost">
                  Cost
                </FormLabel>
                <TextField
                  id="Cost"
                  placeholder="Enter Cost"
                  name="cost"
                  error={mobileDetails.cost === 0 && isValidation}
                  value={mobileDetails.cost}
                  onChange={(e) =>
                    +e.target.value > -1 ? handleInputChange(e) : ""
                  }
                  type="number"
                  inputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Comments">
                  Comments
                </FormLabel>
                <TextField
                  id="Comments"
                  placeholder="add your comment"
                  multiline
                  rows={3}
                  maxRows={5}
                  name="comments"
                  value={mobileDetails.comments}
                  onChange={handleInputChange}
                />
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1.5}>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Model">
                  Brand
                </FormLabel>
                <TextField
                  id="Brand"
                  placeholder="Enter brand"
                  name="brand"
                  error={mobileDetails.brand === "" && isValidation}
                  value={mobileDetails.brand}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Model">
                  Model
                </FormLabel>
                <TextField
                  id="Model"
                  placeholder="Enter model"
                  name="model"
                  error={mobileDetails.model === "" && isValidation}
                  value={mobileDetails.model}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Cost received">
                  Cost received
                </FormLabel>
                <TextField
                  id="Cost received"
                  placeholder="Enter Cost received"
                  name="costReceived"
                  value={mobileDetails.costReceived}
                  onChange={(e) =>
                    +e.target.value > -1 ? handleInputChange(e) : ""
                  }
                  type="number"
                  inputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Maintenance period">
                  Maintenance period
                </FormLabel>
                <TextField
                  id="Maintenance period"
                  placeholder="Ex. 5 days"
                  name="maintenancePeriod"
                  error={mobileDetails.maintenancePeriod === "" && isValidation}
                  value={mobileDetails.maintenancePeriod}
                  onChange={(e) =>
                    +e.target.value > -1 ? handleInputChange(e) : ""
                  }
                  type="number"
                  inputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Status">
                  Status
                </FormLabel>
                <Select
                  labelId="Status"
                  placeholder="select your Status"
                  displayEmpty
                  name="status"
                  value={mobileDetails.status}
                  onChange={handleInputChange}
                >
                  {["Success", "Under Process", "Not in stock"].map((value) => (
                    <MenuItem value={value} key={value}>
                      <Box sx={{ position: "relative", top: -8 }}>
                        <Status type={value} />
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1.5}>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="problem">
                  problem
                </FormLabel>
                <TextField
                  id="problem"
                  placeholder="Enter problem"
                  error={mobileDetails.problem === "" && isValidation}
                  name="problem"
                  value={mobileDetails.problem}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Serial Number">
                  Serial Number
                </FormLabel>
                <TextField
                  id="Serial Number"
                  placeholder="Enter Serial Number"
                  name="serialNumber"
                  value={mobileDetails.serialNumber}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Remaining cost">
                  Remaining cost
                </FormLabel>
                <TextField
                  id="Remaining cost"
                  placeholder="Enter Remaining cost"
                  type="number"
                  error={mobileDetails.cost - mobileDetails.costReceived < 1 && isValidation}
                  value={mobileDetails.cost - mobileDetails.costReceived}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="date">
                  Date
                </FormLabel>

                <DatePicker
                  id="date"
                  selected={mobileDetails.date}
                  onChange={(date: any) => {
                    setMobileDetails({ ...mobileDetails, date });
                  }}
                  placeholderText="Enter date received"
                  customInput={
                    <TextField
                      error={mobileDetails.problem === "" && isValidation}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ color: "gray.font" }}
                          >
                            <EventIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  }
                />
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => navigate("/", { replace: true })}
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

export default AddMobileDetails;
