import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import food_items from "../food";
import { dataContext } from "../context/UserContext";

const Home = () => {
  const { input } = useContext(dataContext);
  let { cate, setCate } = useContext(dataContext);
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
    <div className=" bg-slate-200 w-full  min-h-screen">
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
    </div>
  );
};

export default Home;
