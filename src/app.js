import React ,{ lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
const Grocery = lazy(() => import("./components/Grocery.js"));



const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path : "/",
    element: <Applayout />,
    children:[
      {
        path :"/",
        element: <Body />
      },
      {
        path :"/About",
        element: <About />,
    
      },
      {
        path :"/contact",
        element: <Contact />,
    
      },
      {
        path :"/restaurant/:id",
        element: <RestaurantMenu />,
    
      },
      {
        path :"/Grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
      }
    ]
  }
 
]);





// Create root and render the Header component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
