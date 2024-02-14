import { useState,useEffect } from "react";
import RestaurentCard, {withPromotedLabel} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () =>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

    // console.log(filteredRestaurants);
    useEffect(()=> {
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0529437&lng=77.6315163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>Looks like you are offline!! Please check your internet connection.</h1>
        )
    }

    if (listOfRestaurants?.length === 0){
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
              className="border border-solid border-black rounded-lg"
            />
            <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"  
            onClick={() => {
                // search is happening based on Restaurant name
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        </div> 
        <div className="flex flex-wrap">   
            {filteredRestaurants.map((restaurent) =>( 
            <Link key={restaurent?.info.id} to={"/restaurants/"+restaurent?.info.id}>
                {restaurent?.info?.isOpen ? (
                   < RestaurantCardPromoted resData={restaurent.info} />
                    ):(
                        <RestaurentCard  resData={restaurent.info} />
                    )}
                </Link>
            ))}
        </div>
        </div>
    )
}

export default Body;