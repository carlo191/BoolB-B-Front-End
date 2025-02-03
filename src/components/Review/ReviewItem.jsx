// Components
import ProfileIcon from "../profileIcon/profileIcon";

export default function ReviewItem({ review }) {
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const star =
        i < rating ? (
          <i className="fa-solid fa-star" key={i}></i>
        ) : (
          <i className="fa-regular fa-star" key={i}></i>
        );
      stars.push(star);
    }
    return stars;
  };

  return (
    <div className="review-element d-flex flex-column flex-sm-row border rounded-4 p-2 mt-1 mb-3">
      <div className="user-text flex-grow-1 mb-1">
        <h5 className="d-flex align-items-center">
          <ProfileIcon name={review.nome_utente} />
          {review.nome_utente}
        </h5>

        <div>{review.contenuto}</div>
      </div>
      <div className="ps-lg-2">
        <div className="vote">
          <h6 className="review-vote">
            Voto: {generateStars(review.voto).map((star) => star)}
          </h6>
        </div>
        <div>
          <h6>Data di soggiorno: {review.data_soggiorno.split("T", 1)}</h6>
        </div>
        <div>
          <h6>
            Durata: {review.numero_giorni}{" "}
            {review.numero_giorni == 1 ? "giorno" : "giorni"}
          </h6>
        </div>
      </div>
    </div>
  );
}
