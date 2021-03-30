import React, {useEffect, useState} from 'react';
import headimg from "../../../img/post-img/about-me/img-1.jpg";
import {connect} from "react-redux";
import Links from "../../home/shortNews/links";

const HeadAbout = (props) => {


    const [lang, setLang] = useState(true)
    const [langs, setLangs] = useState(props.langReducer.lang)

    useEffect(() => {
            setLang(props.langReducer.type == "uz" ? true : false)
            setLangs(props.langReducer.lang)
        }
    )


    return (<div className="col-md-8 col-sm-8">

            <div className="about-me-text">
                <p className="abt-text">{
                    langs.aboutText
                }
                    “Doim” haqida
                    “Doim” internet-nashri 2021-yil aprelidan beri faoliyat ko‘rsatadi. Shiorimiz: “Doimiy yangiliklardan chetda qolmang!”. Barcha savollarni “kontakt” sahifasi orqali yo‘llash mumkin.

                    2021-yil aprelidan buyon faoliyat ko‘rsatadi

                    Ta’sischi va noshir: Simple Networking Solutions MChJ

                    Manzil: 100000, Toshkent, Mustaqillik shoh ko‘chasi, 59A.

                </p>

            </div>
            <Links/>
        </div>
    );
};

const mstp = (state) =>(state);

export default connect(mstp, null)(HeadAbout);