import { IconButton, Stack } from "@mui/material";
import { Mode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DeleteModel from "./DeleteModel";

type Props = {
  id: any;
  detailsId: any;
};

const Action = ({ id  , detailsId}: Props) => {
  const navigate = useNavigate();
console.log();

  return (
    <Stack direction="row" alignItems="center">
      <IconButton
        sx={{ color: "#EDEDED" }}
        onClick={() => navigate(`updateOrderDetails/${id}`)}
      >
        <Mode />
      </IconButton>
      <DeleteModel id={id}  ordersDetailId={detailsId.row.ordersDetailId}/>
    </Stack>
  );
};

export default Action;
