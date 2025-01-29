export default function Footer() {
	return (
		<div className="bg-primary text-white d-flex justify-content-between p-3">
			<ul className="d-flex my-auto">
				<li>
					<i className="fa-regular fa-copyright"></i> 2025 BoolBnb, Inc.
				</li>
				<li className="d-none d-sm-block">&bull;</li>
				<li>Privacy </li>
				<li className="d-none d-sm-block">&bull;</li>
				<li>Termini</li>
				<li className="d-none d-sm-block">&bull;</li>
				<li>Mappa del sito</li>
				<li className="d-none d-sm-block">&bull;</li>
				<li>Dettagli dell'azienda</li>
			</ul>

			<ul className="d-flex my-auto">
				<li className="me-2 d-none d-md-block">
					<i className="fa-solid fa-globe"></i> Italiano ( IT )
				</li>
				<li className="me-2 d-none d-md-block">
					<i className="fa-solid fa-euro-sign"></i> Eur
				</li>
				<li className="d-none d-md-block">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white"
					>
						<i className="fa-brands fa-facebook"></i>
					</a>
				</li>
				<li className="d-none d-md-block">
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white"
					>
						<i className="fa-brands fa-instagram"></i>
					</a>
				</li>
				<li className="d-none d-md-block">
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white"
					>
						<i className="fa-brands fa-linkedin"></i>
					</a>
				</li>
			</ul>
		</div>
	);
}
