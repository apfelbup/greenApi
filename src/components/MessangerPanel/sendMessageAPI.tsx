

//отправка сообщения
const sendMessage = async (idInstance:string,apiTokenInstance:string, reqBody:object) => {

    try{
      const res = await fetch(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,{
      method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
        }).then(res=>res.json());
        return res.idMessage;
    } catch(err){
      console.log(err);
    }

  }

  export default sendMessage;

