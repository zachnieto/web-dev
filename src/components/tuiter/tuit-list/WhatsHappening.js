import React, {useState} from "react";
import './tuits.css';
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    const [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <div className="row">
            <div className="col-1 pe-0">
                <img className="img-fluid rounded-circle" src="../../../tuiter/chad.jpg" alt=""/>
            </div>
            <div className="col-11">
              <textarea className="form-control w-100 bg-gray wd-gray" value={whatsHappening}
                        placeholder="What's Happening?"
                        rows="4"
                        onChange={(event) =>
                            setWhatsHappening(event.target.value)}>
              </textarea>
            <div className="row p-3">
                <div className="col-10"/>
                <button className="btn btn-primary rounded-pill col-2"
                    onClick={tuitClickHandler}>
                    Tuit
                </button>
            </div>
            </div>
        </div>
    );
}
export default WhatsHappening;