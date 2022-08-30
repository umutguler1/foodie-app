import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import foodLogo from "../../assets/food-logo.jpg";

const navItemClasses =
  "flex bg-custom-yellow hover:bg-custom-black hover:text-custom-yellow transition-all rounded-full py-2 px-8 mx-2";
const navItemActiveClasses = `${navItemClasses} font-bold drop-shadow-md`;

export default function Header() {
  console.log(foodLogo);
  const cartItems = useSelector((state) => state.cart.items);

  const numberOfCartItems = cartItems.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  const cartItemQuantity = (
    <p className="text-custom-yellow font-bold ml-1 rounded-full bg-custom-orange px-2">
      {numberOfCartItems}
    </p>
  );

  return (
    <div className="flex bg-custom-orange drop-shadow-xl h-16 w-full items-center justify-between px-16">
      <div>
        <NavLink to={"/"}>
          <img src={foodLogo} alt="" className="h-16" />
        </NavLink>
      </div>
      <div>
        <nav className="flex text-lg items-center">
          <NavLink
            to={"/menu"}
            className={(navData) =>
              navData.isActive ? navItemActiveClasses : navItemClasses
            }
          >
            All Meals
          </NavLink>
          <NavLink
            to={"/cart"}
            className={(navData) =>
              navData.isActive ? navItemActiveClasses : navItemClasses
            }
          >
            Cart - {">"}
            {cartItemQuantity}
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
