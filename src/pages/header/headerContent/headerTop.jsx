import React, {useEffect, useState} from "react";
import {
    AiFillYoutube, AiOutlineInstagram,
    AiOutlineTwitter,
    BiTimer,
    FaFacebookF, FaTelegramPlane, FaTwitter,
    IoSunnyOutline
} from "react-icons/all";
import {weatherApi} from "../../../api/weatherApi";
import {links} from "../../../server/links";

const HeaderTop = (props) => {
    const [weather, setWeather] = useState({});
    const [date, setDate] = useState({
        currentDateTime: new Date().toDateString()
    });

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function(position) {
            weatherApi.getWeather(position.coords.latitude, position.coords.longitude).then(
                res => {
                    setWeather({...res})
                }
            ).catch(
                err => {
                    console.log(err)
                }
            )
        });

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
                                <span
                                    className={"h-weather"}>{weather.data && weather.data.main && Math.floor(weather.data.main.temp) - 273}<sup>o</sup></span>
                            </div>
                        </div>


                        <div className={"col-md-6 col-sm-6 col-xs-12"}>
                            <div className={"h-social-area"}>
                                <span>
                                    <a href={links.facebook}  target={"_blank"}>
                                    <FaFacebookF/>
                                    </a>
                                </span>
                                <span><a href={links.telegram} target={"_blank"}>
                                    <FaTelegramPlane/>
                                    </a>
                                </span><span><a href={links.twitter} target={"_blank"}>
                                    <FaTwitter/>
                                    </a>
                                </span>
                                <span>
                                    <a href={links.youtube} target={"_blank"}>
                                    <AiFillYoutube/></a>
                                </span>
                                <span>
                                    <a href={links.instagram}  target={"_blank"}>
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