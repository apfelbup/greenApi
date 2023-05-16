import React, { useState } from "react";
import styles from "./index.module.scss";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { addNewChat } from "../../redux/slices/chatsSlice";

import ChatList from "../ChatList";
import checkWhatsappAPI from "./checkWhatsAppAPI";




export default function ChatsPanel() {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);

    const {idInstance, apiTokenInstance} = useAppSelector(state=> state.userAuth);
    const dispatch = useAppDispatch();


    const createChatHandler = async (e:any) => {
        e.preventDefault();
        //Проверка наличия пользователя в Whatsapp
        const res = await checkWhatsappAPI(idInstance, apiTokenInstance, phoneNumber);

        if(res){
            //Создать новый чат
            dispatch(addNewChat(phoneNumber+'@c.us'))
            setPhoneNumber('');
            setIsError(false);
        } else {
            setIsError(true);
        }
    }

    return (
        <div className={styles.chatsPanel}>

            <div className={styles.createBlock}>
            <form onSubmit={(e)=>createChatHandler(e)} className={styles.createForm}>
            <input 
            onChange={(e)=>setPhoneNumber(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'))} 
            value={phoneNumber} 
            type="tel" 
            placeholder='7-999-999-99-99' 
            required/>
            <button>
            <svg width="50px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 14L9 17L18 6" stroke="#fff" strokeWidth="3"/>
            </svg>
            </button>
            </form>
            {isError ? <p className={styles.error}>Пользователь не найден</p> :<p>Введите номер для создания чата</p>}
            </div>
            <ChatList/>
        </div>
    )

}