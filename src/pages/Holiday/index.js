import "./style.scss";
import Menu from "../../components/menu/menu";
import React, {useEffect, useState} from "react";
import { useForm } from 'react-hook-form';
import ComponentHeader from "../../components/ComponentHeader";
import {isWeekend} from 'date-fns';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import trLocale from 'date-fns/locale/tr';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiArrowRightSLine } from "react-icons/ri";
import {RiRefreshLine} from "react-icons/ri";
import HolidayServices from "../../services/HolidayServices";




const localeMap = {
    tr : trLocale,
};

const Holiday = ()=>{

    const {handleSubmit} = useForm();
    const [value, setValue] = React.useState(new Date());
    const [form,setform] = useState({f_description:'',f_dates:''});
    const [isShow,setIsShow] = useState(true);
    const [show2, setShow2] = useState(true);
    

    const handleChange = (e)=>{
        setform({...form,[e.target.name]:e.target.value});
    }

    const [locale, setLocale] = useState('de');

    const selectLocale = (newLocale) => {
        setLocale(newLocale);
    };

    useEffect(()=>{
        {Object.keys(localeMap).map((localeItem) => (
            selectLocale(localeItem)
        ))}
        if(!show2){
            setShow2(true);
        }
        get();
    },[value]);

    const onSubmit = data => sendData(data);
    const sendData = () => {

        let datas =  {
            "offDate": `${value.getDate()}/${value.getMonth()<10 ? '0':''}${value.getMonth()}/${value.getFullYear()}`,
            "description": form.f_description
        }

        HolidayServices.holidayPost(datas,function(response){
            if(response.resultDesc === "success"){
                window.alert("İşlem Başarılı!");
            }else{
                window.alert("İşlem Başarısız!");
            }
        })
    }

    const [holidays,setHolidays] = useState({});
    const [seri,setSeri] = useState([]);
    let seri2 = [];
    const tempArr = [];

    const get = (data) => {
        setHolidays([]);
        HolidayServices.holidayGet(data,function(response){
            tempArr.push(...response.data.holidayList);
            setSeri(tempArr);
            seri2.push(seri);
            setHolidays([...response.data.holidayList]);
        })
    }

    return(
        <div>
            <Menu/>
            <div className={"page"}>
                <button className={`--primary ${show2 ? '--primary-none' : ''}`} onClick={()=>{setShow2(!show2)}}>
                    <RiArrowRightSLine className="RiArrowRightSLine"/>
                </button>
                <div className={`${show2 ? 'patch-none' : 'patch-block'}`}></div>
                <div className="col-sm-12 col-md-4 right">
                    
                            <div className={`${show2 ? 'offcanvas offcanvas-start show ' : 'offcanvas offcanvas-start'}`} >
                                <Offcanvas.Header closeButton>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className={"--component-header"}>
                                        <ComponentHeader header={`${isShow ? 'Tatil' : ''}`}/>
                                    </div>
                                    <div className={"search-box"}>
                                        <div className="right-container">
                                            <div className="header">
                                               
                                            </div>
                                            <div  className={` ${isShow ? '--canvas-block' : '--canvas-none'}`}>
                                                <form>
                                                    <div className={"text-input"}>
                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                            <textarea cols={"20"} rows={"5"} name={"f_description"} value={form.f_description}  className={"input"} onChange={handleChange} placeholder={"Açıklama"}/>
                                                            <input type={"date"} name={"f_dates"} className={"input date---"} onChange={handleChange} placeholder={"gg/mm/yyyy"} value={`${value.getFullYear()}-${value.getMonth()<10 ? '0':''}${value.getMonth()}-${value.getDate()}`}/>
                                                            <button onClick={onSubmit} className={"submit-button --btn"}>Ekle</button>
                                                        </form>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Offcanvas.Body>
                            </div>
                </div>
                <div className={"cldr col-md-6"} >
                    <div className={"calendar-hd"}>
                    </div>
                    <div className={"calendar-bd "}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}
                                              adapterLocale={localeMap[locale]}
                        >
                            <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={value}
                                shouldDisableDate={isWeekend}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <div className={"holiday-list"}>
                                <tbody className={"tbody--"}>
                                <td className={"td--"}>
                                    <div className={"listCol--"}>
                                        <th className={"th--"}>Tarih</th>
                                        <ul>
                                            {seri?.map((s)=>(
                                                <li>{s?.offDate}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </td>
                                <button className={"get-button--"} onClick={(data)=>get(data)}><RiRefreshLine className={"Icon"}/>
                                    <span className={"button-text"}>Getir</span>
                                </button>
                                <td className={"td--"}>
                                    <div>
                                        <th className={"th--"}>Açıklama</th>
                                        <ul>
                                            {seri?.map((s)=>(
                                                <li>{s?.description}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </td>
                                </tbody>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Holiday;