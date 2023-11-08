import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { url } from './url'
import axios from 'axios';
export default function FormCard({ id, name, number, descrp,handleClick }) {
  


    return (
        <div className="flex flex-row justify-between even:bg-black even:text-white odd:bg-[#e2ff85] odd:text-black">
            <div className="flex-1 bg-white flex items-center">
            <ReceiptLongOutlinedIcon sx={{ fontSize: '120px', fill:'#000000' }} />
            </div>
            <div className="flex flex-col items-center  min-w-[60%]">
                <div className="bg-white text-center w-full border-black border-2 text-black">{name}</div>
                <div className="bg-white text-center w-full border-black border-x-2 border-b-2 text-black">{number}</div>
                <div className="bg-transparent w-full min-h-[10vh]">{descrp}</div>
            </div>
            <div className="flex-1 bg-white flex items-end">
                    <DeleteIcon onClick={() =>handleClick(id)} sx={{fill:"#000000", fontSize: "45px",cursor:"pointer"}}/>
            </div>
        </div>
    )
}