import React, {useState} from "react";
import classes from "./searchBar.module.css"
import ModalWindow from "../ModalWindow/modalWindow";

const SearchBar = (props) => {
    let [dataBook, setDataBook] = useState();
    let updateRequest = (event) => {
        props.updateRequestData(event.target.value);
    }

    const modalDataImport = (elm) => {
        setDataBook(elm);
        if (elm.key < 15)
        {
            props.getDataBook('works', elm.key)
        }
        else if (elm.key.length > 15)
        {
            props.getDataBook('editions', elm.key)
        }
        else if (elm.isbn) {
            props.getDataBook('isbn', elm.isbn[0])
        }
    }


    return <div className={classes.wrapper}>
        <div>
            <input type="text" onChange={updateRequest}/>
            <button onClick={() => {props.getBooks(props.requestText)}}>Поиск</button>
            {props.completed
                ?
                <div>

                    {props.books.map(u =>
                    <div key={u.id}>
                        <div className={classes.cover} onClick={() => {modalDataImport(u)} }>
                            <img src={`http://covers.openlibrary.org/b/id/${u.cover_i}.jpg`} alt=""/>
                            <div>Название: {u.title}</div>
                            <div className={classes.author}>Автор: {u.author_name}</div>
                        </div>
                    </div>)}
                    <ModalWindow active={props.modalActive}
                                 setActive={props.updateModalActive}
                                 dataBook={props.dataSelectedBook}
                                 dataBook2={dataBook}
                                 dataAuthor={props.dataAuthor} />
                </div>
                :
                <div>пусто</div>
            }
        </div>


    </div>
}

export default SearchBar;