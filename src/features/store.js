import { configureStore } from "@reduxjs/toolkit"

import countriesSlice from "./countries/countriesSlice"
import searchSlice from "./search/searchSlice";


export const store = configureStore({
    reducer: {
       countries: countriesSlice, 
       search: searchSlice
    }
   
})
