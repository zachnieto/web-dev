import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
import React from "react";

const WhoToFollowList = () => {
    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
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
