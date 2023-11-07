
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function MainDescrp({refS}) {

    const handleScrollSearch = (ref)=>{
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    

    return (
        <div className=" relative mix-blend-multiply bg-backgroundDesrcp h-[80vh] bg-no-repeat bg-cover bg-bottom flex flex-col justify-between px-[8%] pt-[5%]  ">
            <div>
                <h1 className='sm:text-[6rem] text-[3rem] font-[800] text-[#e2ff85]'>CyNet</h1>
                <p className='sm:text-[2rem] text-[1.2rem] text-[1rem] sm:leading-8 	front-[600] sm:w-[50%]'>cyNet -
                    <span className='font-[800]'>це вебсайт, присвячений кібербезпеці, який містить важливу інформацію, надає актуальні новити та корисні поради</span>
                </p>
            </div>
            <div className=' absolute bottom-[-18%] bg-backgroundDescrpButton sm:h-[40%] h-[20%] w-[65%] sm:w-[45%] bg-no-repeat bg-contain self-center flex flex-col px-[2%] py-[2%] text-[#FFFFFF] '>
                <h2 className='sm:text-4xl text-2xl font-[700] text-[#ccff33]'>GETTING STARTED</h2>
                <p>IN CYBERSECURITY</p>
                <div onClick={()=>handleScrollSearch(refS)} className=' lg:flex hidden sm:text-3xl font-[700] items-center self-center mt-[7%] flex flex-row w-[30%] justify-evenly cursor-pointer	'>
                    <p >Start now </p>
                    <ArrowRightAltIcon sx={{height:"50px", width:"50px",marginTop:"5px"}}></ArrowRightAltIcon>
                </div>
            </div>
        </div>
    )
}