import { useMemo, useState, useContext } from "react";
import CardsContext from "../../context/CardsContext";

import { FILTERS } from "../../helpers";

import Check from "../Check";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Filters() {
  const { filters, setFilters } = useContext(CardsContext);
  const [isOpenMenu, setIsCloseMenu] = useState(false);

  const hanldeCheck = (isChecked, category, subcategory) => {
    const subcategoryIsInTheFilters = filters[category].includes(subcategory);
    if (isChecked && !subcategoryIsInTheFilters) {
      setFilters({
        ...filters,
        [category]: [...filters[category], subcategory]
      });
    }

    if (!isChecked && subcategoryIsInTheFilters) {
      setFilters({
        ...filters,
        [category]: filters[category].filter( filter => filter !== subcategory)
      });
    }
  };

  const Subcategories = (category, subcategories) => {
    return (
      <ul className="filters__list-subcateories">
        {subcategories.map((subcategory) => {
          return (
            <li className="filters__item" key={subcategory}>
              <Check
                id={subcategory}
                name={subcategory}
                onChange={(isChecked) =>
                  hanldeCheck(isChecked, category, subcategory)
                }
              />
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
    const style = isOpenMenu ? { height: "460px" } : { height: "0" };
    return style;
  }, [isOpenMenu]);

  const addStyleOpenMenuChevron = useMemo(() => {
    const style = isOpenMenu
      ? { transform: "rotate(180deg)" }
      : { transform: "rotate(0deg)" };
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
              {Subcategories(filter.category, filter.subcategories)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
