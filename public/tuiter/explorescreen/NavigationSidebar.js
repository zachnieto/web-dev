const NavigationSidebar = () => {
    return(`
            <ul class="nav nav-pills vstack mt-1 mb-1 list-group">
                <li class="nav-item list-group-item"><a class="nav-link wd-left-nav-link"><i class="fab fa-twitter ps-2 pe-1"></i></a></li>
                <li class="nav-item list-group-item"><a class="nav-link wd-left-nav-link"><i class="fas fa-home ps-2 pe-1"></i><div class="d-none d-xl-inline">Home</div></a></li>
                <li class="nav-item list-group-item"><a class="nav-link active wd-left-nav-link"><i class="fas fa-hashtag ps-2 pe-1"></i><div class="d-none d-xl-inline">Explore</div></a></li>
                <li class="nav-item list-group-item"><a class="nav-link wd-left-nav-link"><i class="fas fa-bell ps-2 pe-1"></i><div class="d-none d-xl-inline">Notifications</div></a></li>
                <li class="nav-item list-group-item"><a class="nav-link wd-left-nav-link"><i class="fas fa-envelope ps-2 pe-1"></i><div class="d-none d-xl-inline">Messages</div></a></li>
                <li class="nav-item list-group-item"><a class="nav-link wd-left-nav-link"><i class="fas fa-bookmark ps-2 pe-1"></i><div class="d-none d-xl-inline">Bookmarks</div></a></li>
                <li class="nav-item list-group-item"><a class="nav-link wd-left-nav-link"><i class="fas fa-list ps-2 pe-1"></i><div class="d-none d-xl-inline">Lists</div></a></li>
                <li class="nav-item list-group-item"><a class="nav-link wd-left-nav-link"><i class="fas fa-user ps-2 pe-1"></i><div class="d-none d-xl-inline">Profile</div></a></li>
                <li class="nav-item list-group-item"><a class="nav-link wd-left-nav-link"><i class="fas fa-minus-circle ps-2 pe-1"></i><div class="d-none d-xl-inline">More</div></a></li>
            </ul>
            <button class="btn btn-primary rounded-pill w-100">Tweet</button>
    `);
}
export default NavigationSidebar;
