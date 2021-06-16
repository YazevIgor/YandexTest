import React from "react";
import classes from "./searchBar.module.css"

const SearchBar = (props) => {
    let updateRequest = (event) => {
        props.updateRequestData(event.target.value);
    }
    return <div className={classes}>
        <input type="text" onChange={updateRequest}/>
        <button onClick={() => {props.getBooks(props.requestText)}}>Поиск</button>
        {props.completed
            ?
            <div> {props.books.map(u =>
                <div key={u.id}>
                    <div>
                        {u.title}
                    </div>
                </div>)}
            </div>
            :
            <div>пусто</div>}

    </div>
}

export default SearchBar;