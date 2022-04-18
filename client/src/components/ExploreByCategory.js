import { useState, useEffect } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";

const ExploreByCategory = () => {
  // const [loading, setLoading] = useState(false);
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
      <div>
        {/* <NavLink onClick={() => handleClick("rnb")} to={"/categories/rnb"}>
          RnB
        </NavLink> */}
        <button onClick={() => handleClick("rnb")}>RnB</button>

        {category && (
          <div className="category-grid">
            <div>{category.body.name}</div>
            <img src={category.body.icons[0].url} alt="" />
          </div>
        )}

        {/* <NavLink to={`/categories/${categoryId}`}>pop</NavLink>
            <NavLink to={`/categories/${categoryId}`}>rock</NavLink>
            <NavLink to={`/categories/${categoryId}`}>punk</NavLink>
            <NavLink to={`/categories/${categoryId}`}>indie</NavLink> */}
      </div>
    </div>
  );
};

export default ExploreByCategory;
