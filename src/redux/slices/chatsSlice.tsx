import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type messageData = {
    idMessage:string,
    chatId: string|undefined,
    message:string,
    senderName: string
};

interface IchatsState {
    chatList: Array<string>|[];
    messagesList:Array<messageData>|[];
    currentChat: undefined|string,
}

const initialState:IchatsState = {
    chatList: [],
    messagesList:[],
    currentChat: undefined,
}

const chatsSlice = createSlice({
    name:'chats',
    initialState,
    reducers:{
        addNewChat:(state,action: PayloadAction<string>)=>{
            if (!state.chatList.find((item)=> item === action.payload)){
                state.chatList = [...state.chatList, action.payload]
            };
        },
        setCurrentChat:(state,action: PayloadAction<string>)=>{
            state.currentChat = action.payload;
        },
        updateMessagesList:(state,action: PayloadAction<messageData>)=>{
            if(!state.messagesList.find(item=> item.idMessage === action.payload.idMessage)){
                state.messagesList = [...state.messagesList, action.payload];
            }

        }
    }
})

export const {addNewChat,setCurrentChat,updateMessagesList} = chatsSlice.actions;
export default chatsSlice.reducer;