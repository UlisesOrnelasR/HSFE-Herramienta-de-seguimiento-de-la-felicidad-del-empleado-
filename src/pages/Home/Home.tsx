import { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data";
import { Person } from "@/models/people";

export interface HomeInterface {}

export const Home: React.FC<HomeInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSizes = 5;

  const columns = [
    {
      field: "actions",
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>{}</>,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <>
      <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSizes}
        rowsPerPageOptions={[pageSizes]}
        rows={People}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </>
  );
};
