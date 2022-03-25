import TuitList from "../tuit-list";
import React from "react";
import WhatsHappening from "../tuit-list/WhatsHappening";

const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;