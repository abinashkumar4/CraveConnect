import Itemslist from "./Itemslist";
import { useState } from "react";
import { CDN_URL } from "../../utils/constants";
export default function Restaurantcategory({data , showItems, setshowIdx}){
    console.log(showItems)
    
    function handleClick(){
        // if(showItems)setshowItems(false);
        // else setshowItems(true);
        setshowIdx();
      }
    console.log(data)
    return (
        <div className="bg-gray-200 my-5 shadow-lg w-8/12 m-auto" onClick={handleClick}>
        <div className=" flex justify-between">

            <span className="px-2 py-1">{data?.title+" "+"("+data?.itemCards.length+")"}</span>
            <span className="px-6 py-1">{"🔽"}</span>
            
        </div>
        <div>
            {/* {"accordion body"} */}
           {showItems && <Itemslist items={data?.itemCards} />}
        </div>
        </div>
    );
};