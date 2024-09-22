import { IAccount } from "../model/account.mode";
import { IDestination } from "../model/destination.model";
import { IFlight } from "../model/flight.model";
import { IHotel } from "../model/hotel.model";
import { IProduct } from "../model/product.model";

export interface AuthState {
  token: string | null;
  user: IAccount | null;
  status: 'idle' | 'loading' | 'failed';
  task:string
  isAuthenticated: boolean
//   dashboard:Dashboard|null
  
}

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

  export interface TourState {
    destinations:IDestination[]
    products:IProduct[]
    status: 'idle' | 'loading' | 'failed';
    task:''|'fetch-destinationss'|'fetch-destinations'|'create-destinations'|'edit-destinations'
    total: number
    page: number
    limit: number
    
  }
