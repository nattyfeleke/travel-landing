import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HotelState } from "../../types/state/state.type";
import { HotelQuery } from "../../types/query.type";
import hotelsData from '../../data/hotels.json'
import { IHotel } from "../../types/model/hotel.model";

const initialState: HotelState = {
    hotels:[],
    hotel:null,
  status: 'idle',
  task:'',
  total: 1,
  page: 1,
  limit:10,
};



 export const fetchHotels = createAsyncThunk(
   "hotel/fetchHotels",
   async ({ page = 1, limit = 10 ,search}: HotelQuery,thunkAPI) => {
     try {
        const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
const hotels = hotelsData as IHotel[];
let filteredHotels = hotels.slice(startIndex, endIndex);
        if(search) filteredHotels = hotels.filter(hotel=>hotel.name.toLocaleLowerCase().includes(search))
       return {
         hotels: filteredHotels,
         total: hotels.length,
         page,
         limit
       };
     } catch (error: any) {
        
        console.error(error)
        return thunkAPI.rejectWithValue(error)
     }
   }
 );


export const HotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchHotels.pending, (state) => {
        state.status = 'loading'
        state.task='fetch-hotels'
      })
    .addCase(fetchHotels.fulfilled, (state, action) => {
      state.hotels = action.payload.hotels;
      state.total = action.payload.total;
      state.limit = action.payload.limit;
      state.page = action.payload.page;
      state.status = 'idle'
      state.task=''
    }).addCase(fetchHotels.rejected, (state) => {
      state.status = 'failed';
    })
    
       
      
  },
});

export default HotelSlice.reducer;
