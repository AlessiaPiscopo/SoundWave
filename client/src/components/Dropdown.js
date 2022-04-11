const Dropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };

  return (
    <div>
      <label>{props.label}</label>

      <select
        value={props.selectedValue}
        onChange={dropdownChanged}
        // convert to search bar/see SlingAir flights dropdown for placeholder
        // placeholder="Select a genre"
      >
        <option key={0}>Select...</option>
        {props.options.map((item, idx) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
