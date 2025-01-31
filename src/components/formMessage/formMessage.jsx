import React, { useState } from "react";

export default function FormMessage() {
	const [formData, setFormData] = useState({
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Messaggio inviato correttamente al proprietario");
		setFormData({ email: "", message: "" });
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
			</form>
		</>
	);
}
