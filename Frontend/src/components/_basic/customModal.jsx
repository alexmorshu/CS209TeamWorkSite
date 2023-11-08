
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { url } from './url';
import { useState } from 'react';
export default function CustomModal({ open, handleClose }) {
    const [dataValue, setDataValue] = useState({
        name: '',
        number: '',
        description: ''
    })


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
      
        setDataValue(prevDataValue => ({
            ...prevDataValue,
            [name]: value
        }));
    }

    const apiUrl = url+ '/api/Form';
    const handleFetch = () => {
        axios.post(apiUrl, dataValue)
            .then((response) => {
             handleClose();

            })
            .catch((error) => {
                console.error('Помилка Post запиту', error);
            });
    }


    return (

        <Modal open={open} onClose={handleClose}>
            <Box className="bg-[#FFFFFF] text-center w-[30%] h-[80%] mt-[5%] mx-auto gap-[8%] p-[1%] flex flex-col  items-center">
                <h3 className='text-3xl font-[800] w-[60%]'>Розкажи про свою проблему <span className='bg-[#e2ff85]'>НАМ</span></h3>
                <div className='bg-backgroundModalDesign w-[60%] h-[8%] bg-center bg-no-repeat bg-cover'></div>
                <TextField onChange={handleChange} name={'name'} sx={{ width: "60%" }} id="outlined-basic" label="ПІБ" variant="outlined" />
                <TextField sx={{ width: "60%" }} onChange={handleChange} name={'number'} id="outlined-basic" label="Номер телефону" variant="outlined" />
                <TextField sx={{ width: "60%" }} onChange={handleChange} name={'description'} id="outlined-basic" label="ОПИШІТЬ ПРОБЛЕМУ" variant="outlined" />
                <button onClick={handleFetch} className='text-white bg-[#000] px-[8%] py-[2%]'>НАДІСЛАТИ</button>
            </Box>
        </Modal>
    )


}