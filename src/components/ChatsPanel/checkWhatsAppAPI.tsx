

//проверка наличия пользователя в whatsapp
const checkWhatsapp = async (id:string, token:string, phone:string) => {

    try{
        const res = await fetch(`https://api.green-api.com/waInstance${id}/CheckWhatsapp/${token}`,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({phoneNumber:phone})
        })
        .then(response => response.json());

        return (res.existsWhatsapp === true);
        
    }catch(err){
        console.log(err);
    }
}

export default checkWhatsapp;