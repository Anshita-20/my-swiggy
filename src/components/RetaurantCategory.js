import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showIndex, setShowIndex}) => {
// toggle variable is used to toggle accordion and showIndex is used for collapsing all other accordian expect the one which is being clicked. 
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setToggle(!toggle);
  }

    return (
        <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
            <span>⬇️</span>
        </div>
        {
          showIndex && toggle && <ItemList item= {data.itemCards} />
        }
        </div>
        </div>
    )
}

export default RestaurantCategory;