export default function CarouselButton({ index, isActive }) {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={index}
      aria-label={`Slide ${index + 1}`}
      aria-current={isActive ? "true" : undefined}
      className={isActive ? "active" : ""}
    ></button>
  );
}
