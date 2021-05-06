import axios from "axios"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../users.types"

export interface UsersState {
  items: User[]
}

export const initialState: UsersState = {
  items: [],
}

export const fetchAllUsers = createAsyncThunk("users/fetchAll", async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
  return data
})

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllUsers.fulfilled,
      (state, { payload }: PayloadAction<User[]>) => {
        state.items = payload
      }
    )
  },
})
