import axios from "axios";


const API = axios.create({
    baseURL: "https://chatbot-claude-du3t.onrender.com"
});


export const sendMessage = async(message)=>{

    const response = await API.post("/chat",{
        message,
        userId:"jorge"
    });

    return response.data.reply;
};
