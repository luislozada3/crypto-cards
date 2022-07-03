import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function GoBack() {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <div className="content-go-back" onClick={handleClick}>
      <FontAwesomeIcon
        icon={faArrowLeftLong}
        color={"white"}
        className={"content-go-back__icon"}
      />
      <p className={"content-go-back__text"}>Ir atr&aacute;s</p>
    </div>
  );
}
