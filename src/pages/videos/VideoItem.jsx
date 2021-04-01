import React, {Component} from 'react';
import {IoPlayOutline} from "react-icons/all";
import {Modal} from "antd";

class VideoItem extends Component {

    state = {visible: false};

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    componentDidMount() {
       }


    hideModal = () => {
        this.setState({
            visible: false
        });
        stopVideo();
    };


    render() {
        return (<>
            <div className="lt-video-item item">
                <div className="ltv-thumb">
                    <img src={`http://img.youtube.com/vi/` + this.props.link.slice(this.props.link.length - 11) + `/0.jpg`}/>
                    <a onClick={this.showModal} className="lt-video"><IoPlayOutline/></a>
                </div>
                <div
                    onClick={this.showModal}
                    className={"mx-4 text-center text-danger"}>{this.props.title}</div>

                <Modal
                    title={this.props.title}
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.hideModal}
                    afterClose={this.pause}
                    bodyStyle={{padding: 0}}
                >
                   <iframe src={this.props.link}
                            width={"100%"}
                           height={"300px"}
                            style={{maxWidth:"600px",maxHeigth:"400px"}}

                            title={this.props.title} frameBorder="0"
                        />
                </Modal>
            </div>
            </>
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

export default VideoItem;
