import {  TextField } from "@mui/material";
import { telegramSVG,chainCSG,discordSVG,instaSVG } from "./logoSVG";


export default function NetworkEditor({name,hrefURL,id,setState}){


    let content;

    switch (name) {
        case 'telegram':
            content = telegramSVG;
            break;
        case 'discord':
            content = discordSVG;
            break;
        case 'instagram':
            content = instaSVG;
            break;
        default :
            content = chainCSG;
            break;
    }
    

    const handleChange = ( e) => {
        const newLink = e.target.value;
       
        setState((prevItems) => {
          return prevItems.map((item) => {
            if (item.id === id) {
            
              return { ...item, link: newLink };
            }
            return item; 
          });
        });
      };
 
    return (
    
          <div className="flex relative flex-row items-center gap-[20%] shrink-0">
            {content}
            <TextField sx={{width: '20vw'}} onChange={handleChange} label='Link' value={hrefURL} />
           
        </div>
     
    )
}
