import { ADD_ALERT, REMOVE_ALERT } from './actionTypes';

export const addAlertAction = (payload) => ({
    type: ADD_ALERT,
    payload
})

export const removeAlertAction = (payload) => ({
    type: REMOVE_ALERT,
    payload
})