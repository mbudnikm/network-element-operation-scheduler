import { combineReducers } from "redux";
import alertsReducer from "./alerts";
import networkElementsReducer from "./networkElements";

export default combineReducers({
    alertsReducer,
    networkElementsReducer
})