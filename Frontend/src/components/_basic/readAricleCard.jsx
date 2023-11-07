import { useNavigate } from "react-router"
import { Button } from "@mui/material";
export default function ReadArticleCard({name,value,id}){
const navigate = useNavigate();



    return(
      <div className="relative">
        <div className="w-[80%] border-2 border-black	rounded-[8px]">{name}</div>
        <div className="bg-[#d9d9d9] py-4 px-4 overflow-hidden h-[20vh]">{value}</div>
        <div className="bg-[#FFF] absolute right-[0%] bottom-[0%]">
        <Button onClick={()=>navigate(`/article/${id}`)} sx={{backgroundColor:"#FFFFFF", color:"#000000", "&:hover": { backgroundColor: '#FFF' } }} variant="contained">ЧИТАТИ</Button>
        </div>
    </div>
    )
}