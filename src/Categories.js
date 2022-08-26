const categoryItemClasses =
  "bg-custom-orange px-4 py-2 rounded-lg hover:bg-custom-black hover:text-custom-yellow transition-all";

export default function Categories(props) {
  const selectCategoryHandler = (category) => {
    props.onSelect(category.target.innerHTML.toLowerCase());
  };

  return (
    <div className="flex justify-center gap-x-4 font-semibold">
      <button onClick={selectCategoryHandler} className={categoryItemClasses}>
        ALL
      </button>
      <button onClick={selectCategoryHandler} className={categoryItemClasses}>
        Pizza
      </button>
      <button onClick={selectCategoryHandler} className={categoryItemClasses}>
        Salad
      </button>
      <button onClick={selectCategoryHandler} className={categoryItemClasses}>
        Burger
      </button>
      <button onClick={selectCategoryHandler} className={categoryItemClasses}>
        Sushi
      </button>
    </div>
  );
}
