import * as React from "react";
import {
  IconButton,
  Stack,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Typography,
  Divider,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { Delete, Close } from "@mui/icons-material";
import { useDeleteOrderMutation  } from "../../../api/orders";
import { useAppDispatch } from "../../../utils/hooks/useStore";
import { addMessage } from "../../../store/alertsSlice";
import { deleteOrderFromState } from "../../../store/orderSlice";

export default function DeleteModel({ id ,ordersDetailId }: { id: number , ordersDetailId:number }) {
  const [open, setOpen] = React.useState(false);
  const matchesSm = useMediaQuery("(max-width:600px)");
  const [deleteOrder, { isLoading, isSuccess, data, isError }]: any =
    useDeleteOrderMutation();
  const dispatch = useAppDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    deleteOrder({id , ordersDetailId});
  };
  React.useEffect(() => {
    if (isError) {
      dispatch(
        addMessage({
          type: "error",
          message: `sorry some things happened :(`,
        })
      );
    }
  }, [isError]);

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(
        addMessage({
          type: "success",
          message: `this order is deleted successfully`,
        })
      );
      dispatch(deleteOrderFromState(id));
      setOpen(false);
    }
  }, [isSuccess]);

  return (
    <>
      <IconButton color="error" onClick={handleClickOpen}>
        <Delete />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"lg"}
      >
        <DialogTitle id="alert-dialog-title">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ color: "#333" }} gutterBottom>
              Delete order
            </Typography>
            <IconButton sx={{ color: "#333" }} onClick={handleClose}>
              <Close />
            </IconButton>
          </Stack>
          <Divider />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#333" }}
          >
            <Typography
              variant={matchesSm ? "h5" : "h1"}
              align="center"
              mb={4}
              mt={1}
            >
              Are you sure you want to delete {!matchesSm && <br />} this order?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            p: 2,
            justifyContent: matchesSm ? "space-between" : "flex-end",
          }}
        >
          <Button
            onClick={handleClose}
            size="small"
            sx={{ backgroundColor: "#C6C6C6", mr: 2 }}
          >
            {!matchesSm && " No,"} cancel
          </Button>
          <Button
            onClick={handleDelete}
            disabled={isLoading}
            size="small"
            color="error"
          >
            {isLoading && (
              <CircularProgress
                sx={{
                  height: "24px",
                  width: "24px",
                  mr: 2,
                }}
              />
            )}
            {!matchesSm && " Yes,"} delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
