import { Box, Typography } from "@mui/material";


export default function Message({text, role}){


return (

<Box
sx={{
display:"flex",
justifyContent:
role==="user" ? "flex-end":"flex-start",
mb:2
}}
>

<Box
sx={{
background:
role==="user"
?"#1976d2"
:"#eeeeee",

color:
role==="user"
?"white"
:"black",

padding:"10px 15px",
borderRadius:"15px",
maxWidth:"70%"
}}
>

<Typography>
{text}
</Typography>


</Box>

</Box>


)

}