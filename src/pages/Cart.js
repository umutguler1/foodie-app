import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";

export default function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  const toTheMenuHandler = () => {
    navigate("/menu");
  };

  return (
    <Fragment>
      <h2 className="text-5xl m-4 px-6 py-3 bg-custom-orange w-fit rounded-lg place-self-center drop-shadow-lg font-semibold">
        ~~YOUR CART~~
      </h2>
      <ul className="grid gap-y-2">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            itemTotalPrice={item.itemTotalPrice}
            quantity={item.quantity}
          />
        ))}
      </ul>
      {cartItems.length > 0 && (
        <p className="text-2xl font-semibold m-4 px-4 py-2 bg-custom-orange w-fit rounded-lg place-self-center drop-shadow-lg">
          TOTAL PRICE: ${cartTotalPrice.toFixed(2)}
        </p>
      )}
      {cartItems.length === 0 && (
        <div className="flex justify-center">
          <p className="text-xl">
            Your cart is empty. Let's fill it! {">>>"}
            <button
              onClick={toTheMenuHandler}
              className="rounded lg py-2 px-4 bg-custom-yellow font-bold text-2xl drop-shadow-lg ml-4 transition-all hover:bg-custom-black hover:text-custom-yellow"
            >
              MENU
            </button>
          </p>
        </div>
      )}
    </Fragment>
  );
}
