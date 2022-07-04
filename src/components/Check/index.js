import { useState } from "react";

export default function Check({ id, checked = false, name, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggleCheck = (e) => {
    setIsChecked((prevChecked) => !prevChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className="container-checkbox">
      <input
        type={"checkbox"}
        id={id}
        value={isChecked}
        className={"container-checkbox__input"}
        onChange={handleToggleCheck}
      />
      <label htmlFor={id} className={"container-checkbox__label"}>
        {name}
      </label>
    </div>
  );
}
