import { useState } from "react";
import { Modal } from "bootstrap"; // Importazione per mostrare la modale
import { useGlobalContext } from "../../context/GlobalContext";

export default function FormHouse() {
  const { storeProperty, categoryList } = useGlobalContext();
  const [formData, setFormData] = useState({
    nome: "",
    numero_stanze: "",
    numero_letti: "",
    numero_bagni: "",
    metri_quadrati: "",
    indirizzo: "",
    email_proprietario: "",
    immagine: "default.jpg",
    id_tipologia: "",
  });

  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.nome.length < 3 ||
      formData.indirizzo.length < 5 ||
      formData.email_proprietario.length < 5
    ) {
      alert(`Indirizzo e email devono avere almeno 5 caratteri di lunghezza,
            nome deve avere almeno 3 caratteri di lunghezza.`);
      return;
    }

    storeProperty(formData);
    setShowModal(true); // Mostra la modale di conferma

    setFormData({
      nome: "",
      numero_stanze: "",
      numero_letti: "",
      numero_bagni: "",
      metri_quadrati: "",
      indirizzo: "",
      email_proprietario: "",
      immagine: "default.jpg",
      id_tipologia: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const numberFields = [
      "numero_stanze",
      "numero_letti",
      "numero_bagni",
      "metri_quadrati",
    ];

    if (e.target.name === "immagine") {
      setFormData((formData) => ({
        ...formData,
        [e.target.name]: "default.jpg",
      }));
    } else {
      setFormData((formData) => ({
        ...formData,
        [name]: numberFields.includes(name) ? parseInt(value) || "" : value,
      }));
    }
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="border rounded-5 my-3 p-3">
      <h2 className="mb-2">
        <i className="fa-solid fa-pencil fa-md me-2"></i>
        Aggiungi il tuo immobile:
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="row mb-2">
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Nome:
            </label>
            <input
              name="nome"
              type="text"
              className="form-control"
              id="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="numero_stanze" className="form-label">
              Numero stanze:
            </label>
            <input
              type="number"
              min={0}
              name="numero_stanze"
              className="form-control"
              id="numero_stanze"
              value={formData.numero_stanze}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <label htmlFor="numero_letti" className="form-label">
              Numero letti:
            </label>
            <input
              type="number"
              min={0}
              name="numero_letti"
              className="form-control"
              id="numero_letti"
              value={formData.numero_letti}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="numero_bagni" className="form-label">
              Numero bagni:
            </label>
            <input
              type="number"
              min={0}
              name="numero_bagni"
              className="form-control"
              id="numero_bagni"
              value={formData.numero_bagni}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <label htmlFor="metri_quadrati" className="form-label">
              Metri quadrati:
            </label>
            <input
              type="number"
              min={0}
              name="metri_quadrati"
              className="form-control"
              id="metri_quadrati"
              value={formData.metri_quadrati}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="indirizzo" className="form-label">
              Indirizzo:
            </label>
            <input
              type="text"
              name="indirizzo"
              className="form-control"
              id="indirizzo"
              value={formData.indirizzo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="email_proprietario" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email_proprietario"
            className="form-control"
            id="email_proprietario"
            value={formData.email_proprietario}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="id_tipologia" className="form-label">
            Tipologia:
          </label>
          <select
            name="id_tipologia"
            id="id_tipologia"
            className="form-select"
            value={formData.id_tipologia}
            onChange={handleChange}
            required
          >
            <option value="">Seleziona Tipologia</option>
            {categoryList.map((category) => (
              <option key={category.id} value={category.id}>
                {category.tipologia}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Aggiungi la tua casa
        </button>
      </form>

      {/* Modale di conferma */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Casa inserita con successo!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>Il tuo immobile è stato aggiunto correttamente.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCloseModal}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
