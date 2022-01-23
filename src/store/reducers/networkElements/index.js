import { SET_NETWORK_ELEMENTS_LIST } from '../../actions/networkElements/actionTypes';

const initialState = {
    networkElementsList: []
}

const networkElementsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NETWORK_ELEMENTS_LIST: {
            return {
                ...state,
                networkElementsList: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default networkElementsReducer;