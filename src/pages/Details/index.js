import { useParams } from "react-router-dom";
import useCard from "../../hooks/useCard";

import Wrapper from "../../components/Wapper";
import GoBack from "../../components/GoBack";
import Card from "../../components/Card";
import DecriptionCard from "../../components/DescriptionCard";

export default function Details() {
  const { cardId } = useParams();
  const selectedCard = useCard(cardId);

  return (
    <Wrapper>
      {selectedCard && (
        <div className="page-details">
          <GoBack />
          <>
            <Card card={selectedCard} />
            <DecriptionCard card={selectedCard} />
          </>
        </div>
      )}
    </Wrapper>
  );
}
