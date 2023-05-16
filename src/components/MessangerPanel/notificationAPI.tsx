
//проверка новых уведомлений
export const updateNotification = async (idInstance:string, apiTokenInstance:string) => {

    try{
        console.log('start')
        const res = await fetch(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
        .then(res=> res.json());  
        return res;
    } catch(err){
        return;
    }
    }

//удаление уведомления
export const deleteNotification = (idInstance:string, apiTokenInstance:string, res:any) => {
        try{
            fetch(`https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${res.receiptId}`,{
                method: 'DELETE'
            }).then(res=> res.json());
        } catch(err){
            console.log(err);
        }

    } 