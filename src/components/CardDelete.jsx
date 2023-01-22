export default function CardDelete() {
  return (
    <button type="button" className="card__delete-button">
      <svg className="card__delete" xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none">
        <path className="card__delete" fill="#000" fillRule="evenodd" d="m4 5.06055 2.65156 2.65156 1.06066-1.06066-2.65156-2.65156 2.65145-2.65145L6.65145.287781 4 2.93923 1.34826.287484.287598 1.34814 2.93934 3.99989.287484 6.65174 1.34814 7.7124 4 5.06055Z" clipRule="evenodd" />
      </svg>
    </button>
  );
}
