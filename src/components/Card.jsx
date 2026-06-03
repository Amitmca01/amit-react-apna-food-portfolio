import React from "react";

import { useDispatch } from "react-redux"; // ✅ YE LINE ADD KARO
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import image1 from "../assets/image1.avif";

const Card = ({ name, image, id, price, type }) => {
  const dispatch = useDispatch(); // ✅ UNCOMMENT KARO - ye line active karo
  return (
    <div className="w-[300px] h-[360px] bg-white p-5 shadow-lg rounded-lg gap-3 font-semibold">
      <div className="w-[100%] h-[60%] overflow-hidden">
        <img src={image} alt="" className="object-cover" />
      </div>

      <div className="text-2xl pt-3 pb-3">{name}</div>

      <div className="w-full flex justify-between items-center">
        <div className="text-lg text-orange-500">Rs {price}/-</div>
        <div className="flex justify-between items-center gap-2 text-lg text-orange-500">
          {/* veg & nonVeg code start  */}
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}{" "}
          <span>{type}</span>
          {/* veg & nonVeg code end  */}
        </div>
      </div>

      <button
        className="bg-orange-400 hover:bg-orange-300 transition-all p-2 w-[100%] text-mg text-white rounded cursor-pointer"
        onClick={() =>
          dispatch(
            AddItem({
              id: id,
              name: name,
              price: price,
              image: image,
              qty: 1,
            }),
          )
        }
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
