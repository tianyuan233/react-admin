import { useRoutes } from 'react-router-dom';
import Index from "../layout/MainLayout";


export default function ThemeRoutes() {
    return useRoutes([
        {
            path:'/',
            element: <Index/>,
        }
    ]);
}