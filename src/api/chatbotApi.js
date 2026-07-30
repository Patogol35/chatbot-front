import axios from "axios";


const API = axios.create({
    baseURL: "http://localhost:3001"
});


export const sendMessage = async(message)=>{

    const response = await API.post("/chat",{
        message,
        userId:"jorge"
    });

    return response.data.reply;
};