import React, {Component} from 'react';
import {IoPlayOutline} from "react-icons/all";
import {Modal} from "antd";
// import {Modal} from "antd";
// import {Player} from "video-react"

class LatestVideoItem extends Component {

    state = {visible: false};

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    componentDidMount() {
        console.log(this)
    }


    hideModal = () => {
        this.setState({
            visible: false
        });
        stopVideo();
    };

    // pause = () => {
        // this.player.pause();
    // };

    render() {
        return (
            <div className="lt-video-item item">
                <div className="ltv-thumb">
                    <img src={`http://img.youtube.com/vi/` + this.props.link.slice(this.props.link.length - 11) + `/0.jpg`}/>
                    <a onClick={this.showModal} className="lt-video"><IoPlayOutline/></a>
                </div>
                <div
                    onClick={this.showModal}
                    className={"mx-4 text-center text-white"}>{this.props.title}</div>
                <Modal
                    title="Product name"
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.hideModal}
                    afterClose={this.pause}
                    bodyStyle={{padding: 0}}
                >
                    {/*<Player*/}
                    {/*    autoPlay*/}
                    {/*    ref={ref => {*/}
                    {/*        this.player = ref;*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <source*/}
                    {/*        src={this.props.link}*/}
                    {/*        type="video/mp4"*/}
                    {/*    />*/}
                    {/*</Player>*/}
                    <iframe src={this.props.link}
                            width={"100%"}
                            height={"200px"}
                            title={this.props.title} frameBorder="0"
                            // allow="showinfo=0;controls=0;autohide=1;
                            //     accelerometer; autoplay; clipboard-write;
                            //     encrypted-media; gyroscope;"
                            // allowFullScreen
                    />
                </Modal>
            </div>
        )
    }
}
var stopVideo = function ( element ) {
    var iframe = document.querySelector( 'iframe');
    var video = document.querySelector( 'video' );
    if ( iframe !== null ) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if ( video !== null ) {
        video.pause();
    }
};

export default LatestVideoItem;
