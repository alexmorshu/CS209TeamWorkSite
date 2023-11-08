
import { useEffect, useState } from "react"
import axios from "axios";
import NetworkButton from "../_basic/networkButtonComponent";
import { url } from "../_basic/url";
export default function NewtworkComponent() {
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
 



    return (
        <div className="flex flex-col gap-[4vh] items-center justify-center min-h-[90vh]">
            {networks.map((items)=>(
                <NetworkButton name={items.name} key={items.id} hrefURL={items.link} />
            ))}

        </div>
    )
}