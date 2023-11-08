import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CustomCard from './customCard';
import axios from 'axios';
import { url } from '../_basic/url';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export default function SearchComponent({refSearch,refChat}) {
    const [header,setHeader] = useState('');
    let newUrl = url+`/api/Article/search/${header}`
    const navigate = useNavigate();
    
   

  const handleFetch = () =>{
    axios.get(newUrl)
    .then(function (response) {
        const arcticle = response.data;
        navigate(`/article/${arcticle.id}`)
       
    })
    .catch(function (error) {

        console.error('Error: ', error);
    });
  }

    const handleChange = (e)=>{
        setHeader(e.target.value);
    }

    return (
        <div ref={refSearch} className='relative h-[80vh] mt-[18%] items-center flex flex-col gap-[3%] px-[18%]'>
            <div className="absolute top-[5%]  sm:top-[-8%] left-[20%] bg-[#fcffcb] sm:w-[200px] w-[70px] h-[70px] sm:h-[200px] z-[-1]"></div>
            <h3 className='sm:text-[6rem] text-[3rem] self-start sm:mt-0 mt-9 ml-[13%] font-[800]'>Пошук</h3>
          <div className='sm:w-full w-[300px] flex items-center justify-center'>
          <Paper
                component="form"
                sx={{ p: '15px 4px', display: 'flex', alignItems: 'center', width: 600, }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Шукайте вашу статтю"
                    onChange={handleChange}
                />
                <IconButton onClick={handleFetch}  type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
          </div>
            <p className='sm:w-[60%] font-[800] sm:text-2xl'>Активний пошук завжди призводить до виявлення!
                Введіть потрібну назву та почніть пошук серед наших ресурсів
            </p>
            <div className='flex sm:flex-row w-[120%] sm:w-[70%] justify-between'>
                <CustomCard refC={refChat} name="ШУКАЄТЕ ПОРАДУ" color={true} />
                <CustomCard name="ШУКАЄТЕ ОНЛАЙН ДОПОМОГУ" color={false} />
            </div>
        </div>
    )
}