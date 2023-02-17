import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { People } from "@/data";
import { addPeople } from "@/redux/states";
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
