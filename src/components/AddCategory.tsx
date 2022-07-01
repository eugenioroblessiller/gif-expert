import React, { useState } from 'react';

interface AddCategoryProps {
  setCategory: any;
}

export function AddCategory({ setCategory }: AddCategoryProps) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setCategory(inputValue);
    setInputValue("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar giffs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}
