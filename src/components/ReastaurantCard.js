import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    
    const{resdata} = props;
    const{name,cuisines,avgRating} =resdata?.info;
    
  return (
    <div className="res-card rounded m-4 p-4 w-[220px] h-[500px] hover:bg-gray-200 transition duration-300  bg-gray-50">
        <img className="res-logo1 h-[250px] pb-5 pt-0 rounded"
       src = {CDN_URL+resdata.info.cloudinaryImageId}
       alt="res-logo" />
        <h3 className="font-bold py-1 px-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>  
      <h4>{avgRating}</h4>
      <h4>40 minutes</h4>
    </div>
  );
};


//Higher order components
//take a component as input and add some more flavours to it
//return a new modifed component
const withfastDelivery = (RestaurantCard) => {
  return (props) => {
    return (
      <>
      <label className="bg-red-700 text-white rounded">Fast delivery</label>
      <RestaurantCard {...props} />
      </>
    )
  }
}

export {withfastDelivery};
export default RestaurantCard;