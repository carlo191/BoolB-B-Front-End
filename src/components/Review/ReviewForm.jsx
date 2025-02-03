import { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Modal } from "bootstrap";

// Global variables
import { useGlobalContext } from "../../context/GlobalContext";

export default function ReviewForm() {
	const { storeReview, property } = useGlobalContext();
	const [formData, setFormData] = useState({
		id_immobile: "",
		nome_utente: "",
		contenuto: "",
		voto: "",
		data: "",
		durata: "",
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

		// Trova la modale e mostralo
		const modalElement = document.getElementById("exampleModalReview");
		if (modalElement) {
			const modal = new Modal(modalElement);
			modal.show();
		}

		setFormData({
			id_immobile: "",
			nome_utente: "",
			contenuto: "",
			voto: "",
			data: "",
			durata: "",
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
		<div className="border rounded-5 p-4">
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
						required
						name="nome_utente"
						type="text"
						className="form-control"
						placeholder="Scrivici il tuo nome"
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
						placeholder="Scrivici come è stata la tua esperienza"
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
						required
						name="voto"
						type="number"
						min="1"
						max="5"
						placeholder="Inserisci un voto da 1 a 5"
						className="form-control"
						id="voto"
						value={formData.voto}
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className="mb-3">
					<label className="active form-label" htmlFor="data">
						Data di soggiorno:
					</label>
					<input
						required
						className="form-control"
						type="date"
						id="data"
						name="data"
						value={formData.data}
						max={new Date().toISOString().split("T")[0]}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="durata" className="form-label">
						Durata del soggiorno:
					</label>
					<input
						required
						name="durata"
						type="number"
						min="1"
						className="form-control"
						placeholder="Inserisci il n. di giorni della tua permanenza"
						id="durata"
						value={formData.durata}
						onChange={(e) => handleChange(e)}
					/>
				</div>

				{/* Submit */}
				<button type="submit" className="btn btn-primary">
					Aggiungi recensione
				</button>
				<div className="modal fade" id="exampleModalReview" tabindex="-1">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-body">
								La recensione è stata aggiunta con successo!
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Chiudi
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
