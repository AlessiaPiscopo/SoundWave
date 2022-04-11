const Dropdown = () => {
  const testData = [
    { name: "A", value: 1 },
    { name: "B", value: 2 },
    { name: "C", value: 3 },
  ];

  return (
    <>
      <div>
        <select name="" id="">
          {testData.map((item, index) => {
            <option key={index} value={testData.value}>
              {item.name}
            </option>;
          })}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
