import React from "react";

const WhoToFollowListItem = (
    {
         who = {
             avatarIcon: '../../../tuiter/nasa.png',
             userName: 'NASA',
             handle: 'NASA',
         }
     }
) => {
    return(
        <div className="card p-2 list-group-item">
            <div className="row">
                <div className="col-2 pe-0">
                    <img src={who.avatarIcon} className="img-fluid rounded-circle w-100" />
                </div>
                <div className="col-xl-6 col-lg-6">
                    <b>{who.userName}</b><i className="fas fa-check-circle"></i><br/>
                    <span className="text-muted">@{who.handle}</span>
                </div>
                <div className="col-xl-4 col-lg-4 my-auto ps-xl-4">
                    <button className="btn btn-primary rounded-pill ">Follow</button>
                </div>
            </div>
        </div>
    )
};
export default WhoToFollowListItem;
