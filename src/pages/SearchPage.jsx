import PropertyCard from "../components/propertyCard/PropertyCard";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

export default function SearchPage() {
	const {
		propertyList,
		search,
		setSearch,
		tipologia,
		setTipologia,
		stanze,
		setStanze,
		letti,
		setLetti,
		categoryList,
		navbarOpen,
	} = useGlobalContext();

	const [filteredList, setFilteredList] = useState({
		search: "",
		tipologia: "",
		stanzeNumber: "",
		lettiNumber: "",
	});

	const applyFilters = () => {
		let filtered = propertyList.filter((property) => {
			// Check the filters:
			// Search
			if (!property.indirizzo.toLowerCase().includes(search.toLowerCase())) {
				return false;
			}
			// Tipologia
			if (!property.tipologia.toLowerCase().includes(tipologia.toLowerCase())) {
				return false;
			}
			// Stanze
			const stanzeNumber = parseInt(stanze);
			if (!isNaN(stanzeNumber) && property.numero_stanze < stanzeNumber) {
				return false;
			}
			// Letti
			const lettiNumber = parseInt(letti);
			if (!isNaN(lettiNumber) && property.numero_letti < lettiNumber) {
				return false;
			}

			return true;
		});

		setFilteredList(filtered);
	};

	const resetFilters = () => {
		setSearch("");
		setTipologia("");
		setStanze("");
		setLetti("");
		setFilteredList(propertyList); // Riporta la lista iniziale
	};

	useEffect(() => {
		if (propertyList.length > 0) {
			setFilteredList(propertyList);
			applyFilters();
		}
	}, [propertyList]);

	function handleAdvancedSearchSubmit(e) {
		e.preventDefault();
		applyFilters();
	}

	return (
		<div className="container">
			<form className="mb-3" onSubmit={handleAdvancedSearchSubmit}>
				<h2>Cerca la tua città o indirizzo:</h2>
				<div className="d-flex">
					{/* City, address */}
					<div className="flex-grow-1 align-items-center me-2">
						{/* Input Field */}
						<input
							type="text"
							id="searchInput"
							className="form-control"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>

					{/* Apply Filters Button */}
					<div className="d-flex align-items-center">
						<button type="submit" className="btn btn-primary w-100">
							<span className="me-2 d-none d-md-inline-block">Cerca</span>
							<span>
								<i className="fa-solid fa-magnifying-glass"></i>
							</span>
						</button>
					</div>
				</div>
			</form>

			{/* Accordion */}
			<div className="accordion mb-4" id="accordionExample">
				<div className="accordion-item">
					{/* ACCORDION HEADER */}
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="false"
							aria-controls="collapseOne"
							style={{ boxShadow: "none" }}
						>
							Filtri avanzati
						</button>
					</h2>

					{/* ACCORDION MAIN */}
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionExample"
					>
						{/* FORM */}
						<div className="accordion-body">
							<form className="" onSubmit={handleAdvancedSearchSubmit}>
								<div className="row row-cols-1 g-3">
									{/* Type */}
									<div className="col">
										<label htmlFor="typeInput" className="form-label">
											Tipologia:
										</label>

										<div className="d-flex align-items-center">
											{/* Input Field */}
											<select
												id="typeInput"
												className="form-select"
												value={tipologia}
												onChange={(e) => {
													setTipologia(e.target.value);
												}}
											>
												<option value="">Seleziona Tipologia</option>
												{categoryList.map((category) => (
													<option
														key={category.tipologia}
														value={category.tipologia}
													>
														{category.tipologia}
													</option>
												))}
											</select>
										</div>
									</div>

									{/* Rooms number */}
									<div className="col">
										<label htmlFor="roomsNumberInput" className="form-label">
											Numero stanze:
										</label>

										<div className="d-flex align-items-center">
											{/* Input Field */}
											<input
												type="number"
												id="roomsNumberInput"
												className="form-control"
												min="0"
												inputMode="numeric"
												value={stanze}
												onChange={(e) => {
													const value = e.target.value;
													if (/^\d*$/.test(value)) {
														setStanze(e.target.value);
													}
												}}
											/>
										</div>
									</div>

									{/* Beds number */}
									<div className="col">
										<label htmlFor="bedsNumberInput" className="form-label">
											Numero letti:
										</label>

										<div className="d-flex align-items-center">
											{/* Input Field */}
											<input
												type="number"
												id="bedsNumberInput"
												className="form-control"
												min="0"
												inputMode="numeric"
												value={letti}
												onChange={(e) => {
													const value = e.target.value;
													if (/^\d*$/.test(value)) {
														setLetti(e.target.value);
													}
												}}
											/>
										</div>
									</div>

									{/* Apply Filters Button */}
									<div className="col d-flex justify-content-center">
										<button
											type="submit"
											className="btn btn-primary w-25 mt-2"
											data-bs-toggle="collapse"
											data-bs-target="#collapseOne"
											onClick={resetFilters}
										>
											Cerca
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* Showing Filtered Properties */}
			{filteredList.length > 0 ? (
				<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
					{filteredList.map((property) => (
						<div className="col" key={property.id}>
							<PropertyCard property={property} />
						</div>
					))}
				</div>
			) : (
				<div className="text-center mt-5">
					<h2 className="mt-5">
						Nessun risultato trovato
						<i className="fa-regular fa-face-sad-tear"></i>
					</h2>
				</div>
			)}
		</div>
	);
}
