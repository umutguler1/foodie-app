import { Fragment } from "react";

import { useNavigate } from "react-router-dom";
import HomePageQuote from "../HomePageQuote";

export default function HomePage() {
  const navigate = useNavigate();
  const toTheMenuHandler = () => {
    navigate("/menu");
  };

  return (
    <Fragment>
      <HomePageQuote />
      <button
        className="bg-custom-yellow font-bold text-2xl px-2 py-4 w-fit place-self-center rounded-lg transition-all hover:bg-custom-orange hover:text-custom-yellow hover:scale-125 -mt-2"
        onClick={toTheMenuHandler}
      >
        LET'S SEE THE MENU!
      </button>
    </Fragment>
  );
}
