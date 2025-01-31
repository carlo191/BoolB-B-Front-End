import { useState } from "react";

// Global variables
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (
      formData.nome.length < 3 ||
      formData.indirizzo.length < 5 ||
      formData.email_proprietario.length < 5
    ) {
      alert(`Indirizzo e email devono avere almeno 5 caratteri di lunghezza,
            nome deve avere almeno 3 caratteri di lunghezza.`);
      return;
    }
    console.log(formData);
    storeProperty(formData);
    alert("Casa inserita correttamente!");
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

  return (
    <div className="border rounded-5 my-5 p-4">
      <h2 className="mb-3">
        <i className="fa-solid fa-pencil fa-md me-2"></i>
        Aggiungi il tuo immobile:
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* Nome Input */}
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
        {/* Numero stanze Input */}
        <div className="mb-3">
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
        {/* Numero letti Input */}
        <div className="mb-3">
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
        {/* Numero bagni Input */}
        <div className="mb-3">
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
        {/* Metri quadrati Input */}
        <div className="mb-3">
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
        {/* Indirizzo Input */}
        <div className="mb-3">
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
        {/* Email Input */}
        <div className="mb-3">
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
        {/* Immagine Input */}
        <div className="mb-3">
          <label htmlFor="immagine" className="form-label">
            Immagine:
          </label>
          <input
            type="file"
            name="immagine"
            className="form-control"
            id="immagine"
            onChange={handleChange}
          />
        </div>
        {/* Tipologia Input */}
        <div className="mb-3">
          <label htmlFor="id_tipologia" className="form-label">
            Tipologia:
          </label>

          <select
            name="id_tipologia"
            id="id_tipologia"
            className="form-select"
            value={formData.id_tipologia}
            onChange={handleChange}
          >
            <option value="">Seleziona Tipologia</option>
            {categoryList.map((category) => (
              <option key={category.id} value={category.id}>
                {category.tipologia}
              </option>
            ))}
          </select>
        </div>
        {/* Submit */}
        <button type="submit" className="btn btn-primary">
          Aggiungi la tua casa
        </button>
      </form>
    </div>
  );
}
