import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { FlightSlice } from "./features/flight.slice";
import { AuthSlice } from "./features/auth.slice";
import { PackageSlice } from "./features/package.slice";
import { HotelSlice } from "./features/hotel.slice";
export const store = configureStore({
  reducer: {
    flight: FlightSlice.reducer,
    hotel:HotelSlice.reducer,
    auth:AuthSlice.reducer,
    package:PackageSlice.reducer
    
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


