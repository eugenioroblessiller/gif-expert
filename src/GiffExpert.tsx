import React, { useState } from 'react';

import { AddCategory, GiffGrid } from './components';

const GiffExpert = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const handleAddCategory = () => {
    setCategories((categories) => [...categories, "Nueva categoria"]);
  };

  const setCategory = (category: any) => {
    if (categories.includes(category)) return;
    setCategories((categories) => [category, ...categories]);
  };

  return (
    <>
      <h1>GiffExpert</h1>
      <AddCategory setCategory={setCategory} />
      <button onClick={handleAddCategory}>Agregar</button>
      <ol>
        {categories?.map((category) => {
          return <GiffGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GiffExpert;
