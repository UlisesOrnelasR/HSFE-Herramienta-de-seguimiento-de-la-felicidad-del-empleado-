import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { People } from "@/data";
import { Person } from "@/models/people";
import { Checkbox } from "@mui/material";
import { addFavorite, addPeople } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { PeopleTable } from "./components/PeopleTable";

export interface HomeInterface {}

export const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return (
    <>
      <PeopleTable />
    </>
  );
};
