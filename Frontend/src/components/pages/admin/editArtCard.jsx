import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import axios from 'axios';
import { url } from '../../_basic/url';


export default function EditArtCard() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { id, name, value, date } = state;
    const [inputValue, setInputValue] = useState({
       id: id,
        name: name,
        value: value,
        date: date
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
const handleFetch = ()=>{
    axios.put(url+`/api/Article/${id}`,inputValue).then((resp)=>{
        console.log(resp.data);
        navigate("/admin/editnews/")
    })
        .catch(error=>{
            console.log('Error ' , error);
        })
}
    return (

        <div className='flex flex-col items-center gap-6 py-[2%]'>
            <TextField sx={{ width: "40%" }} onChange={handleChange} name='name' value={inputValue.name} label="Заголовок"></TextField>
            <TextareaAutosize style={{ width: '40%', outlineWidth:'1px', outlineColor: "#000000", borderWidth:"1px" }} maxRows={25} onChange={handleChange} name='value' value={inputValue.value} label="Стаття"></TextareaAutosize>
            <Button onClick={handleFetch}
                variant='containted'
                sx={{ backgroundColor: '#000000', color: '#FFFFFF', paddingX: '2%', paddingY: '10px', "&:hover": { backgroundColor: '#FFFFFF', color: "#000000" } }}>

                <span className="font-[700] text-2xl">Зберегти</span></Button>
        </div>

    )
}