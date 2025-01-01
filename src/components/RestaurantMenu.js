import React from "react";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { RESTAURANT_MENU } from "../../utils/constants.js";
import { useParams } from "react-router";
import useResinfo from "../../utils/useResinfo.js";
import Restaurantcategory from "./Restaurantcategory.js";

const RestaurantMenu = () => {

let {id} = useParams();
let menu = useResinfo(id);
let name = menu?.cards[menu?.cards.length-1]?.card?.card?.name;
//const [showItems,setshowItems] = useState(false);
const [showIdx, setshowIdx] = useState(0)

if(menu==null){
    return <Shimmer />
}
let resmenu = menu?.cards[2]?.card?.card?.itemCards;

let filteredlist = menu?.cards.filter(m => m?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


return (
    <div className="res-menu text-center">
    <h1 className="my-5 text-2xl">{name}</h1>
    {/* <ul>
    {resmenu.map(cus => <li key={cus?.card?.info?.id}>{cus?.card?.info?.name}</li>)}
    </ul> */}
      
        {
            filteredlist.map((category , index) => <Restaurantcategory key = {category?.card?.card?.info?.id} data = {category?.card?.card} showItems={showIdx===index?true:false} setshowIdx = {() => setshowIdx(index)} />)
        }
     
     
    
    </div>
)


}

export default RestaurantMenu