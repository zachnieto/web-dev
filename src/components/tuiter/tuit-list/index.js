import React, {useEffect, useState} from "react";
import TuitListItem from "./tuit-list-item";
import './tuits.css';
import {useDispatch, useSelector}
    from "react-redux";
import {createTuit, findAllTuits}
    from "../../../actions/tuits-actions";


const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();

    useEffect(() =>
        findAllTuits(dispatch),
    []);


    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit =>
                        <TuitListItem key={tuit._id}
                                      tuit={tuit}/>)
                }
            </ul>
        </div>
    );
}

export default TuitList;