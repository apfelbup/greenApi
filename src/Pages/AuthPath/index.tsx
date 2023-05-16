import React, { useState } from "react";
import styles from "./index.module.scss";

import { useNavigate } from "react-router";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setLogin } from "../../redux/slices/userAuthSlice";

import checkUserAPI from "./checkUserAPI";



export default function AuthPath() {

    const [idInstance, setIdInstance] = useState<string>('');
    const [apiTokenInstance, setApiTokenInstance] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    
    const handlerSubmit =  async (e:React.FormEvent)=>{
        e.preventDefault();
        //проверка авторизованности пользователя
        const res = await checkUserAPI(idInstance, apiTokenInstance);
        
        //перенаправить в чат в случае успешной проверки
        if(res) {
            dispatch(setLogin({idInstance,apiTokenInstance}));
            navigate("/Chat");
        } else {
            setIsError(true);
        }
        
    }
    return (
        <div className={styles.wrapper}>
        <div className={styles.innerBox}>
        <h3>Авторизация</h3>
        <p className={styles.authDescription}>Укажите idInstance и apiTokenInstance для входа</p>
    <form onSubmit={(e)=>{handlerSubmit(e)}}>
        <label htmlFor="id">
        <p>Введите idInstance:</p>  
        <input 
        required id="id" 
        onChange={(e)=> setIdInstance(e.target.value)} 
        value={idInstance} 
        type="text" 
        placeholder='idInstance' 
        />
        </label>
        

        <label htmlFor="token">
            <p>Введите apiTokenInstance:</p>
            <input 
            required id="token" 
            onChange={(e)=> setApiTokenInstance(e.target.value)} 
            value={apiTokenInstance} 
            type="text" 
            placeholder='apiTokenInstance' 
            /> 
        </label>
        
    {isError && <p className={styles.error}>Пользователь не найден</p>}
    <button>
        Войти
    </button>
    </form>
    </div>
        </div>
    )

}
