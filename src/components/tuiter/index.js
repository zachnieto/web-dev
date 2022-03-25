import {Outlet} from "react-router-dom";
import React from "react";
import NavigationSidebar from "./NavigationSidebar";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList";
const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-sm-2 ps-lg-0">
                <NavigationSidebar/>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-sm-10">
                <Outlet/>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
};
export default Tuiter;