import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios,{isAxiosError} from "axios";
import { AuthState } from "../../types/state/state.type";
import setAuthToken from "../../utils/set-auth-token.util";
import { toast } from "sonner";

const apiUrl = process.env.BACKEND_BASE_URL
console.log(`apiUrl is ${apiUrl}`)



const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  status: 'idle',
  task:'',
  user: null,
//   dashboard:null
};

export const fetchUser = createAsyncThunk(
  "auth/fetch",
  async (usr, thunkAPI) => {
    try {
     console.log(usr)

      setAuthToken(localStorage.token);

      const response = await axios.get(`${apiUrl}/auth/profile`);
      const data = response.data.data
      return data;
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



type LoginValues = {
  email: string
  password: string
}
export const login = createAsyncThunk(
  "auth/login",
  async (formData: LoginValues, thunkAPI) => {
    const { email, password } = formData
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const body = JSON.stringify({
      email, password
    })
    try {
      const res = await axios.post(
        `${apiUrl}/main/v1/account/login`,
        body,
        config
      )

      return res.data.data
    } catch (error) {
         let errors: any = []
      if (isAxiosError(error)) {
      const  message = error.response?.data.error
        toast.error(message)
      } else {
        errors = error && error.toString()
      }
      console.error(error)
      return thunkAPI.rejectWithValue(errors)
    }
  }
)

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.status = 'idle'
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.fulfilled, (state, action) => {
      console.log('action.payload');
      console.log(action.payload);
      
      state.user = action.payload.user;

      state.isAuthenticated = true;
      state.status = 'idle'
    }).addCase(fetchUser.pending, (state) => {
      state.status = 'loading'
    }).addCase(fetchUser.rejected, (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.status = 'failed';
      state.isAuthenticated = false;
      state.user = null
    })
    .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.token);
        setAuthToken(action.payload.token)
        state.token = action.payload.token
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.status = 'idle'
      }).addCase(login.pending, (state) => {
        state.status = 'loading'
      }).addCase(login.rejected, (state) => {

        state.status = 'failed';
        state.isAuthenticated = false;
      })    
      
  },
});

export default AuthSlice.reducer;
export const { logout } = AuthSlice.actions;
