import RestaurantCard,{withfastDelivery} from "./ReastaurantCard";
import resObj from "../../utils/mockdata";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import useOnlinestatus from "../../utils/useOnlinestatus.js";

const FastDeliveryRes = withfastDelivery(RestaurantCard);
const Body = () => {

    const [resList, setresList] = useState([]);
    const [filteredRest,setfilteredRest] = useState([]);
    const [searchText,setsearchText] = useState("");
    //if we have to do something after rendering the component we use useEffect
    //if no depency array then useeffect is called on every component reder
    //if emepty array[] then useeffect is called once
    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
        );
        if (!data.ok) {
          console.log(`Error: ${data.status}`);
        }
        const json = await data.json();
       
        let newresList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setresList(newresList);
        setfilteredRest(newresList);
       
       
      } catch (err) {
        console.log(`Error : ${err.message}`);
      }
    };

    const isOnline = useOnlinestatus();
    if(isOnline===false){
      return (
        <h1>Looks line you are offline</h1>
      )
    }
  if(resList.length === 0){
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex">
      <div className="search m-5">
        <input type="text" className="ml-4 border border-solid border-black" value={searchText} onChange={(e) => setsearchText(e.target.value)}/>
        <button className="py-1 px-2 ml-2 bg-orange-200 rounded transition duration-300 hover:bg-orange-400" onClick={()=> {
          const restFiltered = resList.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())}
          );
         
          setfilteredRest(restFiltered);
        }}>Search</button>

      </div>
      <div  >
        <button
          className="flex border border-solid border-black px-3 py-1 mt-5 bg-gray-100 rounded transition duration-1000 hover:bg-gray-300"
          onClick={() => {
            const filteredList = resList.filter((rest) => rest.info.avgRating > 4.5);
            setfilteredRest(filteredList);
            
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRest.map((restaurant) => (
          
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            {restaurant.info.sla.deliveryTime < 25 ? <FastDeliveryRes resdata={restaurant} />:<RestaurantCard  resdata={restaurant} />}
           </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
