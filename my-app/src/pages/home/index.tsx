import React, { useState } from "react";
import OrdersFilter from "./components/OrdersFilter";
import { Box, Pagination, Stack } from "@mui/material";
import Table from "./components/Table";
import { useOrderMutation } from "../../api/orders";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { addMessage } from "../../store/alertsSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { getCount, getOrders, setOrder } from "../../store/orderSlice";

type Props = {};

const Index = (props: Props) => {
  const dispatch = useAppDispatch();
  const allOrders = useAppSelector(getOrders);
  const pageCount = useAppSelector(getCount);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);
  const [page, setPage] = useState(1);
  const [order, { data, isLoading, error, isError, isSuccess }]: any =
    useOrderMutation();
  const [loading, setLoading] = useState(false);
  const handleChange = (_: any, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (cookies.token) {
      order(`page=${page}&limit=6&`);
      if (isError) {
        dispatch(
          addMessage({
            type: "error",
            message: `${JSON.stringify(error.data)}`,
          })
        );
      }
    } else {
      navigate("/", { replace: true });
    }
  }, [cookies]);
  useEffect(() => {
    if (data) {
      dispatch(setOrder(data));
    }
  }, [data]);

  return (
    <Box sx={{ mt: 3 }}>
      <OrdersFilter setLoading={setLoading} page={page} setPage={setPage} />
      <Table isLoading={loading || isLoading} data={allOrders} />
      <Pagination
        count={Math.floor(pageCount / 6)}
        variant="text"
        page={page}
        onChange={handleChange}
        shape="rounded"
        color="primary"
      />
    </Box>
  );
};

export default Index;
