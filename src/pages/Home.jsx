import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import food_items from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  const { input } = useContext(dataContext);
  let { cate, setCate, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category == "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category,
      );
      setCate(newList);
    }
  }

  return (
    <div className="bg-slate-200 w-full min-h-screen flex flex-col gap-10 pb-10">
      {/* Navigation start */}
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-6 p-4 w-full">
          {Categories.map((item) => {
            return (
              <div
                className="w-1/3 sm:w-[45%] md:w-[10%] lg:w-[10%] h-[120px] bg-white p-5 flex flex-col items-center justify-center rounded-md shadow-md hover:bg-orange-200 hover:text-white cursor-pointer transition-all"
                // filter item code at click on All breakfast, soup, pasta, etc, CODE START...
                onClick={() => filter(item.name)}
                // filter item code at click on All breakfast, soup, pasta, etc, CODE END....
              >
                <>
                  <div className="[&>svg]:w-[50px] [&>svg]:h-[50px]">
                    {item.icon}
                  </div>
                  <div className="text-[15px] font-semibold text-center truncate w-full text-gray-600 rounded-lg pt-2">
                    {item.name}
                  </div>
                </>
              </div>
            );
          })}
        </div>
      ) : null}
      {/* Navigation end */}

      {/* Item thumb start */}

      {/* Item thumb end */}

      {/* Cards start */}
      <div className="w-full flex flex-wrap gap-20 px-5 justify-center items-center">
        {cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>
      {/* Cards send */}

      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 p-6 ${showCart ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-orange-400 text-[18px] font-semibold">
            Order items..
          </span>
          <RxCross2
            className="w-[30px] h-[30px] text-orange-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        <Card2 /> // Work in progress: card module.
        {/* <Card2 /> isse avi yaha se remove kr alag le jayege..., */}
      </div>
    </div>
  );
};

export default Home;
