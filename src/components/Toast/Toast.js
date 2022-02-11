import './Toast.css'

const Toast = () => {
    return (
        <span className="notificationToast">
            <button>X</button>
            <h5 className="notificationTitle">Title</h5>
            <p className="notificationMessage">Message</p>
        </span>
    )
}

export default Toast;