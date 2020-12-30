import './modal.css';
import Dashboard from "../dashboard/Dashboard";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
          <button type="button" onClick={handleClose}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default Modal;