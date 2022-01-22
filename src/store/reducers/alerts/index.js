import { ADD_ALERT, REMOVE_ALERT } from '../../actions/alerts/actionTypes';
import uuid from "../../../common/uuid"

const initialState = {
    alerts: []
}

const alertsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALERT: {
            return { 
                    ...state, 
                    alerts: [...state.alerts, {...action.payload, uuid: uuid() }]}
        }
        case REMOVE_ALERT: {
            const updatedAlerts = state.alerts.filter(alert => alert.uuid !== action.payload.uuid)
            return { ...state, alerts: updatedAlerts }
        }
        default: {
            return state
        }
    }
}

export default alertsReducer;