import React, { createContext, useState } from "react";
import food_items from "../food";
export const dataContext = createContext();

const UserContext = ({ children }) => {
  let [cate, setCate] = useState(food_items);
  let [input, setInput] = useState("");
  let [showCart, setShowCart] = useState(false); // avi start me isse false rakhna hai.

  let data = { input, setInput, cate, setCate, showCart, setShowCart }; // yaha pass v kr diya data jo useContext me use hoga.
  return (
    <>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </>
  );
};

export default UserContext;
