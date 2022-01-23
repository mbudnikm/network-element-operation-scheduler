import db from '../../../common/config/firebaseConfig'
import { setNetworkElementsListAction, setNetworkElementsFilteredListAction } from './actions'
import { addAlertAction } from '../alerts/actions';
import { doc, getDoc } from 'firebase/firestore'

export const fetchNetworkElementsListThunk = () => async (dispatch) => {

    const networkElementsRef = doc(db, "networkElements", "list")

    try {
        const networkElementsSnap = await getDoc(networkElementsRef)
        const fetchedNetworkElements = Object.values(networkElementsSnap.data())
        dispatch(setNetworkElementsListAction(...fetchedNetworkElements)); 
        dispatch(setNetworkElementsFilteredListAction(...fetchedNetworkElements));
    } catch (e) {
        dispatch(addAlertAction({
            type: 'error',
            variant: 'danger',
            msg: 'Server Communication Failed'
        }))
    }
}