import { IFlight } from "../model/flight.model";
import { IHotel } from "../model/hotel.model";

export interface FlightState {
    flights:IFlight[]
    flight: IFlight| null;
    status: 'idle' | 'loading' | 'failed';
    task:''|'fetch-flights'|'fetch-flight'|'create-flight'|'edit-flight'
    total: number
    page: number
    limit: number
    
  }


  export interface HotelState {
    hotels:IHotel[]
    hotel: IHotel| null;
    status: 'idle' | 'loading' | 'failed';
    task:''|'fetch-hotels'|'fetch-hotel'|'create-hotel'|'edit-hotel'
    total: number
    page: number
    limit: number
    
  }

