import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Marvel Captain"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* TÍTULO */}
      <h1>GifExpertApp</h1>

      {/* INPUT */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* LISTADO DE GIFs */}
      {
        categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })
      }
    </>
  );
};
