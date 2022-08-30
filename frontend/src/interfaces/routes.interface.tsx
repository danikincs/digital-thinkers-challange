/**
 * path: Path in the URL 
 * name: Actual name of the page
 * exact: Wheter or not the path is exact
 * component: Component which we are exporting
 * props: Optional, props passed
 */
 export default interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    private:boolean,
    props?: any;
}