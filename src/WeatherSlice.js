import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchweather=createAsyncThunk("weatherApi/featchWeather",async ()=>{
 const response= await  axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a664fa102919aecf43a6fda16d935a20",
  
    )
    console.log(response)

      // handle success
      const responsTemp=Math.round(response.data.main.temp - 272.15)
      const minTemp= Math.round(response.data.main.temp_min -272.15)
      const maxTemp= Math.round(response.data.main.temp_max -272.15)
      const icon=response.data.weather[0].icon
      const description=response.data.weather[0].description

      

      return {number:responsTemp,min:minTemp,max:maxTemp,icon:`https://openweathermap.org/img/wn/${icon}@2x.png` ,description:description }
})


export const WeatherSlice = createSlice({

name:"Slice",
initialState:{
    resulte:10,
    weather:{}
},

reducers:{

    changereqest:(state,action)=>{
      return  state.resulte="change"

    },
    },

    extraReducers(builder){
builder.addCase(fetchweather.pending,(state,action)=>{
    state.isloading=true
}).addCase(fetchweather.fulfilled,(state,action)=>{
    state.isloading=false;
    state.weather=action.payload
}).addCase(fetchweather.rejected,(state,action)=>{
    state.isloading=true
})
    },

});


export const {changereqest}=WeatherSlice.actions
export default WeatherSlice.reducer