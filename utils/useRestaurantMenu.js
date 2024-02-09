import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);

 useEffect(() => {
    fetchData();
 },[]);
 
 const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0529437&lng=77.6315163&restaurantId="+resId+"&catalog_qa=undefined");
    const json = await data.json();
    setResInfo(json.data);
 }

 return resInfo;
}
export default useRestaurantMenu;