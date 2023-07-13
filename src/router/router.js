import {RouterProvider} from "react-router";
import routerList from "./routerList";

export default function Router(){
    return(
        <>
            <RouterProvider router={routerList} />
        </>
    )
}