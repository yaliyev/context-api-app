import Basket from "../pages/User/Basket";
import Categories from "../pages/User/Categories";
import UserRoot from '../pages/User/UserRoot';
export const ROUTES = [
    {
        path: '/',
        element: <UserRoot/>,
        children:[
            {
                index: true,
                element: <Categories/>
            },
            {
                path:'basket',
                element:<Basket/>
            }
        ]
    }
];