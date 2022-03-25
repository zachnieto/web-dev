
import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
    return (`
            <div>
                ${posts.map(post => PostSummaryItem(post)).join('')}
            </div>
`); }

export default PostSummaryList
