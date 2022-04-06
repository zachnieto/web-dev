import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../../../actions/tuits-actions";




const TuitListItem = ({tuit}) => {

    const dispatch = useDispatch();

    return (
        <div className="card p-2 border-bottom-0">

            <div className="row">
                <div className="col-2">
                    <img src={tuit.avatarImage} className="rounded img-fluid mx-auto"/>
                </div>
                <div className="col-10 ps-0">
                    <span className="card-title text-white">
                            <b>{tuit.postedBy.username}</b>
                        </span>
                    <span className="text-muted d-inline ps-1">@{tuit.handle}</span>

                    <i onClick={() => deleteTuit(dispatch, tuit)} className="fas fa-ban fa-pull-right wd-white"/>

                    <span className="card-text d-block text-white"><b>{tuit.tuit}</b></span>
                    {'attachments' in tuit && ('video' in tuit.attachments ?
                        <iframe className="embed-responsive" width="100%" height="300px"
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}/>
                    :
                        <img className="img-fluid" src={tuit.attachments.image} alt=""/>)}

                    <TuitStats tuit={tuit}/>
                </div>
            </div>

        </div>
    );
}

export default TuitListItem;