import { PaginatedQuery } from "./shared/paginated-query.type";

export interface FlightQuery extends PaginatedQuery {
    search?: string;
 }

 export interface HotelQuery extends PaginatedQuery {
    search?: string;
 }