import { useState } from "react";
import CustomModal from "../_basic/customModal";


export default function OnlineConsult() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="h-[80vh] w-full">
            <div className="mx-auto w-[70%] sm:w-[50%]">
                <h4 className="sm:text-[3.5rem] text-[2rem] font-[800]"><span className="block">ПОТРІБНА</span> ОНЛАЙН-КОНСУЛЬТАЦІЯ?</h4>
                <p className='  text-[#beb9b9] font-[700] text-[1.2rem] sm:text-3xl'>Заповнюй форму та чекай на відгук:</p>
                <div className="flex flex-col gap-[2vh]  py-[10%]">
                    <div className="bg-[#c9cbd7] w-[250px] h-[50px] rounded-[10px]  "></div>
                    <div className="bg-backgroundConsultDesign rounded-[15px] bg-center  bg-no-repeat bg-cover w-[100%] h-[20vh] sm:h-[40vh]"></div>
                    <div></div>
                    <button onClick={handleOpen} className="bg-[#000] self-center text-white py-6 px-16">ЗАПОВНИТИ</button>
                    <CustomModal open={open} handleClose={handleOpen} />
                </div>
            </div>
        </div>
    )
}