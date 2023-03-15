import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Status from "../../../components/Status";
import Action from "./Action";
import { OrderResponse } from "../../../api/types";
import CustomNoRowsOverlay from "./NoDataInTable";

type Props = {
  isLoading: boolean;
  data: OrderResponse[];
};

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Invoice",
    width: 100,
    sortable: false,
    editable: false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    filterable: false,
    sortable: false,
    editable: false,
  },
  {
    field: "problem",
    headerName: "problem",
    width: 190,
    sortable: false,
    editable: false,
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 190,
    editable: false,
    sortable: false,
  },
  {
    field: "cost",
    headerName: "Cost",
    sortable: false,
    editable: false,
    width: 80,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    editable: false,
    width: 180,
    renderCell: (params: GridRenderCellParams<Date>) => (
      <div>
        <Status type={`${params.value}`} />
      </div>
    ),
  },
  {
    field: "customer",
    headerName: "Customer",
    sortable: false,
    editable: false,
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone number",
    sortable: false,
    editable: false,
    width: 150,
  },
  {
    field: "paid",
    headerName: "Paid?",
    sortable: false,
    editable: false,
    width: 70,
    renderCell: (params: GridRenderCellParams<boolean>) => (
      <div>{params.value === true ? "Paid" : "Unpaid"}</div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions?",
    sortable: false,
    editable: false,
    type: "actions",
    width: 100,
    renderCell: (params: GridRenderCellParams<Date>  ) => <Action id={params.id} detailsId={params} />,
  
  },
];

const Table = ({ isLoading, data }: Props) => {

  return (
    <Box sx={{ height: 400, width: "100%", mt: 3 }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        disableColumnFilter
        disableColumnMenu
        loading={isLoading}
        disableColumnSelector
        hideFooter
        disableSelectionOnClick
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        sx={{
          border: "0",
          ".MuiDataGrid-cellCheckbox .MuiButtonBase-root , .MuiDataGrid-columnHeaderTitleContainerContent .MuiButtonBase-root":
            {
              color: "#FFFFFF !important",
              fontSize: "1.4rem",
            },
          ".MuiDataGrid-cell": {
            borderColor: "#383F45",
          },
          ".MuiDataGrid-columnSeparator ": {
            display: "none",
          },
          ".MuiDataGrid-footerContainer": {
            border: "unset",
          },
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: "#383F44",
            border: "unset",
          },
        }}
        experimentalFeatures={{ newEditingApi: false }}
      />
    </Box>
  );
};

export default Table;
