import styles from "./index.module.scss";
import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateMessagesList } from "../../redux/slices/chatsSlice";

import sendMessageAPI from "./sendMessageAPI";
import { deleteNotification, updateNotification } from "./notificationAPI";

import MessageList from "../MessageList";




export default function MessangerPanel() {
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState<boolean>(false);

    const {idInstance, apiTokenInstance} = useAppSelector(state=> state.userAuth);
    const {currentChat} = useAppSelector(state=> state.chats);
    const dispatch = useAppDispatch();


    //проверка на наличие входящих уведомлений и удаление при обработке.
    useEffect(() => {
      const checkingNewNotification = setInterval(async ()=>{

        //проверка
        const res = await updateNotification(idInstance, apiTokenInstance);

        //обработка
        res?.body?.messageData?.textMessageData?.textMessage && dispatch(updateMessagesList({
          idMessage: res.body.idMessage, 
          chatId:res.body.senderData.chatId, 
          message: res.body.messageData.textMessageData.textMessage,
          senderName:res.body.senderData.senderName
        }));
        

        //удаление
        res && deleteNotification(idInstance, apiTokenInstance, res);

      },5000);

      return () => clearInterval(checkingNewNotification);
    }, [])
    

    //отправление сообщения
    const sendMessageHandler = async () => {

        const reqBody = {
        chatId:currentChat,
        message:message
      }
  
      const idMessage = await sendMessageAPI(idInstance, apiTokenInstance, reqBody);

      if(idMessage) {
        const userMessage = {
          idMessage,
          chatId:currentChat,
          message,
          senderName:'Вы'
        }
        dispatch(updateMessagesList(userMessage));
        setIsError(false);
        setMessage('');
      } else{
        setIsError(true);
      }
    }

  
    return (
        <div className={styles.wrapper }>
          {currentChat ?
          <div className={styles.messangerBlock}>
            <div className={styles.header}>
              <p>Собеседник: {currentChat}</p>
            </div>
            <div className={styles.messagesArea}>
              <MessageList/>
            </div>
            {isError? <p style={{color:"red"}}>Ошибка отправки</p> : null}
            <div className={styles.sendArea}>
              
              <textarea value={message} 
              onChange={(e)=>setMessage(e.target.value)} 
              placeholder="Введите сообщение...">
              </textarea>

              <button onClick={sendMessageHandler}><svg width="70px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12L4 4L6 12M20 12L4 20L6 12M20 12H6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </button>
            </div>

          </div>
          : <p className={styles.undefinedMess}>Откройте новый чат</p>
          }

        </div>
    )

}