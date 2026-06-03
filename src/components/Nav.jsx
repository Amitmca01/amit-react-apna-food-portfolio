import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from "../context/UserContext";
import food_items from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);
  useEffect(() => {
    const newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase()),
    );

    setCate(newlist);
  }, [input]);

  // store ke item ko access krne ke leye..
  let items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <>
      <div className="w-full h-[100px] flex justify-between items-center px-8">
        <div className="w-[60px] h-[60px] p-5 bg-white flex justify-center items-center rounded-md shadow-xl">
          <MdFastfood className="w-[30px] h-[30px] text-orange-400" />
        </div>
        <form
          className="w-[60%] h-[60px] md:w-[70%] bg-white flex items-center px-5 gap-5 rounded-md shadow-md"
          // <---- START, when you search in input then prevent to refresh the page.
          onSubmit={(e) => e.preventDefault()}
          // <---- END, when you search in input then prevent to refresh the page.
        >
          <IoSearch className="text-[20px] text-orange-500 w-[20px]" />
          <input
            type="text"
            placeholder="Search Items..."
            className="w-[100%] outline-none text-[16px] md:text-[20px]"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>

        <div
          className="w-[60px] h-[60px] p-5 bg-white flex justify-center cursor-pointer items-center rounded-md shadow-xl relative"
          onClick={() => {
            setShowCart(true);
          }}
        >
          <span className="absolute top-1 right-3 text-orange-500 font-bold">
            {items.length}
          </span>
          <FiShoppingBag className="w-[30px] h-[30px] text-orange-400" />
        </div>
      </div>
    </>
  );
};

export default Nav;
