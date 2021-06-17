import React from "react";
import classes from "./modalWindow.module.css"


const ModalWindow = (props) => {
    return <div className={props.active ? classes.active : classes.modal} onClick={() => props.setActive(false)}>
        <div className={classes.window} onClick={e => e.stopPropagation()}>
            {props.active ?
                <div className={classes.infoWrapper}>
                    {<img src={`http://covers.openlibrary.org/b/id/${props.dataBook2.cover_i}-L.jpg`} alt=""/>}
                    <div>
                        <h1>Название: "{props.dataBook.title}"</h1>
                        <h1>Автор: {props.dataAuthor.name}</h1>
                        <h1>Дата публикации: {props.dataBook2.publish_date[0]}</h1>
                        <h1>ISBN: {props.dataBook2.isbn ? <span>{props.dataBook2.isbn[0]}</span> : <div> </div>}</h1>
                    </div>
                    <button onClick={() => props.setActive(false)}>OK</button>
                </div>
                : <div> </div>}
        </div>

    </div>
}

export default ModalWindow;