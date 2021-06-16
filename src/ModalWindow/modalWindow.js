import React from "react";
import classes from "./modalWindow.module.css"


const ModalWindow = (props) => {
    return <div className={props.active ? classes.active : classes.modal} onClick={() => props.setActive(false)}>
        <div className={classes.window} onClick={e => e.stopPropagation()}>
            <button onClick={() => props.setActive(false)}>OK</button>
            {props.active ? <div>{props.dataBook.title}</div> : <div> </div>}
        </div>
    </div>
}

export default ModalWindow;