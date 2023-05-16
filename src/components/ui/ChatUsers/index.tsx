import styles from "./index.module.scss";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setCurrentChat } from "../../../redux/slices/chatsSlice";



export default function ChatUsers(phone:any) {
    const dispatch = useAppDispatch();
    const currentChat = useAppSelector(state=> state.chats.currentChat);

    //выбор текущего чата
    const currentChatHandler = () => {
        dispatch(setCurrentChat(phone.phone))
    }

    return (
        <div style={currentChat === phone.phone ? {backgroundColor:"#2a3942"} : {}} onClick={currentChatHandler} className={styles.chatsPanel}>
            <p>{phone.phone}</p>
        </div>
    )

}