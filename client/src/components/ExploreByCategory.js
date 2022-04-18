import { useState } from "react";
// import { NavLink } from "react-router-dom";

const ExploreByCategory = () => {
  const [error, setError] = useState(false);
  const [category, setCategory] = useState(null);

  const handleClick = (categoryId) => {
    fetch(`/api/categories/${categoryId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setCategory(data);
        console.log(data);
      })
      .catch((err) => {
        setError(error);
        console.log(err);
      });
  };

  return (
    <div className="explore-by-category">
      <p>Explore by Category</p>
      <button onClick={() => handleClick("rnb")}>RnB</button>
      <button onClick={() => handleClick("rock")}>rock</button>

      {category && (
        <div className="category-grid">
          <div>{category.body.name}</div>
          <img src={category.body.icons[0].url} alt="" />
        </div>
      )}
    </div>
  );
};

export default ExploreByCategory;
