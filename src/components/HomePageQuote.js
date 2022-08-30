import foods1 from "../assets/fast-food-set1.jpg";
import foods2 from "../assets/fast-food-set2.jpg";

export default function HomePageQuote() {
  return (
    <div className="grid text-center bg-gradient-to-b from-custom-orange to-custom-yellow -mt-2">
      <div className="flex items-center justify-between">
        <img
          src={foods1}
          alt=""
          width={400}
          className="rounded-br-[40px]"
        ></img>
        <p className="bg-custom-yellow w-full font-bold text-4xl px-8 py-4 rounded-r-full drop-shadow-xl">
          The best taste
        </p>
      </div>
      <div className="flex items-center justify-around -mt-20">
        <p className="bg-custom-black w-full text-custom-yellow font-bold text-4xl px-8 py-4 rounded-l-full drop-shadow-xl">
          For the best price
        </p>
        <img
          src={foods2}
          alt=""
          width={400}
          className="rounded-tl-[40px]"
        ></img>
      </div>
    </div>
  );
}
