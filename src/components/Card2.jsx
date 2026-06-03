import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";

const Card2 = () => {
  return (
    <div className="w-full h-[120px] flex justify-between p-2 shadow-lg">
      {/* order image discriotion and quantity code start */}
      <div className="w-[60%] h-full  flex gap-5">
        {/* image code start */}
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image1} alt="" className="object-cover" />
        </div>
        {/* image code end */}

        {/* +- code start */}
        <div className="w-[40%] h-full flex flex-col gap-5">
          <div className="text-lg text-gray-600 font-semibold">Pancake</div>
          <div className="w-[85px] h-[40px] bg-slate-400 flex font-semibold border-2 text-xl border-orange-300 rounded-lg overflow-hidden shadow-lg">
            <button className="w-[30%] h-full text-orange-400 hover:bg-gray-100 cursor-pointer bg-white flex justify-center items-center">
              -
            </button>
            <div className="w-[40%] h-full text-orange-400 bg-slate-200 flex justify-center items-center">
              1
            </div>
            <div className="w-[30%] h-full text-orange-400 hover:bg-gray-100 cursor-pointer bg-white flex justify-center items-center">
              +
            </div>
          </div>
        </div>
        {/* +- code end */}
      </div>
      {/* order image discriotion and quantity code end */}

      <div className="flex flex-col items-end gap-5">
        <span className="text-xl text-orange-400 font-semibold">Rs 599/-</span>
        <RiDeleteBin6Line className="w-[25px] h-[35px] cursor-pointer text-red-400" />
      </div>
    </div>
  );
};

export default Card2;
