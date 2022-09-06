import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import { ToastContainer, toast } from "react-toastify";
import { Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MealItem(props) {
  const dispatch = useDispatch();

  const addButtonNotClickedClasses =
    "bg-custom-orange px-4 py-2 text-lg w-fit rounded-lg hover:scale-125 hover:drop-shadow-lg transition-all font-semibold place-self-center";
  const addButtonClickedClasses =
    "bg-custom-black text-custom-yellow scale-90 px-4 py-2 text-lg w-fit rounded-lg transition-all font-semibold place-self-center";

  const [buttonClasses, setButtonClasses] = useState(
    addButtonNotClickedClasses
  );

  const { id, name, price, type, image } = props;

  const addToCartHandler = (event) => {
    dispatch(cartActions.addToCart({ id, name, price, type }));

    toast.success("Added to Cart!", {
      containerId: id,
      position: "top-right",
      autoClose: 300,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

    setButtonClasses(addButtonClickedClasses);

    setTimeout(() => {
      setButtonClasses(addButtonNotClickedClasses);
    }, 150);
  };

  return (
    <li className="flex w-[600px] drop-shadow-md">
      <ToastContainer
        enableMultiContainer
        containerId={id}
        position="top-right"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
      <div className="grid gap-y-8 bg-custom-yellow rounded-l-lg p-2 text-center place-content-center w-[300px]">
        <h3 className="text-xl font-bold">{name}</h3>
        <p>Price:{` $${price.toFixed(2)}`}</p>
        <button id={id} onClick={addToCartHandler} className={buttonClasses}>
          Add to Cart
        </button>
      </div>
      <div className="">
        <img
          src={image}
          alt=""
          className="h-[250px] w-[450px] object-cover rounded-r-lg"
        ></img>
      </div>
    </li>
  );
}
