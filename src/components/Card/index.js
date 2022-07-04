import { Link } from "react-router-dom";
import { getUrlImgCard } from "../../helpers";

export default function Card({ card, ...props }) {
  const formatImg = card.CardType === "HQ" || card.Rarity === "Common" ? "png" : "gif";

  return (
    <Link to={`/details/${card.id}`} className="card">
      <img
        loading="lazy"
        className="card__img"
        src={getUrlImgCard(card.id, formatImg)}
        alt={card.Name}
      />
    </Link>
  );
}
