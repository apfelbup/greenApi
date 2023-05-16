import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IuserAuthState {
    idInstance:string,
    apiTokenInstance:string
}

const initialState:IuserAuthState = {
    idInstance:'',
    apiTokenInstance:''
}

const userAuthSlice = createSlice({
    name:'userAuth',
    initialState,
    reducers:{
        setLogin:(state,action: PayloadAction<IuserAuthState>)=>{
            state.idInstance = action.payload.idInstance;
            state.apiTokenInstance = action.payload.apiTokenInstance;
        },
    }
})

export const {setLogin} = userAuthSlice.actions;
export default userAuthSlice.reducer;