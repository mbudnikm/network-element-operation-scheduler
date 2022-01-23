import { SET_NETWORK_ELEMENTS_LIST, SET_NETWORK_ELEMENTS_FILTERED_LIST } from './actionTypes'

export const setNetworkElementsListAction = (payload) => ({
    type: SET_NETWORK_ELEMENTS_LIST,
    payload
})

export const setNetworkElementsFilteredListAction = (payload) => ({
    type: SET_NETWORK_ELEMENTS_FILTERED_LIST,
    payload
})