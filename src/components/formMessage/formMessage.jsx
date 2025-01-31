export default function FormMessage() {
	return (
		<>
			<div className="mt-3 border rounded-5 my-5 p-4">
				<h3>
					Vuoi ricevere più informazioni, invia un messaggio al proprietario
				</h3>
				<div className="mb-3 mt-3">
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="Inserisci la tua email"
					/>
				</div>
				<div className="mb-3">
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="5"
						placeholder="Scrivi un messaggio al proprietario"
					></textarea>
				</div>{" "}
			</div>
		</>
	);
}
