import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import NetworkEditor from "../../_basic/networkEditComponent";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { url } from "../../_basic/url";
import PublishIcon from '@mui/icons-material/Publish';
export default function EditNetworks() {
    const [networks, setNetworks] = useState([]);


    const urlNet = url+'/api/Net';
    const fetchData = () => {
        axios.get(urlNet)
            .then(response => {

                setNetworks(response.data);
            })
            .catch(error => {

                console.error('Error:', error);
            });
    }
    useEffect(() => {
        fetchData();
    }, [])

    const fetchPutData = ()=>{
        axios.put(urlNet,networks)
        .then(response =>{
            console.log(response.data);
        })    .catch(error => {

            console.error('Error:', error);
        });
    }
    const fetchDeleteData = (id)=>{
        axios.delete(urlNet+ `/${id}`)
        .then(response =>{
            console.log(response.data);
        })    .catch(error => {

            console.error('Error:', error);
        });
    }


    const handleDeleteItem = (id) => {
        fetchDeleteData(id);
        const updatedNetworks = networks.filter((item) => item.id !== id);
        setNetworks(updatedNetworks);
    };
    const handleAddItem = () => {
        const newItem = {
            id: Math.floor(Math.random() * (10 - 1000 + 1)) + 10,
            name:"other",
            link: '#'
        }
        setNetworks([...networks, newItem]);
      };
    return (
        <div className="flex flex-row">
            <div className="flex flex-col  mx-[20%] justify-center gap-[3vh]">
                {networks.map((item) => (
                    <div className="flex items-center " key={item.id}>
                        <NetworkEditor name={item.name} hrefURL={item.link} id={item.id} setState={setNetworks} />
                        {item.name === 'other' ? (
                            <IconButton onClick={() => handleDeleteItem(item.id)} size="large" sx={{ marginLeft: '30px' }}>
                                <DeleteIcon fill="#000000" sx={{ fontSize: "50px" }} />
                            </IconButton>
                        ) : null}
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center gap-[1vh] py-[5%]">
                <IconButton onClick={handleAddItem}>
                    <AddCircleIcon sx={{fontSize:"100px"}}/>
                </IconButton>
                <span className="mb-[100%]">Add New Link</span>
                <IconButton onClick={fetchPutData}>
                    <PublishIcon sx={{fontSize:"100px"}}/>
                </IconButton>
                <span>Save Links</span>
            </div>
        </div>
    )
}