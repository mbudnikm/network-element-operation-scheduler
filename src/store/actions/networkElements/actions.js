import { SET_NETWORK_ELEMENTS_LIST, SET_NETWORK_ELEMENTS_FILTERED_LIST, SET_SELECTED_NETWORK_ELEMENTS } from './actionTypes'

export const setNetworkElementsListAction = (payload) => ({
    type: SET_NETWORK_ELEMENTS_LIST,
    payload
})

export const setNetworkElementsFilteredListAction = (payload) => ({
    type: SET_NETWORK_ELEMENTS_FILTERED_LIST,
    payload
})

export const setSelectedNetworkElementsAction = (payload) => ({
    type: SET_SELECTED_NETWORK_ELEMENTS,
    payload
})