import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Battle from "../pages/battle";
import Detail from "../pages/detail";
import Home from "../pages/home";
import Mypokemon from "../pages/mypokemon";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail/:status/:pokeId",
      element: <Detail />,
    },
    {
      path: "/mypokemon",
      element: <Mypokemon />,
    },
    {
      path: "/battle/:pokeId",
      element: <Battle />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
