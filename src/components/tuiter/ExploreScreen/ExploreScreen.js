import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";
const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <NavigationSidebar active="explore"/>
            <ExploreComponent/>
            <WhoToFollowList/>
        </div>
    );
};
export default ExploreScreen;
