import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router";

export default function ArticleCard({ id, name, value, setState,deleteItem }) {

const navigate = useNavigate();
   
    
    return (
        <div className="relative">
            <div className="w-[80%] border-2 border-black	rounded-[8px]">{name}</div>
            <div className="bg-[#d9d9d9] py-4 px-4 overflow-hidden h-[20vh]">{value}</div>
            <div className="bg-[#FFF] absolute right-[0%] bottom-[0%]">
                <IconButton onClick={()=>deleteItem(id)}>
                    <DeleteIcon />
                </IconButton>
                <Button onClick={()=>navigate(`/admin/editnews/${id}`,{state: {name,value,id}})} sx={{backgroundColor:"#FFFFFF", color:"#000000", "&:hover": { backgroundColor: '#FFF' } }} variant="contained">РЕДАГУВАТИ</Button>
            </div>


        </div>

    )
}