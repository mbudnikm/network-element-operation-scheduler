// import { fetchNetworkElementsList } from '../../api'
import { setNetworkElementsListAction } from './actions'
import { addAlertAction } from '../alerts/actions';

export const fetchNetworkElementsListThunk = () => async (dispatch) => {
    try {
        const networkElementsList = await fetchNetworkElementsList();
        dispatch(setNetworkElementsListAction(networkElementsList)); 
    } catch (e) {
        dispatch(addAlertAction({
            type: 'error',
            variant: 'danger',
            msg: 'Server Communication Failed'
        }))
    }
}