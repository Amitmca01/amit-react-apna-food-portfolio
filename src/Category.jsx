import React from "react";
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { TbToolsKitchen3 } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerThin } from "react-icons/pi";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 2,
    name: "breakfast",
    icon: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-orange-400" />
    ),
  },
  {
    id: 3,
    name: "soups",
    icon: <TbSoup className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 4,
    name: "pasta",
    icon: <GiNoodles className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 5,
    name: "Amain_course",
    icon: <TbToolsKitchen3 className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <GiFullPizza className="w-[60px] h-[60px] text-orange-400" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <PiHamburgerThin className="w-[60px] h-[60px] text-orange-400" />,
  },
];

export default Categories;
