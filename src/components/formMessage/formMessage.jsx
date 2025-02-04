import React, { useState } from "react";

export default function FormMessage() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.message === "") {
      alert("Inserisci una email e un messaggio");
      return;
      setIsSubmitted(true);
      setShowModal(true);
      setFormData({ email: "", message: "" });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* <button className="btn btn-primary" type="submit">
					Invia messaggio
				</button> */}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Contatta il proprietario
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form className=" p-4" onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Inserisci la tua email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Scrivi un messaggio al proprietario"
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleCloseModal}
                  >
                    Annulla
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Invia messaggio
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
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
      )}
    </>
  );
}
