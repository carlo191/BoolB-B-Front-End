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
    <div className="col-12 d-flex flex-column flex-sm-row border rounded-4 p-3 mb-3">
      <div className="user-text flex-grow-1">
        <h5>Review by: {review.nome_utente}</h5>

        <div>{review.contenuto}</div>
      </div>

      <div className="vote">
        <h6 className="review-vote">
          Voto: {generateStars(review.voto).map((star) => star)}
        </h6>
      </div>
    </div>
  );
}
