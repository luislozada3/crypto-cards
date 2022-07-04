import { useMemo, useState } from "react";
import { FILTERS } from "../../helpers";
import Check from "../Check";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faRotate } from "@fortawesome/free-solid-svg-icons";

export default function Filters() {
  const [isOpenMenu, setIsCloseMenu] = useState(false);

  const Subcategories = (subcategories) => {
    return (
      <ul className="filters__list-subcateories">
        {subcategories.map((subcategory) => {
          return (
            <li className="filters__item" key={subcategory}>
              <Check id={subcategory} name={subcategory} />
            </li>
          );
        })}
      </ul>
    );
  };

  const handleClickToggleMenu = () => {
    setIsCloseMenu((prevIsCloseMenu) => !prevIsCloseMenu);
  };

  const addStyleOpenMenu = useMemo(() => {
    const style = isOpenMenu ? { height: "441.28px" } : { height: "0" };
    return style;
  }, [isOpenMenu]);

  const addStyleOpenMenuChevron = useMemo(() => {
    const style = isOpenMenu ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" };
    return style;
  }, [isOpenMenu]);

  return (
    <div className="filters">
      <h1 className="filters__title" onClick={handleClickToggleMenu}>
        FILTERS{" "}
        <FontAwesomeIcon
          icon={faChevronUp}
          color="white"
          className="filters__icon-chevron-up"
          style={addStyleOpenMenuChevron}
        />
      </h1>
      <div className="filters__container" style={addStyleOpenMenu}>
        {FILTERS.map((filter) => {
          return (
            <div className="filters__category" key={filter.category}>
              <h2 className="filters__subtitle">{filter.category}</h2>
              {Subcategories(filter.subcategories)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
