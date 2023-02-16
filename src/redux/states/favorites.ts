import { Person,LocalStorageTypes} from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils";

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: "people",
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, state);
      return action.payload;
    }
  },
});
