import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {

    return(
        <div>
            <ul className="nav nav-pills vstack mt-1 mb-1 list-group">
                <li className="nav-item list-group-item"><a className="nav-link wd-left-nav-link"><i className="fab fa-twitter ps-2 pe-1"></i></a></li>
                <li className="nav-item list-group-item"><a className={`nav-link wd-left-nav-link ${active === 'home' && "active"}`}><i className="fas fa-home ps-2 pe-1"></i><div className="d-none d-xl-inline">Home</div></a></li>
                <li className="nav-item list-group-item"><a className={`nav-link wd-left-nav-link ${active === 'explore' && "active"}`}><i className="fas fa-hashtag ps-2 pe-1"></i><div className="d-none d-xl-inline">Explore</div></a></li>
                <li className="nav-item list-group-item"><a className={`nav-link wd-left-nav-link ${active === 'notifications' && "active"}`}><i className="fas fa-bell ps-2 pe-1"></i><div className="d-none d-xl-inline">Notifications</div></a></li>
                <li className="nav-item list-group-item"><a className={`nav-link wd-left-nav-link ${active === 'messages' && "active"}`}><i className="fas fa-envelope ps-2 pe-1"></i><div className="d-none d-xl-inline">Messages</div></a></li>
                <li className="nav-item list-group-item"><a className={`nav-link wd-left-nav-link ${active === 'bookmarks' && "active"}`}><i className="fas fa-bookmark ps-2 pe-1"></i><div className="d-none d-xl-inline">Bookmarks</div></a></li>
                <li className="nav-item list-group-item"><a className={`nav-link wd-left-nav-link ${active === 'lists' && "active"}`}><i className="fas fa-list ps-2 pe-1"></i><div className="d-none d-xl-inline">Lists</div></a></li>
                <li className="nav-item list-group-item"><a className={`nav-link wd-left-nav-link ${active === 'profile' && "active"}`}><i className="fas fa-user ps-2 pe-1"></i><div className="d-none d-xl-inline">Profile</div></a></li>
                <li className="nav-item list-group-item"><a className={`nav-link wd-left-nav-link ${active === 'more' && "active"}`}><i className="fas fa-minus-circle ps-2 pe-1"></i><div className="d-none d-xl-inline">More</div></a></li>
            </ul>
            <button className="btn btn-primary rounded-pill w-100">Tweet</button>
        </div>
    );
}
export default NavigationSidebar;
