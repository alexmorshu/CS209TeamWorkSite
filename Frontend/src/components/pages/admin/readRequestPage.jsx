import axios from "axios"
import { useEffect, useState } from "react"
import {url} from '../../_basic/url'
import FormCard from "../../_basic/formCard";

export default function ReadRequest(){
    const [forms,setForms] = useState([]);
    
    const urlRec = url+ '/api/Form'
   
useEffect((()=>{
    axios.get(urlRec).then(resp=>setForms(resp.data)).catch(err=>console.log(err));
}),[])
console.log(forms);
const handleClick = (id) =>{
    const newUlr = url + `/api/Form/${id}`
   
    axios.delete(newUlr).then(resp=>{
        const updatedState = forms.filter(item => item.id !== id);
        setForms(updatedState);
    }).catch(err=>console.log(err));

}

    return(
    <div className="flex flex-col gap-8 px-[30%] py-8 ">
            {forms.map((item)=>(
                <FormCard handleClick={handleClick} id={item.id} name={item.name} descrp={item.description} number={item.number}/>
            ))}
    </div>
    
    )
}