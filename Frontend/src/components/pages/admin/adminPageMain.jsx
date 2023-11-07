import { Button } from "@mui/material"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate } from "react-router";
export default function AdminPageMain() {
    const navigate = useNavigate();
    const styles = {
        wrapper: 'flex flex-row justify-between items-center gap-[10%] w-[40%]',
        container: ' flex-1 flex items-center justify-center '
    }


       

    return (
        <div className="flex flex-col gap-[1vh] items-center py-[2%]">

            <AdminPanelSettingsIcon  sx={{fontSize: '300px'}}/>
            <span className="text-2xl font-[600]">Доброго дня адміністратор!</span>

            <div className={styles.wrapper}>
                <ReceiptLongOutlinedIcon sx={{ fontSize: '100px' }} />
                <div className={styles.container}> <Button
                onClick={()=>navigate('/admin/read')}
                    variant="contanied"
                    sx={{ backgroundColor: '#000000', color: '#FFFFFF', width: "100%", paddingY: '3%', "&:hover": { backgroundColor: '#e2ff85' } }}>

                    <span className="font-[700] text-2xl"> ЧИТАТИ ЗАПИТИ</span></Button></div>
            </div>
            <div className={styles.wrapper}>
                <EditNoteIcon sx={{ fontSize: '100px' }} />
                <div className={styles.container}><Button
                 onClick={()=>navigate('/admin/editnews')}
                    variant="contanied"
                    sx={{ backgroundColor: '#e2ff85', color: '#FFFFFF', width: "100%", paddingY: '3%', "&:hover": { backgroundColor: '#000000' } }}>

                    <span className="font-[700] text-2xl">  РЕДАГУВАТИ НОВИНИ</span></Button></div>
            </div>
            <div className={styles.wrapper}>
                <LanguageIcon sx={{ fontSize: '100px' }} />
                <div className={styles.container}> <Button
                       onClick={()=>navigate('/admin/editnetworks')}
                    variant="contanied"
                    sx={{ backgroundColor: '#000000', color: '#FFFFFF', width: "100%", paddingY: '3%', "&:hover": { backgroundColor: '#e2ff85' } }}>

                    <span className="font-[700] text-2xl"> РЕДАГУВАТИ СОЦ.МЕРЕЖІ</span></Button></div>
            </div>
        </div>
    )
}