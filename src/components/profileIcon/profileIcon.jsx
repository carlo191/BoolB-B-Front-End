export default function ProfileIcon({ name }) {
  return (
    <div className="profile-icon d-flex justify-content-center text-bg-warning pt-1 me-2">
      <h6>{name.charAt(0).toUpperCase()}</h6>
    </div>
  );
}
