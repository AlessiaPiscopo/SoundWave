const Dropdown = ({ data }) => {
  return (
    <>
      <div>
        <select name="" id="">
          {data.map((item, index) => {
            return (
              <option key={index} value={data.value}>
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
