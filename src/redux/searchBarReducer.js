import {libraryApi} from "../api/api";

let initialState = {
    modalActive: false,
    books: [],
    requestText: null,
    completed: false,
    idSelectedBook: null,
    dataSelectedBook: {},
};

const searchBarReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD-BOOKS":
            return {...state, books: action.books.docs};
        case "ADD-DATA-BOOK":
            return {...state, dataSelectedBook: action.data};
        case "UPDATE-REQUEST-DATA":
            return {...state, requestText: action.text}
        case "UPDATE-COMPLETED":
            return {...state, completed: action.text}
        case "UPDATE-SELECTED-BOOK":
            return {...state, idSelectedBook: action.id}
        case "UPDATE-MODAL-ACTIVE":
            return {...state, modalActive: action.bool}
        default: return 0;
    }
}
export const updateRequestData = (text) => {
    return {type: "UPDATE-REQUEST-DATA", text: text}
}
export const updateCompleted = (text) => {
    return {type: "UPDATE-COMPLETED", text: text}
}
export const updateModalActive = (bool) => {
    return {type: "UPDATE-MODAL-ACTIVE", bool: bool}
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
export const getDataBook = (type, id) => {

    switch (type)
    {
        case 'works':
            return (dispatch) => {
                libraryApi.DataBooksWorks(id).then(data => {
                    dispatch(addDataBook(data));
                    dispatch(updateModalActive(true))

                })
            }
        case 'editions':
            return (dispatch) => {
                libraryApi.DataBooksEditions(id).then(data => {
                    dispatch(addDataBook(data));
                    dispatch(updateModalActive(true))
                })
            }
        case 'isbn':
            return (dispatch) => {
                libraryApi.DataBooksISBN(id).then(data => {
                    dispatch(addDataBook(data));
                    dispatch(updateModalActive(true))
                })
            }
        default: return 0;
    }


}


export default searchBarReducer;