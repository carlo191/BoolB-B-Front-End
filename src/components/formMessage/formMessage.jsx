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

		setIsSubmitted(true);
		setShowModal(true);

		if (!formData.email || !formData.message) {
			return;
		}
		setFormData({ email: "", message: "" });
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<form className="mt-3 border rounded-5 my-5 p-4" onSubmit={handleSubmit}>
				<h3>
					Vuoi ricevere più informazioni, invia un messaggio al proprietario
				</h3>
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
				<button className="btn btn-primary" type="submit">
					Invia messaggio
				</button>
				{showModal && (
					<div
						class="modal fade show"
						style={{ display: "block" }}
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button
										type="button"
										class="btn-close"
										aria-label="Close"
										onClick={handleCloseModal}
									></button>
								</div>

								<div class="modal-body">
									{isSubmitted && formData.email && formData.message ? (
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
			</form>
		</>
	);
}
