import {libraryApi} from "../api/api";

let initialState = {
    books: [],
    requestText: null,
    completed: false,
};

const searchBarReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD-BOOKS":
            return {...state, books: action.books.docs};
        case "ADD-DATA-BOOK":
            return {...state};
        case "UPDATE-REQUEST-DATA":
            return {...state, requestText: action.text}
        case "UPDATE-COMPLETED":
            return {...state, completed: action.text}
        default: return 0;
    }
}
export const updateRequestData = (text) => {
    return {type: "UPDATE-REQUEST-DATA", text: text}
}
export const updateCompleted = (text) => {
    return {type: "UPDATE-COMPLETED", text: text}
}

const addBooks = (books) => {
    return {type: "ADD-BOOKS", books: books}
}

const addDataBook = (data) => {
    return {type: "ADD-DATA-BOOK", data: data}
}

export const getBooks = (text) => {
    return (dispatch) => {
        libraryApi.SearchBooks(text).then(data => {
            dispatch(addBooks(data));
            dispatch(updateCompleted(true))
        })
    }
}
export const getDataBook = (book) => {
    return (dispatch) => {
        libraryApi.DataBooks(book).then(data => {
            dispatch(addDataBook(data));
        })
    }
}


export default searchBarReducer;