import { configureStore } from "@reduxjs/toolkit"
import { usersSlice } from "./modules/users/store/users"
import thunk from "redux-thunk"

export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type AppStore = typeof store

export type AppState = ReturnType<AppStore["getState"]>
