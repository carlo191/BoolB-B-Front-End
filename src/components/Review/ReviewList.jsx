import ReviewItem from "./ReviewItem";
export default function ReviewList({ reviews }) {
    return (
      <div className="row">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.review_id} />
        ))}
      </div>
    );
  }