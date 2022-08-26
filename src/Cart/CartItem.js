import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

export default function CartItem(props) {
  const { id, name, price, itemTotalPrice, quantity } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };
  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <li className="grid gap-y-2 bg-custom-yellow border-2 border-custom-orange rounded-lg p-2 drop-shadow-md text-center place-content-center place-self-center w-[300px]">
      <h3 className="text-xl font-semibold">
        {name} x{quantity}
      </h3>
      <p>Price:{` $${itemTotalPrice.toFixed(2)}`}</p>
      <div className="flex place-content-center gap-x-4">
        <button
          onClick={addToCartHandler}
          className="rounded lg pb-1 px-2 bg-custom-orange font-bold text-xl drop-shadow-lg"
        >
          +
        </button>
        <button
          onClick={removeItemFromCartHandler}
          className="rounded lg pb-1 px-2 bg-custom-orange font-bold text-xl drop-shadow-lg"
        >
          -
        </button>
      </div>
    </li>
  );
}
