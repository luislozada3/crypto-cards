import { useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const { keyword: keywordParam } = useParams();
  const [keyword, setKeyword] = useState(keywordParam ?? "");

  const handleChange = (e) => {
    const { target } = e;
    setKeyword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__content-input">
        <input
          type={"text"}
          className={"search-bar__input"}
          onChange={handleChange}
          value={keyword}
          placeholder={"Search..."}
        />
        <FontAwesomeIcon
          icon={faSearch}
          color="white"
          className="search-bar__icon"
        />
      </div>
      <Button type={"submit"}>Search</Button>
    </form>
  );
}
