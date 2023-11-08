import { Button, TextField } from "@mui/material";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../_basic/url";
export default function AdminPage({ state, setState }) {
    const [inputValue,setInputValue] = useState({
        password : ''
    })
    const [error, setError] = useState(false);
    let newUrl = url+'/api/Authorization';
    const navigate = useNavigate();

    const handleFetch = () => {
        axios.post(newUrl,inputValue)
            .then(function (response) {
                setError(false)
                setState(true);
                navigate("/admin/main")

            })
            .catch(function (error) {
                setError(true);
                console.error('Error: ', error);
            });
    }
    const handleChange = (e)=>{
        const updatedInputValue = {
            password: e.target.value
          };
          setInputValue(updatedInputValue);
    }
    return (
        <div className="flex flex-col text-xl font-[600] items-center pt-[2%] min-h-[90]  gap-[4vh] ">

            <PersonPinIcon sx={{ fontSize: "350px" }} />

            <h2 className="w-[30%] text-center">Привіт, якщо ви завітали на цю сторінку як звичайний глядач, рекомендуємо вам повернутись до читання статтей, тут творяться страшні справи</h2>
            <TextField onChange={handleChange} id="outline-basic" label='admin password' type="password"></TextField>
           
           <div className="w-[10%] ">
           <Button onClick={handleFetch} variant="contanied" sx={{backgroundColor: '#000000', color:'#FFFFFF',width:"100%", paddingY:'10%', "&:hover":{backgroundColor:'#000000'}}}>Увійти</Button>
           </div>
        </div>
    )
}