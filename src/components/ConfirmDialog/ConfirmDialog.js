import './ConfirmDialog.css'

const ConfirmDialog = (props) => {
  return (
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h2>Are you sure you want to delete this record?</h2>
          <span className="close-modal-btn" onClick={props.close}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>
            Lorem Ipsum is simply dummy 
          </p>
        </div>
      </div>
  );
};


export default ConfirmDialog;