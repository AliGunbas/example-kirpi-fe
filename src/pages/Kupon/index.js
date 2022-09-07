import "./style.scss";
import Menu from "../../components/menu/menu";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import * as React from 'react';
import Switch from '@mui/material/Switch';
import {useState, useRef, useEffect} from "react";

import {BsPencilSquare} from "react-icons/bs";
import {FaEdit, FaRegCalendarAlt} from "react-icons/fa";
import {AiOutlineCalculator} from "react-icons/ai";

import {get, useForm} from 'react-hook-form';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Kupon = () => {
    const [key, setKey] = useState('KiraPratik');
    const { register,handleSubmit,getValues,setValue} = useForm();

    const [checked1, setChecked1] = useState(false);


    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);









    const handleCreate = () =>{

        submitInput.current.click();
        handleClose();
    }

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);

    const submitInput = useRef();

    const handleChange1 = (event) => {
        setChecked1(event.target.checked);
    };



    const groupNameC = getValues("groupName");
    const couponC = getValues("coupon");
    const numberOfCouponsToBeCreatedC = getValues("numberOfCouponsToBeCreated");
    const couponCountC = getValues("couponCount");
    const bundleAmount1C = getValues("bundleAmount1");
    const bundleAmount2C = getValues("bundleAmount2");
    const strStartDateC = getValues("strStartDate");
    const strEndDateC = getValues("strEndDate");
    const isChargeableC = getValues("isChargeable");
    const appCodeC = getValues("appCode");





    const onSubmit = data => sendData(data);
    const sendData = (data) => {
        var datas =  {
            "campaignDto": {
                "cycle": 365,
                "freeAmount": 0,
                "discountAmount": "",
                "discountPercent": "",
                "strStartDate": dateStartSt,
                "strEndDate": dateEndSt,
                "status": 1,
                "campaignAmountDto":[
                    {
                        "bundleId": `${data.appCode=="Noo" ? 2 : 102}`,
                        "bundleAmount": data.bundleAmount1
                    },
                    {
                        "bundleId": `${data.appCode=="Noo" ? 3 : 103}`,
                        "bundleAmount": data.bundleAmount2
                    }
                ]
            },
            "campaignCouponDto": {
                "coupon":`${!checked1 ? data.coupon : null}`,
                "status": 1,
                "couponCount":  `${!checked1 ? data.couponCount : null}`,
                "remainingCouponCount": "",
                "couponType": "",
                "appCode": `${data.appCode == "Noo" ? 1 : 2}`,
                "strStartDate": dateStartSt,
                "strEndDate": dateEndSt,
                "isChargeable": `${data.isChargeable == "No" ? 0 : 1}`

            },
            "campaignGroupDto": {
                "groupName": data.groupName,
                "status": 1
            },
            "random":`${checked1 ? true : false}`,
            "numberOfCouponsToBeCreated":`${checked1 ? data.numberOfCouponsToBeCreated : ""}`
        }






        



    }

    const [coupon,setCoupon] = useState([]);
    const tempArr = [];
    const GetList = () => {

        var datas2 = {
            "appCode": `${appCodeC =="Noo" ? 1 : 2}`,
        }

        
    }

const [text,setText] = useState(true);
const changeText = (e)=>{
    if(e.currentTarget.id==="Kira"){
        setText(true);

    }else {
        setText(false);

    }
}
    const [dateStartSt,setDateStartSt] = useState();
    const [dateEndSt,setDateEndSt] = useState();
    let tempArr3="";
    let dateArrStart = [];
    let dateArrEnd = [];
    function changeDateFormat  (e) {

        if(e.currentTarget.name=="strStartDate"){
            tempArr3 = e.currentTarget.value;

            dateArrStart.push(tempArr3[8],tempArr3[9]);
            dateArrStart.push("/");
            dateArrStart.push(tempArr3[5],tempArr3[6]);
            dateArrStart.push("/");
            dateArrStart.push(tempArr3[0],tempArr3[1],tempArr3[2],tempArr3[3]);

            setDateStartSt(dateArrStart.join(""))
            dateArrStart=[]
        }else{
            tempArr3 = e.currentTarget.value;

            dateArrEnd.push(tempArr3[8],tempArr3[9]);
            dateArrEnd.push("/");
            dateArrEnd.push(tempArr3[5],tempArr3[6]);
            dateArrEnd.push("/");
            dateArrEnd.push(tempArr3[0],tempArr3[1],tempArr3[2],tempArr3[3]);

            setDateEndSt(dateArrEnd.join(""))
            dateArrEnd=[]
        }



    }



    return(
        <div>
            <Menu />

            <div className={"row"}>
                <div className={"coupon col-md-8"}>
                    <Tabs
                        defaultActiveKey="KiraPratik"
                        id="uncontrolled-tab-example"
                        onSelect={(e)=>{setKey(e)}}
                        className="mb-3"
                    >
                        <Tab eventKey="KiraPratik" title="Kupon">



                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className={"row-form"}>
                                        <p className={"mobil-txt"}>Sayfa</p>
                                        <div className={"charge-or-not"}>
                                            <div className={"charge-or-not-col appcode-mobil"}>
                                                <p >Kira Pratik</p>
                                                <input {...register("appCode")} id={"Kira"} onClick={(e)=>changeText(e)} className={"sellectButton"} type="radio" value="Noo" />
                                            </div>
                                            <div className={"charge-or-not-col appcode-mobil"}>
                                                <p >Çetele</p>
                                                <input  {...register("appCode")} id={"çetele"} onClick={(e)=>changeText(e)} className={"sellectButton"} type="radio" value="Yess" />
                                            </div>

                                        </div>
                                    </div>

                                <div className={"row-form"}>
                                    <p className={"text-alignment"}>Kupon Açıklaması</p>
                                    <div className={"coupon-description"}>
                                        <BsPencilSquare className={"FaAlignLeft date-icon"}/>
                                        <input type={"text"} className={"default-input"}  {...register("groupName",{})}/>
                                    </div>
                                </div>

                                <div className={"row-form"}>
                                    <p className={"mobil-txt text-alignment"}>Promosyon Kodu</p>
                                    <div className={"random-coupons"}>
                                        <p className={"text-alignment"} style={{marginRight:"40px"}}>Random Kod</p>

                                        <div className={"switch-and-input"}>
                                            <p className={`text-alignment ${!checked1 ? 'close-text-close':''}`}>kapalı</p>
                                            <div className={"switch-alignment"}>
                                                <Switch
                                                    checked={checked1}
                                                    onChange={handleChange1}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            </div>

                                            <p style={{marginRight:"4px"}} className={`text-alignment ${!checked1 ? 'random-coupon-margin':'open-text-open'}`}>açık</p>
                                        </div>
                                        <div className={`coupon-description ${!checked1 ? '':'optionel-input-none'}`}>
                                            <BsPencilSquare className={"FaAlignLeft date-icon"}/>
                                            <input  {...register("coupon",{})}  className={`default-input `} type={"text"} />
                                        </div>
                                    </div>

                                </div>
                                <div className={"row-form"}>
                                    <p className={"text-alignment"}>Promosyon Kodu Adedi</p>
                                    <div className={` random-coupons ${!checked1 ? 'optionel-input-none':''}`}>
                                        <p className={"px-3 text-alignment"}>Kaç Adet ?</p>
                                        <div className={"coupon-description"}>
                                            <AiOutlineCalculator className={"FaAlignLeft"}/>
                                            <input  {...register("numberOfCouponsToBeCreated",{})} type={"number"} className={"mobilNP default-input"}/>
                                        </div>
                                    </div>
                                    <div className={` random-coupons ${checked1 ? 'optionel-input-none':''}`}>
                                        <p className={"px-5 text-alignment"}>Kaç Kullanımlık ?</p>
                                        <div className={"coupon-description"}>
                                            <AiOutlineCalculator className={"FaAlignLeft"}/>
                                            <input  {...register("couponCount",{})}  type={"number"} className={"mobilNP default-input"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"row-form"}>
                                    <p className={"text-alignment"}>İndirimli Paket Ücretleri</p>


                                    <div className={"--col"}>
                                        <div className={"--row"}>
                                            <div className={"paketRow"}>
                                                <p className={"text-alignment"}>{text === true ? 'Yönetim Paketi' : 'Gümüş Paketi'}</p>
                                                <span className={"input-icon"}>
                                                <input {...register("bundleAmount1",{})} type={"number"}  className={"default-input"}/>
                                                </span>
                                            </div>
                                            <div className={"paketRow"}>
                                                <p className={" text-alignment"}>{text === true ? 'Yasal Paketi' : 'Altın Paketi'}</p>
                                                <span className={"input-icon"}>
                                                <input  {...register("bundleAmount2",{})}  type={"number"}  className={"default-input"}/>
                                                </span>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                                <div className={"row-form"}>
                                    <p className={"text-alignment date-txt-flex"}>Promosyon Geçerlilik Aralığı</p>

                                    <div className={"promotion-valid"}>
                                        <div className={"date"}>
                                            <label>Başlangıç</label>
                                            <div className={"coupon-description"}>
                                                <FaRegCalendarAlt className={"FaAlignLeft date-icon"}/>
                                                <input className={"date-input"} {...register("strStartDate",{})} onChange={(e)=>changeDateFormat(e)}  type={"date"} />
                                            </div>
                                        </div>
                                        <p className={"mx-4"}>To</p>
                                        <div className={"date"}>
                                            <label>Bitiş</label>
                                            <div className={"coupon-description"}>
                                                <FaRegCalendarAlt className={"FaAlignLeft date-icon"}/>
                                                <input className={"date-input"} {...register("strEndDate",{})} onChange={(e)=>changeDateFormat(e)}   type={"date"} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className={"row-form"}>
                                    <p className={"mobil-txt"}>Faturadan</p>
                                    <div className={"charge-or-not"}>
                                        <div className={"charge-or-not-col2 invoice-txt"}>
                                            <p >Faturadan Düşülmesin</p>
                                            <input {...register("isChargeable",{})} className={"sellectButton"} type="radio" value="No" />
                                        </div>
                                        <div style={{marginLeft:"30px"}} className={"charge-or-not-col2 invoice-txt"}>
                                        <p className={"invoice-txt-2"}>Faturadan Düşülsün</p>
                                        <input  {...register("isChargeable",{})} className={"sellectButton"} type="radio" value="Yes" />
                                        </div>

                                    </div>
                                </div>
                                    <input type={"submit"} className={"submit-input"} ref={submitInput} value={""}/>
                            </form>
                                    <div className={"submit-button-div-4"}>
                                        <div className={"submit-button-div"}>
                                            <button className={"submit-button"} onClick={()=>{setShow(true)}}>Kaydet</button>
                                        </div>
                                    </div>
                                    <div>
                                        <Modal show={show} className={"modal-fullscreen"} onHide={handleClose}>

                                            <Modal.Header closeButton>
                                                <Modal.Title>Değişiklikler</Modal.Title>
                                            </Modal.Header>

                                            <Modal.Body>

                                                <div className={"modal-div"}>
                                                    <p>Kupon Sayfası</p>
                                                   {appCodeC==="Noo" ? "KiraPratik" : "Çetele"}
                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Kupon Açıklaması</p>
                                                    {groupNameC}
                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Promosyon Kodu</p>
                                                    {!checked1 ? couponC : ""}
                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Kod Adeti</p>
                                                    {checked1 ? numberOfCouponsToBeCreatedC : ""}
                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Kod Kullanım Adeti</p>
                                                    {!checked1 ? couponCountC : ""}
                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Yasal Paket Ücret</p>
                                                    {bundleAmount2C}
                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Yönetim Paket Ücreti</p>
                                                    {bundleAmount1C}
                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Kupon Başlangıç Tarihi</p>
                                                    {dateStartSt}

                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Kupon Bitiş Tarihi</p>
                                                    {dateEndSt}
                                                </div>
                                                <div className={"modal-div"}>
                                                    <p>Faturadan</p>
                                                    {isChargeableC ==="Yes" ? "Düş" : "Düşme"}
                                                </div>



                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button  onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button   onClick={handleCreate}>
                                                    Kupon Oluştur
                                                </Button>


                                            </Modal.Footer>
                                        </Modal>

                                        {/*<input type="submit" value="gönder"/>*/}
                                    </div>

                            </div>



                        </Tab>



                        <Tab eventKey="Liste" title="Liste">
                            <div className={"submit-button-div-2"}>
                                <button onClick={GetList} className={"relative-get-Button submit-button-2"}>
                                    Listele
                                </button>
                                <ReactHTMLTableToExcel
                                    className="relative-get-Button submit-button-3"
                                    table="emp-table"
                                    filename="Emp Excel file"
                                    sheet="Sheet"
                                    buttonText="Excel'e Aktar"

                                />
                            </div>

                            <Alert key={"danger"} className={`${appCodeC=="Noo" || appCodeC=="Yess" ? 'select-txt-none':'select-txt-block'}`} variant={"danger"}>
                                Lütfen kupon sayfasından listelemek istediğiniz sayfayı seçiniz (KiraPratik veya Çetele)
                            </Alert>
                            <div className={"scroll"}>
                                <div className={"list"}>
                                    <table id={"emp-table"}>
                                    <tbody className={"tbody--"}>
                                        <td>
                                            <ul>
                                                <li className={"th"}>SayfaKodu</li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i?.appCode==1 ? "KiraPratik":"Çetele"}</li>)

                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li className={"th"}>PaketKodu</li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i.bundleId ==='' ? "....." : i.bundleId}</li>)

                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li className={"th"}>İndirimMiktarı</li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i.bundleAmount ==='' ? "....." : i.bundleAmount}</li>)

                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li className={"th"}>KuponAçıklaması</li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i.campaignGroupName ==='' ? "....." : i.campaignGroupName}</li>)




                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li className={"th"}>KuponKodu</li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i.coupon ==='' ? "....." : i.coupon}</li>)




                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li className={"th"}>KuponAdeti</li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i.couponCount ==='' ? "....." : i.couponCount}</li>)




                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li className={"th"}>FaturadanDüşDüşme</li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i.isChargeable ==='' ? "....." : i.isChargeable}</li>)




                                                ))}
                                            </ul>
                                        </td>
                                        <td className={"td-date--"}>
                                            <ul>
                                                <li className={"th"}>KuponBaşlangıçTarihi</li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i.strStartDate ==='' ? "....." : i.strStartDate}</li>)

                                                ))}
                                            </ul>
                                        </td>
                                        <td  className={"td-date--"}>
                                            <ul>
                                                <li className={"th"}><span style={{color:"transparent"}}>__</span>KuponBitişTarihi<span style={{color:"transparent"}}>__</span></li>
                                                {coupon?.map((item)=> (

                                                    item.map((i,index)=><li key={index} className={`${index%2==0 ? 'white-row--':''}`}>{i.strEndDate ==='' ? "....." : i.strEndDate}</li>)




                                                ))}
                                            </ul>
                                        </td>
                                    </tbody>
                                    </table>


                                            {/*<button onClick={exportCoupon}>
                                                export
                                            </button>*/}
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

            </div>
        </div>
    );

}

export default Kupon;

