import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data";

export interface HomeInterface {}

export const Home: React.FC<HomeInterface> = () => {
  const pageSizes = 5;
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.row.name}</>,
    },
  ];

  return (
    <div>
      <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSizes}
        rowsPerPageOptions={[pageSizes]}
        rows={People}
        columns={columns}
      />
    </div>
  );
};
