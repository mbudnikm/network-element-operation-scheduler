import db from '../../../common/config/firebaseConfig'
import { setNetworkElementsListAction } from './actions'
import { addAlertAction } from '../alerts/actions';
import { collection, doc, getDocs  } from 'firebase/firestore'

export const fetchNetworkElementsListThunk = () => async (dispatch) => {


    const querySnapshot = await getDocs(collection(db, "networkElements"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(Object.values(doc.data()));
        });

    try {
        // networkElementsRef.on("value", snapshot => console.log(snapshot))
        // const response = await networkElementsRef.get()
        // console.log(response)
        const networkElementsList = []
        dispatch(setNetworkElementsListAction(networkElementsList)); 
    } catch (e) {
        dispatch(addAlertAction({
            type: 'error',
            variant: 'danger',
            msg: 'Server Communication Failed'
        }))
    }
}