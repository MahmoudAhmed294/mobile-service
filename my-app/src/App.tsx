import { Container } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout";
import Login from "./pages/login";
import Home from "./pages/home";
import AddNewOrder from "./pages/addNewOrder";
import "react-datepicker/dist/react-datepicker.css";
import UpdateOrderDetails from "./pages/updateOrderDetails";
import { useCookies } from "react-cookie";
import { useCheckTokenQuery } from "./api/login";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./utils/hooks/useStore";
import { getUserInfo, setUser } from "./store/loginSlice";

function App() {
  const dispatch = useAppDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const { data, isLoading , isError } = useCheckTokenQuery(cookies.token);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else if(isError) {
      removeCookie("token");
    }
  }, [data]);

  return (
    <Router>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route element={<Layout />}>
          <Route
            path="/"
            element={cookies.token ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/addNewOrder" element={<AddNewOrder />} />
          <Route
            path="/updateOrderDetails/:id"
            element={<UpdateOrderDetails />}
          />
          {/* <Route path="/order/:id" element={<Success />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
