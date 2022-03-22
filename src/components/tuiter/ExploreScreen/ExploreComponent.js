
import React from "react";
import PostSummaryList from "../PostSummaryList";
import "./explore.css"

const ExploreComponent = () => {
    return(
        <div className="col-xxl-6 col-xl-6 col-lg-7 col-sm-10">
         <div className="wd-top-bar m-1">
            <input className="form-control rounded-pill wd-search-bar" placeholder="Search Twitter"/>
            <i className="fas fa-search"></i>
            <a href="explore-settings.html" className="my-auto"><i className="fas fa-cog fa-lg fa-2x ps-3"></i></a>
        </div>

        <ul className="nav nav-tabs mb-1">
            <li className="nav-item"><a className="nav-link active">For you</a></li>
            <li className="nav-item"><a className="nav-link">Trending</a></li>
            <li className="nav-item"><a className="nav-link">News</a></li>
            <li className="nav-item"><a className="nav-link">Sports</a></li>
            <li className="nav-item d-none d-md-inline"><a className="nav-link">Entertainment</a></li>
        </ul>

        <div className="wd-image">
        <img className="w-100" src="../../../tuiter/starship.jpg"/>
        <h2 className="wd-image-text">SpaceX's Starship</h2>
        </div>

        {PostSummaryList()}
        </div>
    
    );
}
export default ExploreComponent;
