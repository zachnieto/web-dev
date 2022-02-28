
const PostSummaryItem = (post) => {
    return(`
        <div class="card p-2 border-bottom-0">
                <div class="row">
                    <div class="col-10">
                        <span class="card-title text-muted d-block">
                            ${post.topic}
                        </span>
                        <span class="card-title">
                            <b>${post.userName}</b> <i class="fas fa-check-circle"></i>
                        </span>
                        <span class="text-muted d-inline"> - ${post.time}</span>
                        <span class="card-title text-muted d-block">
                            ${post.tweets}
                        </span>
                        <span class="card-text d-block"><b>${post.title}</b></span>

                    </div>
                    <div class="col-2 my-auto">
                        <img src=${post.image} class="img-fluid rounded" />
                    </div>
                </div>
            </div>
    `);
}
export default PostSummaryItem;
