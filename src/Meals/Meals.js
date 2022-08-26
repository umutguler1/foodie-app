import MealItem from "./MealItem";

import baconBurgerImage from "../assets/bacon-burger.jpeg";
import caesarSaladImage from "../assets/caesar-salad.jpg";
import californiaRollImage from "../assets/california-roll.jpg";
import capreseSaladImage from "../assets/caprese-salad.jpg";
import cheeseburgerImage from "../assets/cheeseburger.png";
import chicagoPizzaImage from "../assets/chicago-pizza.jpg";
import hamburgerImage from "../assets/hamburger.png";
import hawaiianPizzaImage from "../assets/hawaiian-pizza.jpg";
import pepperoniPizzaImage from "../assets/pepperoni-pizza.png";
import pizzaMargheritaImage from "../assets/pizza-margherita.jpg";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza Margherita",
    price: 5,
    type: "pizza",
    image: pizzaMargheritaImage,
  },
  {
    id: "m2",
    name: "Pepperoni Pizza",
    price: 7,
    type: "pizza",
    image: pepperoniPizzaImage,
  },
  {
    id: "m3",
    name: "Caesar Salad",
    price: 5.5,
    type: "salad",
    image: caesarSaladImage,
  },
  {
    id: "m4",
    name: "California Roll",
    price: 8,
    type: "sushi",
    image: californiaRollImage,
  },
  {
    id: "m5",
    name: "Caprese Salad",
    price: 5,
    type: "salad",
    image: capreseSaladImage,
  },
  {
    id: "m6",
    name: "Cheeseburger",
    price: 6.5,
    type: "burger",
    image: cheeseburgerImage,
  },
  {
    id: "m7",
    name: "Hamburger",
    price: 6,
    type: "burger",
    image: hamburgerImage,
  },
  {
    id: "m8",
    name: "Chicago Pizza",
    price: 6.5,
    type: "pizza",
    image: chicagoPizzaImage,
  },
  {
    id: "m9",
    name: "Bacon Burger",
    price: 8,
    type: "burger",
    image: baconBurgerImage,
  },
  {
    id: "m10",
    name: "Hawaiian Pizza",
    price: 7,
    type: "pizza",
    image: hawaiianPizzaImage,
  },
];

export default function Meals(props) {
  const selectedCategory = props.selectedCategory;

  let filteredMeals = [];

  selectedCategory === "first"
    ? (filteredMeals = DUMMY_MEALS)
    : (filteredMeals = DUMMY_MEALS.filter((item) =>
        item.type.includes(selectedCategory)
      ));

  const mealsList = (
    <div className="p-8">
      <ul className="grid grid-cols-2 text-center gap-y-8 justify-items-center">
        {filteredMeals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            price={meal.price}
            type={meal.type}
            image={meal.image}
          />
        ))}
      </ul>
    </div>
  );
  return <div>{mealsList} </div>;
}
