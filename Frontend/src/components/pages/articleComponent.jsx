import { useParams } from "react-router"

import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../_basic/url";
function formatDateToCustom(inputDate) {
    const date = new Date(inputDate);

  

    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
   
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  
    return `${hours}:${minutes} ${formattedMonth}/${formattedDay}/${year}`;
  }
export default function ArticleComponent(){
    const {id} = useParams();
    const [article, setArcticle] = useState(
      {
            id: null,
            name: '',
            value: '',
            data: ''
            
        }
    )
    const [error,setError] = useState(true);
    useEffect(()=>{
        handleFetch();
    },[]);
    let articleURL = url+`/api/Article/${id}`
    
    
    const handleFetch = () =>{
        axios.get(articleURL)
        .then(function (response) {
             setArcticle(response.data);
             setError(false);
           
        })
        .catch(function (error) {
    
            setError(true);
        });
      }
    

      

      return (
        error ? (
          <div className="flex items-center justify-center h-[50vh]"><p className="text-5xl font-[800]">No such Article Found (404)</p></div>
        ) : (
          <div className="flex flex-col items-center gap-[2vh] py-[2%]">
            <h2 className="text-4xl font-[800]">{article.name}</h2>
            <p className="w-[60%] leading-8 text-xl">{article.value}</p>
            <div className="self-start px-[10%]">
              <span className="font-[600]">Дата: </span>
              <span className="font-[600]">{formatDateToCustom(article.date)}</span>
            </div>
          </div>
        )
      );
      
      
      
}