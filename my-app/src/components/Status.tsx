import { Chip } from "@mui/material";
import React from "react";

type Props = {
  type: string;
};

const Status = ({ type }: Props) => {
  return (
    <Chip
      label={type}
      sx={{
        color:
          type === "Success"
            ? "status.success"
            : type === "Under Process"
            ? "status.underProcess"
            : "status.stock",
        backgroundColor:
          type === "Success"
            ? "rgba(0, 227, 0, 0.4)"
            : type === "Under Process"
            ? "rgba(245, 253, 10, 0.4)"
            : "rgba(255, 6, 6,0.4)",
      }}
    />
  );
};

export default Status;
