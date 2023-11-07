
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from 'react-router-dom';
export default function Header({refS,refC}) {
    

const handleScrollSearch = (ref)=>{
    ref.current?.scrollIntoView({ behavior: 'smooth' });
}



    return (
        <div className='h-[7vh] flex flex-row border-b-2 border-[#000000] justify-between items-center pl-[8%]'>
          <Link to={'/'}>  <p className='font-[600] text-2xl'>cyNet</p></Link>
            <div className=' px-[1%] flex  h-full'>
                <IconButton onClick={() => handleScrollSearch(refS)} sx={{borderLeft: 2, borderRadius: 0, height:'100%',width:'10vw'}} size='large' aria-label="search">
                    <SearchIcon sx={{height: '100%',width: "9wv"}} />
                </IconButton>
                <IconButton  onClick={() => handleScrollSearch(refC)} sx={{borderLeft: 2, borderRadius: 0, height:'100%',width:'10vw'}} size='large' aria-label="chat">
                    <ForumIcon  sx={{height: '100%',width: "9wv"}}/>
                </IconButton>
            </div>
        </div>
    )
}