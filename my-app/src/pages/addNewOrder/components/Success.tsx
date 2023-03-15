import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CheckRounded from "@mui/icons-material/CheckRounded";
import QRCode from "qrcode.react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAddOrderQuery } from "../../../api/orders";
import { useEffect, useState, useRef } from "react";
import { addMessage } from "../../../store/alertsSlice";
import { useAppDispatch } from "../../../utils/hooks/useStore";
import ReactToPrint from "react-to-print";
import { OrderDetails } from "../../../api/types";

type Props = {
  order: OrderDetails;
};

const Success = ({ order }: Props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [currentUrl, setCurrentUrl] = useState("");
  const dispatch = useAppDispatch();
  const matchesMd = useMediaQuery("(max-width:900px)");
  const matchesSm = useMediaQuery("(max-width:600px)");
  const componentRef = useRef(null);

  const { data, isLoading, error }: any = useAddOrderQuery(order);

  useEffect(() => {
    if (error) {
      dispatch(
        addMessage({
          type: "error",
          message: `${JSON.stringify(error.data)}`,
        })
      );
    }
  }, [error]);
  useEffect(() => {
    if (data) {
      dispatch(
        addMessage({
          type: "success",
          message: `The order has been successfully added`,
        })
      );

      setCurrentUrl(window.location.host);
    }
  }, [data]);

  const QRCodeComponents = (
    <Stack
      direction="row"
      alignItems="flex-end"
      sx={{ width: "100%", mt: matchesSm ? 3 : 0 }}
      justifyContent={{  sm: "end" }}
    >
      <Box
        sx={{
          border: "6px solid #fff",
          width: matchesMd ? 158 : 179,
          height: matchesMd ? 158 : 179,
        }}
      >
        <QRCode
          value={`${currentUrl}/getOrder/${data?.id}`}
          renderAs="svg"
          width={"100%"}
          height={"100%"}
        />
      </Box>
    </Stack>
  );
  return (
    <div>
      {data ? (
        <>
          <Box
            sx={{
              border: matchesSm ? "unset" : "1px solid #fff",
              borderRadius: 5,
              py: matchesSm ? 2 : 4,
              px: matchesSm ? 0 : 3,
            }}
            ref={componentRef}
            className="print-source"
          >
            <Stack direction="row" alignItems="center" spacing={2} 
                className="print-remove"
            
            >
              <Stack
                direction="column"
                alignItems="center"
                spacing={0}
                p={0.7}
                justifyContent="center"
                sx={{ backgroundColor: "primary.main", borderRadius: "50%" }}

              >
                <CheckRounded fontSize="medium" />
              </Stack>
              <Typography
                variant={matchesMd ? "h5" : "h2"}
              >
                Order Added Successfully
              </Typography>
            </Stack>
            <Grid container mt={3}>
              <Grid item xs={12} sm={6} md={4} sx={{ order: { xs: 1, md: 1 } }}>
                <Stack spacing={3}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography
                      variant={matchesMd ? "h6" : "h4"}
                      className="print-source"
                    >
                      Brand:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.brand}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      problem:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.problem}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Cost:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.cost} EGP
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Date received:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {new Date(data.date).toJSON().split("T")[0]}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Cost:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.costReceived} EGP
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Remaining cost:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.remainingCost} EGP
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={5}
                sx={{ mt: { xs: 3, md: 0 }, order: { xs: 3, md: 2 } }}
              >
                <Stack spacing={3}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Maintenance period:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.maintenancePeriod} days
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Serial number:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.serialNumber}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Comments:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.comments}
                    </Typography>
                  </Stack>
                </Stack>
                {matchesSm && QRCodeComponents}
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                order={2}
                sx={{ order: { xs: 2, md: 3 } }}
              >
                <Stack spacing={3}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%", mt: matchesMd ? 3 : 0 }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Customer name:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.customer}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: "100%" }}
                    spacing={1}
                  >
                    <Typography variant={matchesMd ? "h6" : "h4"}>
                      Phone Number:
                    </Typography>
                    <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                      {data.phone}
                    </Typography>
                  </Stack>
                  {!matchesSm && QRCodeComponents}
                </Stack>
              </Grid>
            </Grid>
          </Box>
          <Grid
            container
            justifyContent="space-between"
            my={2}
            spacing={matchesMd ? 3 : 0}
          >
            <Grid item xs={6} sm={2}>
              <Button
                variant="outlined"
                color="inherit"
                fullWidth
                onClick={() => navigate("/")}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={6} sm={2}>
              <ReactToPrint
                trigger={() => (
                  <Button variant="contained" fullWidth>
                    Print
                  </Button>
                )}
                content={() => componentRef.current}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Success;
