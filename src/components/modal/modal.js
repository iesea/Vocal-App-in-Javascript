import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";


  // const tempSubmitButton = () => {onClick={ ""

  // }
  // }

  const submitButton =async () => {
    const response = await fetch('http://localhost:1000/example-one', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        user: 'details'
      })
    })
    
    const json = await response.json()
    window.alert(json.message)
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button class="buttonf" type="button" onClick={handleClose}>
          Close
        </button>
          <button class="buttonf" type="button" onClick={"`"}>
          Submit
        </button>
      </section>
    </div>
  );
};

export default Modal;