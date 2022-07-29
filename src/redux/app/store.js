import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../features/ui/ui-slice";
import messageReducer from "../features/message/message-slice";

import {CONSTANTS} from "../../utils/constants";


const themeVariant = localStorage.getItem(CONSTANTS.GAB_THEME_VARIANT) ?
    JSON.parse(localStorage.getItem(CONSTANTS.GAB_THEME_VARIANT)) : 'dark';


const store = configureStore({
    reducer: {
        ui: uiReducer,
        message: messageReducer
    },
    preloadedState: {
        ui: {themeVariant, activePath: '/', drawerOpen: false},
    }
});

export default store;
