
const WhoToFollowListItem = (who) => {
    return(`
        <div class="card p-2 list-group-item">
            <div class="row">
                <div class="col-2 pe-0">
                    <img src=${who.avatarIcon} class="img-fluid rounded-circle w-100" />
                </div>
                <div class="col-xl-6 col-lg-6">
                    <b>${who.userName}</b><i class="fas fa-check-circle"></i><br> 
                    <span class="text-muted">${who.handle}</span>
                </div>
                <div class="col-xl-4 col-lg-4 my-auto ps-xl-4">
                    <button class="btn btn-primary rounded-pill ">Follow</button>
                </div>
            </div>
        </div>
    `);
}
export default WhoToFollowListItem;
