import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Button,
  Typography,
  FormLabel,
  Checkbox,
  FormControlLabel,
  Backdrop,
  CircularProgress,
} from "@mui/material";

import { loginBg, loginBgIcon } from "./style";
import logoSvg from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../utils/hooks/useStore";
import { addMessage } from "../../store/alertsSlice";
import { useLoginMutation } from "../../api/login";
import { setUser } from "../../store/loginSlice";
import { useCookies } from "react-cookie";
type Props = {};

const Index = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, { data, isLoading, error, isError, isSuccess }]: any =
    useLoginMutation();
  const [cookies, setCookie] = useCookies(["token"]);

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    username: false,
    password: false,
  });
  useEffect(() => {
    if (isError && error) {
      dispatch(
        addMessage({ type: "error", message: `${JSON.stringify(error.data)}` })
      );
    }
  }, [error]);
  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      setCookie("token", data.accessToken, {
        maxAge: 86400,
      });
      navigate("/", { replace: true });
    }
  }, [data]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formValue.password.length < 30 && formValue.username.length < 60) {
      if (formValue.password !== "" && formValue.username !== "") {
        login(formValue);
      } else {
        dispatch(
          addMessage({ type: "error", message: "this input field is required" })
        );
      }
    } else {
      dispatch(
        addMessage({ type: "error", message: "you have skipped max length" })
      );
    }
  };
  return (
    <Box sx={loginBgIcon}>
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Grid
          container
          alignItems="center"
          sx={{ height: "100%", justifyContent: { xs: "center", lg: "start" } }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ position: "relative" }}>
              <Box sx={loginBg}>
                <img src={logoSvg} alt="logo" width={"58%"} height={"70%"} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  sx={{ height: "100%", p: 3, pb: 8 }}
                  component="form"
                  onSubmit={handleSubmit}
                >
                  <Box sx={{ maxHeight: "50px", maxWidth: "40px" }}>
                    <img
                      src={logoSvg}
                      alt="logo"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h1">Login to your account</Typography>
                    <Typography variant="body1">
                      To signIn please enter your name and password
                    </Typography>
                  </Box>
                  <Stack spacing={3}>
                    <Stack spacing={0.5}>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <TextField
                        id="username"
                        type="text"
                        placeholder="Enter your user name"
                        value={formValue.username}
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            username: e.target.value,
                          })
                        }
                        error={formError.username}
                      />
                    </Stack>
                    <Stack direction={"column"} spacing={0.5}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <TextField
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formValue.password}
                        onChange={(e) =>
                          setFormValue({
                            ...formValue,
                            password: e.target.value,
                          })
                        }
                        error={formError.password}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            sx={{ p: 0, color: "#EDEDED" }}
                            size="small"
                          />
                        }
                        sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                        label="Remember me"
                      />
                    </Stack>
                  </Stack>
                  <Button type="submit" disabled={isLoading}>
                    Login
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Backdrop sx={{ color: "#fff", zIndex: 1000 }} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </Box>
  );
};

export default Index;
