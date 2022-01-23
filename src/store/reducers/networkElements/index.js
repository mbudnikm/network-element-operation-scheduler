import { 
    SET_NETWORK_ELEMENTS_LIST, 
    SET_NETWORK_ELEMENTS_FILTERED_LIST, 
    SET_SELECTED_NETWORK_ELEMENTS 
} from '../../actions/networkElements/actionTypes';

const initialState = {
    networkElementsList: [],
    networkElementsFilteredList: [],
    selectedNetworkElements: []
}

const networkElementsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NETWORK_ELEMENTS_LIST: {
            return {
                ...state,
                networkElementsList: action.payload
            }
        }
        case SET_NETWORK_ELEMENTS_FILTERED_LIST: {
            return {
                ...state,
                networkElementsFilteredList: action.payload
            }
        }
        case SET_SELECTED_NETWORK_ELEMENTS: {
            return {
                ...state,
                selectedNetworkElements: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default networkElementsReducer;