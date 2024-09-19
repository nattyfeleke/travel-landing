import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FlightState } from "../../types/state/state.type";
import { FlightQuery } from "../../types/query.type";
import flightsData from '../../data/flights.json'
import { IFlight } from "../../types/model/flight.model";

const initialState: FlightState = {
    flights:[],
    flight:null,
  status: 'idle',
  task:'',
  total: 1,
  page: 1,
  limit:10,
};



 export const fetchFlights = createAsyncThunk(
   "flight/fetchFlights",
   async ({ page = 1, limit = 10 ,search}: FlightQuery,thunkAPI) => {
     try {
        const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
const flights = flightsData as IFlight[];
let filteredFlights = flights.slice(startIndex, endIndex);
        if(search) filteredFlights = flights.filter(flight=>flight.destination.toLocaleLowerCase().includes(search))
       return {
         flights: filteredFlights,
         total: flights.length,
         page,
         limit
       };
     } catch (error: any) {
        
        console.error(error)
        return thunkAPI.rejectWithValue(error)
     }
   }
 );


export const FlightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchFlights.pending, (state) => {
        state.status = 'loading'
        state.task='fetch-flights'
      })
    .addCase(fetchFlights.fulfilled, (state, action) => {
      state.flights = action.payload.flights;
      state.total = action.payload.total;
      state.limit = action.payload.limit;
      state.page = action.payload.page;
      state.status = 'idle'
      state.task=''
    }).addCase(fetchFlights.rejected, (state) => {
      state.status = 'failed';
    })
    
       
      
  },
});

export default FlightSlice.reducer;
