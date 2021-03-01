import React, {Component} from 'react';
import SliderPost from "./sliderPost";
import TwitchContent from "./twitchContent";
import LatestVideo from "./latestVideo";
import ShortNews from "./shortNews/shortNews";
import FitnessArea from "./fitnessArea";

const Home = (props) => {
    return (
        <div>
            <SliderPost/>
            <TwitchContent/>
            <FitnessArea/>
            <LatestVideo/>
            <ShortNews/>
        </div>
    );
}

export default Home;