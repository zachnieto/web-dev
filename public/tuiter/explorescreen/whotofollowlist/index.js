import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <div class="list-group">
                <div class="card p-2 list-group-item">
                    <span class="ps-3"><b>Who to follow</b></span>
                </div>
                ${who.map(who => WhoToFollowListItem(who)).join('')}
    
            </div>
`); }

export default WhoToFollowList
