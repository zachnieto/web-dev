import NavigationSidebar from "./NavigationSidebar.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "./whotofollowlist/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-xxl-2 col-xl-2 col-lg-1 col-sm-2 ps-lg-0">
            ${NavigationSidebar()}
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-sm-10">
            ${ExploreComponent()}
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block mt-1">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
