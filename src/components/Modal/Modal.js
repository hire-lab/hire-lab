import './Modal.css'

const Modal = ({show, onConfirm, onCancel}) => {
    return (
      <div className='modalWrap' show={show}>
        <span className='modal'>
            <p className='warning'>Are you sure you want to delete this record?</p>
            <button onClick={onConfirm}>Yes, delete</button>
            <button onClick={onCancel}>Cancel</button>
        </span>
      </div>
    )
}

export default Modal;