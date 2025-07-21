import App from "@/App";
import AboutPage from "@/NavbarPages/AboutPage";
import ContackPage from "@/NavbarPages/ContackPage";
import OurTeampage from "@/NavbarPages/OurTeampage";
import ServicePage from "@/NavbarPages/ServicePage";

import Home from "@/pages/Home/Home";


import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<AboutPage></AboutPage>
            },
            {
                path:"/service",
                element:<ServicePage></ServicePage>
            },
            {
                path:"ourteam",
                element:<OurTeampage></OurTeampage>
            },
            {
                path:"/portfolio",
                element:<div>Portfolio Page</div>
            },
            {
                path:"/contact",
                element:<ContackPage></ContackPage>
            }
        ]
    }
])

export default routes;