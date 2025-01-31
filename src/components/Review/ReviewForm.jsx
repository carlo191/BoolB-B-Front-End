import { useState } from "react";

export default function ReviewForm({}) {
  const [formData, setFormData] = useState({
    nome_utente: "",
    contenuto: "",
    voto: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
    });
  };

  return (
    <div className="border rounded-5 my-5 p-4">
      <h2 className="mb-3">
        <i className="fa-solid fa-pencil fa-md me-2"></i>
        Scrivi la tua recensione:
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* Username Input */}
          <label htmlFor="nome_utente" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="nome_utente"
            value={formData.nome_utente}
            onChange={handleChange}
          />
        </div>
        {/* Description Input */}
        <div className="mb-3">
          <label htmlFor="contenuto" className="form-label">
            Testo:
          </label>
          <textarea
            className="form-control"
            id="contenuto"
            rows="3"
            value={formData.contenuto}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Vote Input */}
        <div className="mb-3">
          <label htmlFor="voto" className="form-label">
            Voto:
          </label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            id="voto"
            value={formData.voto}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary">
          Aggiungi recensione
        </button>
      </form>
    </div>
  );
}
