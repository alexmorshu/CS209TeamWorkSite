import { useEffect, useState } from "react";
import NewInfoCard from "../_basic/newInfoCard";
import axios from "axios";
import { url } from "../_basic/url";
import { useNavigate } from "react-router";


export default function NewInfo() {
    const [newInfo, setNewInfo] = useState([]);
    const newInfUrl = url + '/api/Article/0-4'
    const navigate = useNavigate();
 
    useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = ()=>{
    axios.get(newInfUrl)
    .then(resp=>setNewInfo(resp.data))
    .catch(err=>console.log(err));
}

const handleClick = ()=>{
    navigate(`/articles`)
}

    return (

        <div className='relative  sm:h-[90vh] mt-[18%] items-center flex flex-col gap-[10%] px-[18%]'>
            <div className="absolute sm:top-[-5%] left-[23%] bg-[#e2ff85] w-[70px] h-[70px] sm:w-[200px] sm:h-[200px] z-[-1]"></div>
            <h3 className=' sm:text-[4rem] text-[3rem] lg:text-[6rem] self-start ml-[13%] font-[800] cursor-pointer' onClick={handleClick}>Що нового?</h3>
            <div className="flex flex-col gap-8">
               <div className="flex flex-col sm:flex-row gap-8">
               <NewInfoCard  navigateId={newInfo[0]?.id} styleId={1}/>
               <NewInfoCard   navigateId={newInfo[1]?.id}  styleId={2}/>
               </div>
               <div className="flex flex-col sm:flex-row gap-8">
               <NewInfoCard   navigateId={newInfo[2]?.id}  styleId={3}/>
               <NewInfoCard  navigateId={newInfo[3]?.id}  styleId={4}/>
               </div>
            </div>
        </div>
    )
}