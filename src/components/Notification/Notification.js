import {useNotificationContext} from '../../contexts/NotificationContext';
import './Notification.css'

const Notification = () => {
    const {notification, hideNotification} = useNotificationContext();

    if (!notification.show){
      return null;
    }

    return (
      <div className='notificationContainer top-left'>
        <span className={`notificationToast top-left`}>
            <button onClick={hideNotification}>X</button>
            <p className={`notificationMessage ${notification.type}`}>{notification.message}</p>
        </span>
      </div>
    )
}

export default Notification;