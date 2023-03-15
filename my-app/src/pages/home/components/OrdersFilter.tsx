import Typography from "@mui/material/Typography";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Stack from "@mui/material/Stack/Stack";
import {
  Add,
  QrCodeScanner,
  Search,
  Tune,
  Handyman,
} from "@mui/icons-material";
import DatePicker from "react-datepicker";

import { useNavigate } from "react-router-dom";
import MobileFilter from "./MobileFilter";
import { useOrderMutation } from "../../../api/orders";
import { useAppDispatch } from "../../../utils/hooks/useStore";
import {  setOrder } from "../../../store/orderSlice";
import { addMessage } from "../../../store/alertsSlice";

type Props = {
  setLoading: Function;
  setPage: Function;
  page:number;

};

const OrdersFilter = ({ setLoading , page ,setPage}: Props) => {
  const [dateRange, setDateRange] = useState(["", ""]);
  const [values, setValues] = useState({
    invoice: "",
    customer: "",
    status: "All",
    problem: "",
    start: "",
    end: "",
  });
  const [startDate, endDate]: any = dateRange;
  const navigate = useNavigate();

  const matches = useMediaQuery("(max-width:600px)");
  const dispatch = useAppDispatch();
  const [order, { data, isLoading, error, isError, isSuccess }]: any =
    useOrderMutation();
  const [openMobileFilter, setOpenMobileFilter] = React.useState(false);

  const load = useMemo(() => setLoading(isLoading), [isLoading]);
  

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMobileFilter(newOpen);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    const timer = setTimeout(
      () =>
        order(
          `page=${page-1}&limit=6&customer=${values.customer}&invoice=${values.invoice}&problem=${
            values.problem
          }&status=${values.status === "All" ? "" : values.status}&start=${
            values.start
          }&end=${values.end}`
        ),
      500
    );
    return () => clearTimeout(timer);
  }, [values ,page]);

  useEffect(() => {
    setValues({
      ...values,
      start: startDate ? new Date(startDate).toJSON().split("T")[0] : "",
      end: endDate ? new Date(endDate).toJSON().split("T")[0] : "",
    });
  }, [startDate, endDate]);

  useEffect(() => {
    if (data) {
      dispatch(setOrder(data));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      dispatch(
        addMessage({ type: "error", message: `${JSON.stringify(error.data)}` })
      );
    }
  }, [error]);

  return (
    <div>
      <Typography mb={matches ? 2 : 0} variant={matches ? "h5" : "h2"}>
        Orders
      </Typography>

      <Grid
        container
        spacing={3}
        alignItems="flex-end"
        justifyContent={matches ? "flex-end" : "start"}
        p={0}
      >
        <Grid item sm={12} md={4}>
          <Stack direction="row" spacing={1.5} alignItems="baseline">
            <TextField
              placeholder="Search for name of customer"
              sx={{
                "&.MuiFormControl-root:before": {
                  content: "unset",
                },
              }}
              onChange={handleInputChange}
              value={values.customer}
              name="customer"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: "gray.font",
                      svg: {
                        fontSize: "22px",
                      },
                    }}
                  >
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Scan code"
              sx={{
                "&.MuiFormControl-root:before": {
                  content: "unset",
                },
              }}
              onChange={handleInputChange}
              value={values.invoice}
              name="invoice"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: "gray.font",
                      svg: {
                        fontSize: "22px",
                      },
                    }}
                  >
                    <QrCodeScanner />
                  </InputAdornment>
                ),
              }}
              fullWidth={false}
            />
          </Stack>
        </Grid>
        <Grid item xs={5} sm={8} md={5}>
          <Stack direction="row" spacing={2} alignItems="end">
            {!matches ? (
              <>
                <TextField
                  placeholder="Search problem"
                  sx={{
                    "&.MuiFormControl-root:before": {
                      content: "unset",
                    },
                  }}
                  onChange={handleInputChange}
                  value={values.problem}
                  name="problem"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{
                          color: "gray.font",
                          svg: {
                            fontSize: "22px",
                          },
                        }}
                      >
                        <Handyman />
                      </InputAdornment>
                    ),
                  }}
                />

                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1 }} htmlFor="Status">
                    Status
                  </FormLabel>
                  <Select
                    labelId="Status"
                    id="demo-simple-select"
                    onChange={handleInputChange}
                    value={values.status}
                    name="status"
                  >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value={"Under Process"}>Under Process</MenuItem>
                    <MenuItem value={"Success"}>Success</MenuItem>
                    <MenuItem value={"Not in stock"}>Not in stock</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1 }} htmlFor="date">
                    Date
                  </FormLabel>

                  <DatePicker
                    id="date"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Enter date range"
                    onChange={(update: any) => {
                      setDateRange(update);
                    }}
                    customInput={<TextField />}
                    dateFormat={`yyyy-MM-dd`}
                    isClearable={true}
                  />
                </FormControl>
              </>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                sx={{ width: "100%" }}
              >
                <Box sx={{ width: "43.45px", height: "44.68px", mr: 2 }}>
                  <Button
                    sx={{ fontWeight: 500, fontSize: "1rem", height: "100%" }}
                    onClick={toggleDrawer(true)}
                  >
                    <Tune sx={{ fontSize: "1.5rem" }} />
                  </Button>
                </Box>
              </Stack>
            )}
          </Stack>
        </Grid>
        <Grid item xs={7} sm={4} md={3}>
          <Stack justifyContent="flex-end">
            <Button
              sx={{ fontWeight: 400, fontSize: matches ? "0.9rem" : "1rem" }}
              onClick={() => navigate("/addNewOrder")}
            >
              <Add sx={{ fontSize: matches ? "1.3rem" : "1.5rem" }} />
              Add order
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {matches && (
        <MobileFilter
          openMobileFilter={openMobileFilter}
          toggleDrawer={toggleDrawer}
          handleInputChange={handleInputChange}
          values={values}
        />
      )}
    </div>
  );
};

export default OrdersFilter;
