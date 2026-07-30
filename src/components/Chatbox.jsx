import {useState} from "react";
import {Box,TextField,Button,Paper} from "@mui/material";
import Message from "./Message";
import {sendMessage} from "../api/chatbotApi";


export default function ChatBox(){


const [messages,setMessages]=useState([
{
role:"assistant",
text:"Hola 👋 soy Sasha, ¿en qué puedo ayudarte?"
}
]);


const [input,setInput]=useState("");

const [loading,setLoading]=useState(false);



const handleSend=async()=>{

if(!input.trim()) return;


const userMessage={
role:"user",
text:input
};


setMessages(prev=>[
...prev,
userMessage
]);


setInput("");
setLoading(true);


try{

const reply=await sendMessage(input);


setMessages(prev=>[
...prev,
{
role:"assistant",
text:reply
}
]);


}catch(error){

setMessages(prev=>[
...prev,
{
role:"assistant",
text:"Error al conectar con el servidor"
}
]);

}


setLoading(false);


};



return (

<Paper
sx={{
padding:3,
height:"80vh",
display:"flex",
flexDirection:"column"
}}
>


<Box
sx={{
flex:1,
overflowY:"auto"
}}
>

{
messages.map((msg,index)=>(

<Message
key={index}
text={msg.text}
role={msg.role}
/>

))
}


{
loading &&
<Message
text="Escribiendo..."
role="assistant"
/>
}


</Box>



<Box
sx={{
display:"flex",
gap:1
}}
>


<TextField
fullWidth
value={input}
onChange={(e)=>setInput(e.target.value)}
onKeyDown={(e)=>{
if(e.key==="Enter")
handleSend()
}}
placeholder="Escribe un mensaje..."
/>


<Button
variant="contained"
onClick={handleSend}
>
Enviar
</Button>


</Box>



</Paper>

)

}