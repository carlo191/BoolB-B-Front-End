import React, { useState } from "react";

export default function FormMessage() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.message === "") {
      alert("Inserisci una email e un messaggio");
      return;
    }
    setIsSubmitted(true);
    setFormData({ email: "", message: "" });
    // Programmatically close the contact modal after submission
    const contactModal = document.getElementById("contactModal");
    const modalInstance = window.bootstrap.Modal.getInstance(contactModal);
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  return (
    <>
      {/* BUTTON OPEN MODAL */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Contatta il proprietario
      </button>

      {/* CONTACT MODAL */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* HEADER */}
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Contatta il proprietario
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* MAIN */}
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* EMAIL INPUT */}
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Inserisci la tua email
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="form-control"
                    id="emailInput"
                  />
                </div>
                {/* MESSAGE INPUT */}
                <div className="mb-3">
                  <label htmlFor="messageInput" className="form-label">
                    Scrivi un messaggio al proprietario
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    className="form-control"
                    id="messageInput"
                    rows="5"
                  ></textarea>
                </div>

                {/* SUBMIT MODAL */}
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Invia messaggio
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FEEDBACK MODAL */}
      <div
        className="modal fade"
        id="sendedModal"
        tabIndex="-1"
        aria-labelledby="sendedModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {isSubmitted ? (
                <h4>
                  Il tuo messaggio è stato inviato correttamente, il
                  proprietario ti risponderà al più presto!
                  <i className="fa-regular fa-face-smile"></i>
                </h4>
              ) : (
                <h4>Inserisci una email e un messaggio</h4>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
