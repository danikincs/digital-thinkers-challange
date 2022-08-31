import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import routes from '../config/routes';
import { ToastContainer } from 'react-toastify';

const Application: React.FunctionComponent<{}> = props => {

    return (
        <div className="App">
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    {routes.map((route, index) => {
                        /**
                         * key: map returns awlays need a key
                         * path: the routes path
                         * exact: exact route or not
                         * render: function to parse any props the component needs. Only render component if not private, or user loged in, else redirect
                         */
                        return(
                            <Route 
                                key={index} 
                                path={route.path} 
                                element={< route.component {...props} {...route.props}/>}
                            />
                        )
                    })}
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default Application;