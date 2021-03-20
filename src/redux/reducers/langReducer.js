import {createReducer} from "@reduxjs/toolkit"
import ru from './../ru';
import uz from './../uz';
import langActions from "../actions/lanActions";


const langReducer = createReducer({ type : localStorage.getItem("lang")=="ru"?"ru":"uz", lang :  localStorage.getItem("lang")=="ru"?ru:uz },{
    [langActions.ru.type] : state => {
        return { type : "ru" , lang : ru }
    },
    [langActions.uz.type] : state => {
        return { type : "uz" , lang : uz }
    }
});

export default langReducer;