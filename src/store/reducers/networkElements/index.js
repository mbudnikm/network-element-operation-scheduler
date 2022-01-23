import { SET_NETWORK_ELEMENTS_LIST, SET_NETWORK_ELEMENTS_FILTERED_LIST } from '../../actions/networkElements/actionTypes';

const initialState = {
    networkElementsList: [],
    networkElementsFilteredList: []
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
                etworkElementsFilteredList: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default networkElementsReducer;