import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from '../data/data.json'

export const getCountries = createAsyncThunk(
    "countries/getCountries", 
    async (_, thunkAPI) => {
      try{
            return data;
      } catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err)
      }
    } 
)
const countriesSlice = createSlice({
    name: 'countries', 
    initialState: {
        list: [], 
        isLoading: false
    }, 
    extraReducers: (builder) => {
        builder.addCase(getCountries.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCountries.fulfilled, (state, {payload}) => {
            state.list = payload;
            state.isLoading = false;
        })
        builder.addCase(getCountries.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export default countriesSlice.reducer;



