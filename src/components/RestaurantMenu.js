import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RetaurantCategory";

const RestaurantMenu = () =>{

    const{resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    if (resInfo === null)  return <Shimmer/>

   const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
   const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   console.log('Menu',resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
        <div className="text-center">
            <h1 className="font-bold my-7 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
            {categories.map((category, index) => (
                <RestaurantCategory 
                key= {category?.card?.title} 
                data={category?.card?.card}
                showIndex={index === showIndex ? true : false}
                setShowIndex={()=>{setShowIndex(index)}}
                />
            ))}
        </div>
  )
}

export default RestaurantMenu;