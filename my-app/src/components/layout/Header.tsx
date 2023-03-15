import React, { useEffect, useState, MouseEvent } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  Button,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Badge,
  useMediaQuery,
} from "@mui/material";
import logoSvg from "../../assets/logo.svg";
import {
  Logout,
  Person,
  KeyboardArrowDown,
  Notifications,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks/useStore";
import { getUserInfo } from "../../store/loginSlice";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector(getUserInfo);

  const [dateState, setDateState] = useState(new Date()),
    [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null),
    open = Boolean(anchorEl);
  const matches = useMediaQuery("(max-width:600px)");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const interval = setInterval(() => setDateState(new Date()), 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        boxShadow: "0 -12px 12px #00000029",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 1.5 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={1.5} md={4}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              component={Link}
              to="/"
              sx={{
                textDecoration: "none !important",
                color: "gray.font",
              }}
            >
              <img src={logoSvg} alt="logo" width={"37px"} height={"40px"} />
              {!matches && (
                <Typography variant="h4" fontWeight={400}>
                  Mobile Service System
                </Typography>
              )}
            </Stack>
          </Grid>
          <Grid item xs={5.5} md={4}>
            <Stack alignItems="center" >
              <Typography variant={matches ? "body2" : "body1"} align="center">
                {dateState.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                {", "}
                {dateState.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={5} md={4}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={1}
            >
              <Box>
                <IconButton
                  sx={{
                    border: "1px solid",
                    borderColor: "gray.font",
                    p: matches ? "4px" : "7px",
                  }}
                >
                  <Badge
                    color="secondary"
                    variant="dot"
                    sx={{
                      ".MuiBadge-badge": {
                        top: 8,
                        right: 8,
                        border: "2px solid #383F45",
                        backgroundColor: "primary.main",
                      },
                    }}
                  >
                    <Notifications
                      sx={{
                        color: "gray.font",
                        fontSize: matches ? "28px" : "32px",
                      }}
                    />
                  </Badge>
                </IconButton>
              </Box>
              <Box>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  variant="text"
                  sx={{ p: matches ? 0 : 2 }}
                >
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    sx={{
                      color: "gray.font",
                      "& svg": {
                        ml: "0 !important",
                      },
                    }}
                    spacing={1}
                  >
                    <Avatar
                      alt="M"
                      sx={{
                        bgcolor: "gray.font",
                        width: matches ? 38 : 43,
                        height: matches ? 38 : 43,
                      }}
                      src={user?.avatar}
                    />
                    {!matches && (
                      <Typography variant="body1">{user.name}</Typography>
                    )}
                    <KeyboardArrowDown />
                  </Stack>
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    "& .MuiPaper-root": {
                      width: 250,
                      border: "1px solid",
                      borderColor: "secondary.main",
                      boxShadow: 0,
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ color: "body.main" }}
                      spacing={1}
                    >
                      <Person />
                      <Typography variant="body1">Profile</Typography>
                    </Stack>
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/login")}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ color: "error.main" }}
                      spacing={1}
                    >
                      <Logout />
                      <Typography variant="body1">Logout</Typography>
                    </Stack>
                  </MenuItem>
                </Menu>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
