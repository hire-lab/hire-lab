import './ConfirmDialog.css'

const ConfirmDialog = (props) => {
  return (
      <div
        className="modal-wrapper"
        style={{
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h2>Are you sure you want to delete this record?</h2>
        </div>
        <div className="modal-body">
            <button className="close-modal-btn" onClick={props.onCancel}>Cancel</button>
            <button className='close-modal-btn' onClick={props.onConfirm}>Delete</button>
        </div>
      </div>
  );
};


export default ConfirmDialog;