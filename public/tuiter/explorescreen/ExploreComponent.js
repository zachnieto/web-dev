import PostSummaryList from "./postsummarylist/index.js";

const ExploreComponent = () => {
    return(`
    
         <div class="wd-top-bar m-1">
            <input class="form-control rounded-pill wd-search-bar" placeholder="Search Twitter"/>
            <i class="fas fa-search"></i>
            <a href="explore-settings.html" class="my-auto"><i class="fas fa-cog fa-lg fa-2x ps-3"></i></a>
        </div>

        <ul class="nav nav-tabs mb-1">
            <li class="nav-item"><a class="nav-link active">For you</a></li>
            <li class="nav-item"><a class="nav-link">Trending</a></li>
            <li class="nav-item"><a class="nav-link">News</a></li>
            <li class="nav-item"><a class="nav-link">Sports</a></li>
            <li class="nav-item d-none d-md-inline"><a class="nav-link">Entertainment</a></li>
        </ul>

        <div class="wd-image">
        <img class="w-100" src="../starship.jpg"/>
        <h2 class="wd-image-text">SpaceX's Starship</h2>
        </div>

        ${PostSummaryList()}
    
    `);
}
export default ExploreComponent;
