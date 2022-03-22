import React from "react";
const PostSummaryItem = (
{
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../tuiter/react.png"
    }
}) => {
    return(
        <div className="card p-2 border-bottom-0">
                <div className="row">
                    <div className="col-10">
                        <span className="card-title text-muted d-block">
                            {post.topic}
                        </span>
                        <span className="card-title">
                            <b>{post.userName}</b> <i className="fas fa-check-circle"></i>
                        </span>
                        <span className="text-muted d-inline"> - {post.time}</span>
                        <span className="card-title text-muted d-block">
                            {post.tweets}
                        </span>
                        <span className="card-text d-block"><b>{post.title}</b></span>

                    </div>
                    <div className="col-2 my-auto">
                        <img src={post.image} className="img-fluid rounded" />
                    </div>
                </div>
            </div>
    );
}
export default PostSummaryItem;
