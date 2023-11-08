
import ChatComponent from "../homePageElems/chatComponent"
import MainDescrp from "../homePageElems/mainDescrp"
import NewInfo from "../homePageElems/newInfoComponent"
import OnlineConsult from "../homePageElems/onlineConsultComponent"
import SearchComponent from "../homePageElems/searchComponent"
import Header from "../_basic/header"
import { useRef } from "react"
export default function HomePage(){
  
   const refSearch = useRef();
   const refChat = useRef();

    return(
        <div className="overflow-clip">
        <Header refS={refSearch} refC={refChat}></Header>
        <MainDescrp refS={refSearch}></MainDescrp>
        <SearchComponent refSearch={refSearch} refChat={refChat} ></SearchComponent>
        <ChatComponent refChat={refChat}></ChatComponent>
        <OnlineConsult></OnlineConsult>
        <NewInfo></NewInfo>
        </div>
    )
}