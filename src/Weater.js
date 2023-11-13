import './Style.css'
import { useEffect,useState } from 'react';
import moment from 'moment'
import { useTranslation } from 'react-i18next';
import { useSelector,useDispatch } from 'react-redux';
import { fetchweather } from './WeatherSlice';
import CircularProgress from '@mui/material/CircularProgress';
import CloudIcon from '@mui/icons-material/Cloud';


export default function Weater(){

const dispatch=useDispatch()


 

  const [Time,setTime]=useState(null)
  const { t, i18n } = useTranslation();
  const [locale,setlocale]=useState("ar")

  const isloading=useSelector((state)=>{
    return state.weather.isloading
  })

  const temp=useSelector((state)=>{
    return state.weather.weather
    
  })

console.log("!!!!!!",temp)
 


  function HandleLanguageClick(){
    if (locale==="en"){
        setlocale("ar")
        i18n.changeLanguage("ar")
    }else{
        setlocale("en")
        i18n.changeLanguage("en")
    }

  }
  
  useEffect(()=>{
dispatch(fetchweather())

i18n.changeLanguage(locale);
  },[]);

    

    useEffect(()=>{
        
       const T= moment().format('MMMM Do YYYY, h:mm:ss a')
       setTime(T)
    },[])

    
    return(

        
        <div >
             <div dir={locale==="ar"?"rtl":"ltr"} style={{display:"flex" , alignItems:"end" , justifyContent:"start" ,height:"10%"}}>
                <h1 style={{fontSize:"37px" , marginRight:"10px",color:"white"}}> {isloading?<CircularProgress/>:""} {t("London")} </h1>
                <h2 style={{marginRight:"20px",color:"white"}}>{Time}</h2>
             </div>
             <hr></hr>

             <div dir={locale==="ar"?"rtl":"ltr"} style={{width:"40%",float:"right"}}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{fontSize:"65px" ,marginRight:"30px",color:"white"}}> {temp.number} </h1>
                <img src={temp.icon} alt=''/> 
              </div>
                <h1 style={{fontSize:"20px",color:"white"}}>{temp.description} </h1>
                <h1 style={{fontSize:"20px" , color:"white"}}> {t("min")} {temp.min}  ||  {t("max")}: {temp.max}</h1>
             </div>

             <div>
                 <CloudIcon style={{fontSize:"200px", color:"white"}}/>
             </div>

             <button style={{marginTop:"60px" , borderRadius:"10px"}} onClick={HandleLanguageClick}> {locale==="ar"?"انكليزي":"Arabic"} </button>
        </div>

        
    
    )
}