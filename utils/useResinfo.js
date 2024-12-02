import { useState ,useEffect } from "react";
import { RESTAURANT_MENU } from "./constants.js";

const useResinfo = (resid) => {
    const [resinfo,setrestinfo] = useState(null);
    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () => {
       try{
        let path = RESTAURANT_MENU+resid;
        
        let jsonData = await fetch(path);
        
        let data = await jsonData.json();
        let newdata = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
       
        
        setrestinfo(newdata);
      }
      catch(e){
        console.log(e.message)
      }
    }

    return resinfo;

}

export default useResinfo;