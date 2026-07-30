import {Container,Typography} from "@mui/material";
import ChatBox from "./components/ChatBox";


function App(){


return (

<Container maxWidth="md">

<Typography
variant="h4"
sx={{
textAlign:"center",
my:3
}}
>
🤖 Sasha AI
</Typography>


<ChatBox/>


</Container>

)

}


export default App;