import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";


const TuitStats = ({tuit}) => {

    const dispatch = useDispatch();

    return (

            <div className="row">
                <div className="col-3 no-declaration">
                    <i className="fas fa-comment wd-white"/>
                    <span className="text-white"> {tuit.comments} </span>
                </div>
                <div className="col-3 no-declaration">
                    <i className="fas fa-retweet wd-white"/>
                    <span className="text-white"> {tuit.retuits} </span>
                </div>
                <div className="col-3" onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    liked: !tuit.liked,
                    likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
                })}>
                    <div className="hover-hand">
                        <i className={`fas fa-heart ${tuit.liked ? "wd-red" : "wd-white"}`}/>
                        <span className="text-white hover-hand"> {tuit.likes} </span>
                    </div>
                </div>
                <div className="col-3">
                    <i className="fas fa-share wd-white"/>
                </div>
            </div>
    );
}

export default TuitStats;