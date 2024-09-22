import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios,{isAxiosError} from "axios";
import { TourState } from "../../types/state/state.type";

const apiUrl = process.env.BACKEND_BASE_URL
console.log(`apiUrl is ${apiUrl}`)



const initialState: TourState = {
  destinations:[],
  products:[],
  status: 'idle',
  task:'',
  total: 0,
  limit:10,
  page:1
};
let abortController: AbortController | null = null;
export const fetchPackages = createAsyncThunk(
  "package/fetchPackages",
  async (searchQuery:string, thunkAPI) => {
    try {
    
        if (abortController) {
            abortController.abort(); // Cancel previous request
          }
          abortController = new AbortController();
      const response = await axios.get(`${apiUrl}/product/v1/package/auto-complete`,{
        params:{
            q:searchQuery
        }
      });
      return {destinations:response.data.data.destinations,
    products:response.data.data.products
      };
    } catch (error) {
      let errors: any = []
      if (isAxiosError(error)) {
        errors = error.response?.data.errors

      } else {
        errors = error && error.toString()
      }
      console.error(error)
      return thunkAPI.rejectWithValue(errors)
    }

  },
);




export const PackageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPackages.fulfilled, (state, action) => {
      state.destinations= action.payload.destinations
      state.products= action.payload.products
      state.status = 'idle'
      state.task=''
    }).addCase(fetchPackages.pending, (state) => {
      state.status = 'loading'
      state.task='fetch-destinations'
    }).addCase(fetchPackages.rejected, (state) => {
      
      state.status = 'failed';
    })
      
      
  },
});

export default PackageSlice.reducer;
export const {  } = PackageSlice.actions;
