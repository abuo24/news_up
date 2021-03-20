import React, {useEffect} from 'react';
import {connect} from "react-redux";
import langActions from "../../../redux/actions/lanActions";

import uz from '../../../img/uz.svg';
import ru from '../../../img/ru.svg';
import {getCategories} from "../../../redux/actions/categoryApi";

const LanguageChange = (props) => {

    // useEffect(()=>{
    //     // props.getCategories()
    // },[props])

    return (
            <div className={"dropdown d-inline-block float-right mt-3"}>
                <div  className={"dropdown-toggle"} data-toggle="dropdown"> <img src={ props.langReducer&&props.langReducer.type == "uz" ? uz : ru } style={{width : "20px"}}/> { props.langReducer&&props.langReducer.type.toUpperCase() } </div>
                <div className={"dropdown-menu dropdown-menu-right"}>
                    <div onClick={() =>{ props.changeRu();
                        localStorage.setItem("lang","ru")
                    }} className="dropdown-item"> <img src={ru} alt="rus"/> Ru </div>
                    <div onClick={() => {
                        props.changeUz()
                        localStorage.setItem("lang","uz")
                    }}  className="dropdown-item"> <img src={uz} alt="uzbek"/> Uz </div>
                </div>
            </div>

    );
};

const mstp = state => (state);
const mdtp = dispatch => ({
    changeUz : () => {
        dispatch(langActions.uz())
    },
    changeRu : () => {
        dispatch(langActions.ru())
    },
    getCategories : ()=>{
        dispatch(getCategories())
    }
})

export default connect(mstp,mdtp)(LanguageChange);