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
  Backdrop,
  CircularProgress,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Status from "../../components/Status";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate, useParams } from "react-router-dom";
import { useOrderOnloadQuery, useUpdateOrderMutation } from "../../api/orders";
import { addMessage } from "../../store/alertsSlice";
import { useAppDispatch } from "../../utils/hooks/useStore";
type Props = {};

const Index = (props: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const { data, isLoading, error }: any = useOrderOnloadQuery(id);
  const[updateOrder ,{ data:dataUpdate, isLoading:isLoadingUpdate, error:errorUpdate }]: any = useUpdateOrderMutation();
  const [updateValues, setUpdateValues] = useState<any>({
    id: '',
    brand: '',
    problem: '',
    date: null,
    cost: '',
    status: '',
    maintenancePeriod: '',
    engineerName: '',
    comments: '',
    spareParts: '',
    ordersDetailId: '',
  });
  useEffect(() => {
    if (error ||errorUpdate) {
      dispatch(
        addMessage({
          type: "error",
          message: `${JSON.stringify(error.data || errorUpdate.data)}`,
        })
      );
    }
  }, [error ,errorUpdate]);
  useEffect(() => {
    if (data) {
      setUpdateValues({
        id: data?.id,
        brand: data?.brand,
        problem: data?.problem,
        cost: data?.cost,
        status: data?.status,
        maintenancePeriod: data?.orders_detail.maintenancePeriod,
        engineerName: data?.orders_detail.engineerName,
        comments: data?.orders_detail.comments,
        spareParts: data?.orders_detail.spareParts,
        date:new Date(data?.date),
        ordersDetailId:data.ordersDetailId
      })
    }
  }, [data]);
  useEffect(() => {
    if (dataUpdate) {
      dispatch(
        addMessage({
          type: "success",
          message: 'update is successfully ',
        })
      );
    
    }
  }, [dataUpdate]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUpdateValues({
      ...updateValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateOrder(updateValues)
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Typography variant="h3" my={3}>
        Order details
      </Typography>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading ||isLoadingUpdate}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack spacing={1.5}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="date">
                Invoice ID
              </FormLabel>

              <TextField
                name="id"
                value={updateValues.id}
                sx={{
                  "&:before": {
                    content: "unset",
                  },
                  '& input[type="text"]:disabled': {
                    backgroundColor: "#AAAAAA",
                  },
                  "& input::placeholder": {
                    color: "#232A30 !important",
                    textFillColor: "#232A30",
                  },
                }}
                disabled
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1 }} htmlFor="date">
                Date
              </FormLabel>

              <DatePicker
                id="date"
                selected={updateValues.date}
                onChange={(date: any) => {
                  setUpdateValues({ ...updateValues, date });
                }}

                placeholderText="Enter date received"
                customInput={
                  <TextField
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

            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Cost">
                Cost
              </FormLabel>
              <TextField
                id="Cost"
                placeholder="Enter Cost"
                name="cost"
                value={updateValues.cost}
                onChange={handleInputChange}
              />
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={1.5}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Brand">
                Brand
              </FormLabel>

              <TextField
                name="brand"
                value={updateValues.brand}
                onChange={handleInputChange}
                sx={{
                  "&:before": {
                    content: "unset",
                  },
                  '& input[type="text"]:disabled': {
                    backgroundColor: "#AAAAAA",
                  },
                  "& input::placeholder": {
                    color: "#232A30 !important",
                    textFillColor: "#232A30",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1 }} htmlFor="Engineer name">
                Engineer name
              </FormLabel>
              <TextField
                id="Engineer name"
                placeholder="Enter Engineer name"
                name="engineerName"
                value={updateValues.engineerName}
                onChange={handleInputChange}
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
                value={updateValues.maintenancePeriod}
                onChange={handleInputChange}
              />
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack
            spacing={1.5}
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="problem">
                problem
              </FormLabel>
              <TextField
                name="problem"
                value={updateValues.problem}
                onChange={handleInputChange}
                sx={{
                  "&:before": {
                    content: "unset",
                  },
                  '& input[type="text"]:disabled': {
                    backgroundColor: "#AAAAAA",
                  },
                  "& input::placeholder": {
                    color: "#232A30 !important",
                    textFillColor: "#232A30",
                  },
                }}
              />{" "}
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
                value={updateValues.status}
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
        <Grid item container xs={12} spacing={3}>
          <Grid item xs={12} md={7}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Comments">
                Comments
              </FormLabel>
              <TextField
                id="Comments"
                placeholder="add your comment"
                name="comments"
                value={updateValues.comments}
                onChange={handleInputChange}

                multiline
                rows={3}
                maxRows={5}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="spareParts">
                Spare Parts
              </FormLabel>
              <TextField
                id="spareParts"
                name="spareParts"
                value={updateValues.spareParts}
                onChange={handleInputChange}

                placeholder="add your comment"
                multiline
                rows={3}
                maxRows={5}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" mb={2} my={4}>
        <Grid item xs={12} sm={2} sx={{ mb: { xs: 3, sm: "unset" } }}>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" type="submit" fullWidth>
            {" "}
            Update
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
