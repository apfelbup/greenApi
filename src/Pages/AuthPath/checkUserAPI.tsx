
//проверка состояния аккаунта(авторизации)
const checkUserAPI = async (id:string, token:string) => {

    try{
        const res = await fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`)
        .then(response => response.json());

        return (res.stateInstance === 'authorized');
        
    }catch(err){
        console.log(err);
    }
}

export default checkUserAPI;

