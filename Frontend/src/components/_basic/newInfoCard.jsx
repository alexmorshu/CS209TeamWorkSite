import { useNavigate } from "react-router"


export default function NewInfoCard({styleId, navigateId}){
const navigate = useNavigate();
const handleNav=()=>{
    navigate(`/article/${navigateId}`)
}
const bgVariants = [
    'bg-backgroundArtcl1',  'bg-backgroundArtcl2',  'bg-backgroundArtcl3',  'bg-backgroundArtcl4'
]


let strStyle = `bg-no-repeat sm:bg-contain bg-cover h-[25vh] w-[70vw] sm:w-[25vw] flex items-end justify-end `
strStyle += ` ${bgVariants[styleId-1]}`;
return(
    <div className={strStyle}>
        <button onClick={handleNav} className="bg-[#FFF] text-[#000] py-4 px-12">ЧИТАТИ</button>
    </div>
)

}