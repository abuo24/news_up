import React, {useEffect, useState} from "react";
import {
    AiFillYoutube, AiOutlineInstagram,
    AiOutlineTwitter,
    BiTimer,
    FaFacebookF,
    IoSunnyOutline
} from "react-icons/all";
import {weatherApi} from "../../../api/weatherApi";

const HeaderTop = (props) => {

    const [weather, setWeather] = useState({});
    const [date, setDate] = useState({
        currentDateTime: new Date().toDateString()
    });

    useEffect(() => {
        weatherApi.getWeather().then(
            res => {
                setWeather({...res})
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, []);


    return (
        <div className={"header-top"}>
            <div className={"container"}>
                <div className={"header-t"}>
                    <div className={"row"}>
                        <div className={"col-md-6 col-sm-6 col-xs-12"}>
                            <div className={"d-weather-area"}>
                                <span><BiTimer/></span>
                                <span className={"h-date"}>
                                    {date.currentDateTime}
                                  </span>
                                <span><IoSunnyOutline/></span>
                                <span
                                    className={"h-weather"}>{weather.data && weather.data.main && Math.floor(weather.data.main.temp) - 273}<sup>o</sup></span>
                            </div>
                        </div>


                        <div className={"col-md-6 col-sm-6 col-xs-12"}>
                            <div className={"h-social-area"}>
                                <span>
                                    <a href="https://facebook.com/"  target={"_blank"}>
                                    <FaFacebookF/>
                                    </a>
                                </span>
                                <span><a href="https://twitter.com/" target={"_blank"}>
                                    <AiOutlineTwitter/>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://youtube.com/" target={"_blank"}>
                                    <AiFillYoutube/></a>
                                </span>
                                <span>
                                    <a href="https://instagram.com/"  target={"_blank"}>
                                    <AiOutlineInstagram/>
                                     </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeaderTop