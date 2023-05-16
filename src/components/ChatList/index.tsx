import { useAppSelector } from "../../hooks/reduxHooks";
import ChatUsers from "../ui/ChatUsers";


export default function ChatList() {
    const {chatList} = useAppSelector(state=> state.chats);

    return (
        <div>
            {chatList?.map(item=> <ChatUsers key={item} phone={item}/>)}
        </div>
    )

}