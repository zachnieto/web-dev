import React from "react";
import {useDispatch} from "react-redux";




const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };


    return (

            <div className="row">
                <div className="col-3 no-declaration">
                    <i className="fas fa-comment wd-white"/>
                    <span class="text-white"> {tuit.stats.comments} </span>
                </div>
                <div className="col-3 no-declaration">
                    <i className="fas fa-retweet wd-white"/>
                    <span className="text-white"> {tuit.stats.retuits} </span>
                </div>
                <div className="col-3" onClick={likeTuit}>
                    <div className="hover-hand">
                        <i className={`fas fa-heart ${tuit.liked ? "wd-red" : "wd-white"}`}/>
                        <span className="text-white hover-hand"> {tuit.stats.likes} </span>
                    </div>
                </div>
                <div className="col-3">
                    <i className="fas fa-share wd-white"/>
                </div>
            </div>
    );
}

export default TuitStats;