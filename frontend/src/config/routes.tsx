import IRoute from "../interfaces/routes.interface";
import Home from "../pages/home.page";

const routes: IRoute[] = [
    {
        path:'/',
        name:'Home',
        component: Home,
        exact:false,
        private:false
    },
    {
        path:'*',
        name:'NotFound',
        component: NotFound,
        exact:false,
        private:false
    },
];

//simple not found page
function NotFound() {
    return(
        <div>
            <p>Not found</p>
        </div>
    )
}

export default routes;