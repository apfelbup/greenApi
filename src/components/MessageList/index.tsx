import styles from "./index.module.scss";

import { useAppSelector } from "../../hooks/reduxHooks";
import MessageItem from "../ui/MessageItem";


//отображение сообщений чата
export default function MessageList() {
    const messagesList = useAppSelector(state=> state.chats.messagesList);
    const currentChat = useAppSelector(state=> state.chats.currentChat);
    
    return (
<ul className={styles.list}>
    {messagesList?.filter(item=> item.chatId === currentChat)
    .map((item)=> <MessageItem key={item.idMessage} message={item.message} senderName={item.senderName}/> )}
</ul>
    )
}