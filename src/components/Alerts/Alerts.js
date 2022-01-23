import React from "react";
import { Alert } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeAlertAction } from "../../store/actions/alerts/actions";

const Alerts = () => {

    const dispatch = useDispatch();
    
    const alerts = useSelector(({ alertsReducer }) => alertsReducer.alerts)

    const renderIconByAlertType = (type) => {
        switch (type) {
            case 'error': {
                return <i className="fas fa-times pe-2"></i>
            }
            case 'success': {
                return <i className="fas fa-check pe-2"></i>
            }
            default: {
                return <i className="fas fa-exclamation pe-2"></i>
            }
        }
    }

    return (
        <div className="container position-absolute w-50 ml-25" style={{zIndex: 1}}>
            {alerts.map((alert) => 
                <Alert 
                    variant={alert.variant} 
                    onClose={() => dispatch(removeAlertAction({ uuid: alert.uuid}))}
                    key={alert.uuid}
                    dismissible>
                    <p>{renderIconByAlertType(alert.type)} {alert.msg}</p>
                </Alert>)}
        </div>
    )
}

export default Alerts;