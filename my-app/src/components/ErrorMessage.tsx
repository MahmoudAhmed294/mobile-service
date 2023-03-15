import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";
import { deleteMessage, getMessage } from "../store/alertsSlice";
import { useAppSelector, useAppDispatch } from '../utils/hooks/useStore';

type Props = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: Props) => {

  const { message, type } = useAppSelector(getMessage);
  const dispatch = useAppDispatch();

  useEffect(() => {
 const show= setTimeout(() => {
    dispatch(deleteMessage())
    }, 4000);
    return()=>{
      clearTimeout(show)
    }
  }, [message])
  

  return (
    <>
      <Snackbar
        open={message && type ? true : false}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClick={()=>dispatch(deleteMessage())}
      >
        <Alert variant="filled" severity={type ==="error" ? "error" : "success"} sx={{ width: "100%" }}>
          {message} !
        </Alert>
      </Snackbar>
      {children}
    </>
  );
};

export default ErrorMessage;
