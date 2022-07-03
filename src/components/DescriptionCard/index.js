export default function DecriptionCard({ card }) {
  const { Description, CardType, Rarity, Gender } = card;

  return (
    <div className="content-description-card">
      <p className="content-description-card__text">
        Type:{" "}
        <span className="content-description-card__text2">{CardType}</span>{" "}
      </p>
      <p className="content-description-card__text">
        Description:{" "}
        <span className="content-description-card__text2">{Description}</span>
      </p>
      <p className="content-description-card__text">
        Rarity:{" "}
        <span className="content-description-card__text2">{Rarity}</span>
      </p>
      {Gender && (
        <p className="content-description-card__text">
          Gender:{" "}
          <span className="content-description-card__text2">{Gender}</span>
        </p>
      )}
    </div>
  );
}
