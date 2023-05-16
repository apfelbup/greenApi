import styles from "./index.module.scss";

import ChatsPanel from "../../components/ChatsPanel";
import MessangerPanel from "../../components/MessangerPanel";



const Chat = () => {

    return(
        <div className={styles.chatContainer}>
        <ChatsPanel/>
        <MessangerPanel/>
        </div>
    )
}

export default Chat;