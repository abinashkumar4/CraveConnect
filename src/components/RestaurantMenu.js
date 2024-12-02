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
//console.log(name)
if(menu==null){
    return <Shimmer />
}
let resmenu = menu?.cards[2]?.card?.card?.itemCards;
console.log(resmenu)
let filteredlist = menu?.cards.filter(m => m?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log(filteredlist)

return (
    <div className="res-menu text-center">
    <h1 className="my-5 text-2xl">{name}</h1>
    <ul>
    {resmenu.map(cus => <li key={cus?.card?.info?.id}>{cus?.card?.info?.name}</li>)}
    </ul>
    {/* {
        <Restaurantcategory data={} />
    } */}
    </div>
)


}

export default RestaurantMenu