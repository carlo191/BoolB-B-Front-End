import { useState, useEffect } from "react";

// Global variables
import { useGlobalContext } from "../../context/GlobalContext";

export default function ReviewForm() {
	const { storeReview, property } = useGlobalContext();
	const [formData, setFormData] = useState({
		id_immobile: "",
		nome_utente: "",
		contenuto: "",
		voto: "",
	});

	useEffect(() => {
		if (property && property.id) {
			setFormData((prevFormData) => ({
				...prevFormData,
				id_immobile: property.id,
			}));
		}
	}, [property]);

	function handleSubmit(e) {
		e.preventDefault();
		storeReview(formData);
		setFormData({
			id_immobile: "",
			nome_utente: "",
			contenuto: "",
			voto: "",
		});
	}

	function handleChange(e) {
		setFormData((formData) => ({
			...formData,
			[e.target.name]:
				e.target.name === "voto" ? parseInt(e.target.value) : e.target.value,
		}));
	}

	return (
		<div className="border rounded-5 my-5 p-4">
			<h2 className="mb-3">
				<i className="fa-solid fa-pencil fa-md me-2"></i>
				Scrivi la tua recensione:
			</h2>

			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="mb-3">
					{/* Username Input */}
					<label htmlFor="nome_utente" className="form-label">
						Username:
					</label>
					<input
						name="nome_utente"
						type="text"
						className="form-control"
						id="nome_utente"
						value={formData.nome_utente}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				{/* Description Input */}
				<div className="mb-3">
					<label htmlFor="contenuto" className="form-label">
						Testo:
					</label>
					<textarea
						name="contenuto"
						className="form-control"
						id="contenuto"
						rows="3"
						value={formData.contenuto}
						onChange={(e) => handleChange(e)}
					></textarea>
				</div>
				{/* Vote Input */}
				<div className="mb-3">
					<label htmlFor="voto" className="form-label">
						Voto:
					</label>
					<input
						name="voto"
						type="number"
						min="1"
						max="5"
						className="form-control"
						id="voto"
						value={formData.voto}
						onChange={(e) => handleChange(e)}
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
