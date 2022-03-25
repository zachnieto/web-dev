import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);

    return (
        <div>
            <div className="card p-2 list-group-item">
                <span className="ps-3"><b>Who to follow</b></span>
            </div>
                {who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }

        </div>
); }

export default WhoToFollowList
