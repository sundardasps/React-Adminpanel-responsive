import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    userName:"",
    email:"",

}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.userName = action.payload.userName
            state.email = action.payload.email
        },
        logOutDetails:(state)=>{
            state.userName = ""
            state.email = ""
        }
    }
})


export const {setUserDetails,logOutDetails} = userSlice.actions
export default userSlice.reducer



