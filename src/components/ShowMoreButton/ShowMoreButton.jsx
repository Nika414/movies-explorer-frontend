export default function ShowMoreButton({ onClick }) {
  return (
    <div className="show-more-button">
      <button onClick={onClick} type="button" className="show-more-button__button">
        Ещё
      </button>
    </div>
  );
}
