import { useState } from "react";
import Categories from "../Categories";
import Meals from "../Meals/Meals";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("first");

  const selectCategoryHandler = (category) => {
    category !== "all"
      ? setSelectedCategory(category)
      : setSelectedCategory("");
  };

  return (
    <div className="grid text-center">
      <div className="grid text-center">
        <h1 className="text-5xl font-bold bg-custom-yellow text-custom-black px-4 py-4 drop-shadow-lg w-fit place-self-center">
          ~~MENU~~
        </h1>
        <div className="grid gap-y-2 mt-4 gap-x-2 place-self-center">
          <p className="font-semibold text-lg">You can filter by a category:</p>
          <Categories onSelect={selectCategoryHandler} />
        </div>
        <div>
          <Meals selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}
