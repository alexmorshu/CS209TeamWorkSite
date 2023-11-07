
import { url } from "../_basic/url";
import { useEffect,useState } from "react";
import axios from "axios";
import ReadArticleCard from "../_basic/readAricleCard";


export default function ArticlePages(){
const [articles,setArticles] = useState([]);
    const urlNews = url + '/api/Article';
    const fetchData = () => {
        axios.get(urlNews)
            .then(response => {

                setArticles(response.data);
            })
            .catch(error => {

                console.error('Error:', error);
            });
    }
    useEffect(() => {
        fetchData();
    }, [])


    return(

        <div className="flex flex-col items-center py-10">
            <h2 className="text-[32px] font-[700]">Наші статті</h2>
            <div className="mx-auto py-[1%] grid grid-cols-2 gap-[2vh] w-[50%]">
        {articles.map((item) => (

            <ReadArticleCard key={item.id} name={item.name} value={item.value} id={item.id} setState={setArticles} />
        ))}
       
    </div>
        </div>
    )
}