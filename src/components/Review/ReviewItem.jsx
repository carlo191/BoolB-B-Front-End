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
    <div className="col-12">
      <strong>Review by: {review.nome_utente}</strong>
      <div>Voto: {generateStars(review.voto).map((star) => star)}</div>
      <div>{review.contenuto}</div>
    </div>
  );
}
