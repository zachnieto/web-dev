import React, {useState} from "react";
import './tuits.css';
import {useDispatch} from "react-redux";
import {createTuit} from "../../../actions/tuits-actions";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit', postedBy: {username: 'Tester'}, likes: 10, comments: 9});

    return (
        <div className="row">
            <div className="col-1 pe-0">
                <img className="img-fluid rounded-circle" src="../../../tuiter/chad.jpg" alt=""/>
            </div>
            <div className="col-11">
              <textarea className="form-control w-100 bg-gray wd-gray" value={newTuit.tuit}
                        placeholder="What's Happening?"
                        rows="4"
                        onChange={(event) =>
                            setNewTuit({...newTuit, tuit: event.target.value })}>
              </textarea>
            <div className="row p-3">
                <div className="col-10"/>
                <button className="btn btn-primary rounded-pill col-2"
                        onClick={() => createTuit(dispatch, newTuit)}>
                    Tuit
                </button>
            </div>
            </div>
        </div>
    );
}
export default WhatsHappening;