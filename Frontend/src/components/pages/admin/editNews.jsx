
import axios from "axios";
import { useState, useEffect } from "react";
import ArticleCard from "../../_basic/articlesCard";
import { url } from "../../_basic/url";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from "@mui/material";

export default function EditNews() {
    const [articles, setArticles] = useState([])


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

    const fetchDeleteData = (id) => {
        console.log("opa")
        axios.delete(url + `/api/Article/${id}`).then(resp => {
            console.log(resp.status);
        }).catch(error => {
            console.log('Error ', error);
        })
    }

    const handleDeleteItem = (id) => {
        fetchDeleteData(id);
        const updatedArticles = articles.filter((item) => item.id !== id);
        setArticles(updatedArticles);
    };
    const handleAddItem = () => {
        const newItem = {
            id: Math.floor(Math.random() * 991) + 10,
            name:"Name",
            value: '',
            data: 'none'
        }
        console.log(newItem.id);
        setArticles([...articles, newItem]);
      };

    return (
        <div className="mx-auto py-[5%] grid grid-cols-2 gap-[2vh] w-[50%]">
            {articles.map((item) => (

                <ArticleCard key={item.id} name={item.name} value={item.value} id={item.id} setState={setArticles} deleteItem={handleDeleteItem} />
            ))}
            <IconButton sx={{aspectRatio:'1/1',marginInline:'auto', width: "50%"}} onClick={handleAddItem} size="large">
                <AddCircleIcon sx={{fontSize:'100px'}}></AddCircleIcon>
            </IconButton>
        </div>
    )
}