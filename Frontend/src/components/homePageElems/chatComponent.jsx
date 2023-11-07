import { Link } from "react-router-dom";


export default function ChatComponent({refChat}){



    return(
        <div ref={refChat} className='relative h-[40vh] sm:h-[80vh] mt-[5%] items-center flex flex-col gap-[3%] px-[18%]'>
            <div className="absolute sm:top-[-7%] left-[23%] bg-[#fcffcb] sm:w-[200px] sm:h-[200px] w-[70px] h-[70px] z-[-1]"></div>
            <h3 className='sm:text-[6rem] text-[3rem] self-start ml-[18%] font-[800]'>ЧАТ</h3>
            <div className=" relative bg-backgroundChatDesign sm:w-[60%] w-full bg-center h-[35%] my-[5%] bg-cover bg-no-repeat">
              <Link to={"/networks"}> <button className="absolute bottom-[-15%] right-[0%] bg-black text-white px-[10%] py-[3%]">СПІЛЬНИЙ ЧАТ</button></Link>
            </div>
        </div>
    )
}