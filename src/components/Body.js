import { useState,useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () =>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState();

    useEffect(()=> {
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0529437&lng=77.6315163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log("Json Data ::",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
if (listOfRestaurants.length === 0){
    return <Shimmer />
}
    return (
        <div className="body">
        <div className="filter">
          <div className="search m-4 p-4">
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              data-testid="searchInput"
              className="border border-solid border-black"
            />
            <button
            onClick={()=>{
                const filteredRestaurant = listOfRestaurants.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(filteredRestaurant);
                
            }}
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"  
          >
            Search
          </button>
        </div>    
            {filteredRestaurants.map((restaurent) =>( <RestaurentCard key={restaurent.info.id} resData={restaurent} />
            ))}
        </div>

        </div>
    )
}

export default Body;