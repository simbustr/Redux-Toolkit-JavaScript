import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    users:[]
}


const userSlice = createSlice({

    name:"simbu",
    initialState,
    reducers:{
        addUsers:(state,action) =>{
              state.users = [...state.users,action.payload];
        },
        deleteusers:(state,action) =>{
             state.users = state.users.filter((ele,index)=> index !== action.payload);
        }
    }


})

export const { addUsers, deleteusers } = userSlice.actions
export default userSlice.reducer