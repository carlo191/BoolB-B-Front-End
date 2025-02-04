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
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ email: "", message: "" });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#contactModal"
      >
        Contatta il proprietario
      </button>

      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
        onHide={handleClose}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">
                Invia un messaggio
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              {isSubmitted ? (
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Messaggio inviato!</h4>
                  <p>Il tuo messaggio è stato inviato con successo.</p>
                </div>
              ) : (
                <form className="p-4" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Inserisci la tua email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Scrivi un messaggio al proprietario"
                      required
                    ></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={handleClose}
                    >
                      Annulla
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Invia messaggio
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
