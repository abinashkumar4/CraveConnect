
import { CDN_URL } from "../../utils/constants";
export default function Itemslist(items) {
  //console.log(items)
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  
  
  return (
    <div>
      <div>
        {items.items.map((it) => {
          return (
            <div
              key={it?.card?.info?.id}
              className="border-gray-400 border-b-2 my-2 flex justify-between"
              
            >
              <div className="w-6/12 px-2">
                <div className="py-2">
                  <span>{it?.card?.info?.name}</span>

                  <span >
                    -₹
                    {it?.card?.info?.price
                      ? it?.card?.info?.price / 100
                      : getRandomNumber(200, 600)}
                  </span>
                </div>
                <p className="text-xs ">{it?.card?.info?.description}</p>
              </div>
              <div className="px-3 text-center">
              <img src={CDN_URL + it?.card?.info?.imageId} className="h-20" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
