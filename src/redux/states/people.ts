import { Person,LocalStorageTypes} from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage("people", state);
      return action.payload;
    }
  },
});
