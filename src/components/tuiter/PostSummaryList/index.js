import React from "react";
import posts from "./posts.json"
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
    return (
        <div>
            {posts.map(post => {
                return(
                    <PostSummaryItem post={post}/>
                );
            })}
        </div>
); }

export default PostSummaryList
