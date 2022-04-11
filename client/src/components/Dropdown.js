const Dropdown = ({ options }) => {
  return (
    <>
      <div style={{display: "flex"}}>
        <h3>Select a genre: </h3>
        <select name="" id="">
          {options.map((item, index) => {
            return (
              <option key={index} value={options.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
