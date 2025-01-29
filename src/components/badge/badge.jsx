export default function Badge({ tipologia, type, text }) {
  return (
    <>
      {text ? (
        <span className={`badge text-bg-${type}`}>
          {text}
          {tipologia}
        </span>
      ) : (
        <span className={`badge text-bg-${type}`}>{tipologia}</span>
      )}
    </>
  );
}
