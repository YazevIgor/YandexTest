import * as axios from "axios"

let instance = axios.create({
    baseURL: 'https://openlibrary.org/'
})

export const libraryApi = {
    SearchBooks(word) {
        return instance.get(`search.json?q=${word}`).then(response => {
            return response.data
        })
    },
    DataBooksWorks(worksID) {
        return instance.get(`${worksID}.json`).then(response => {
            return response.data
        })
    },
    DataBooksEditions(editionsID) {
        return instance.get(`${editionsID}.json`).then(response => {
            return response.data
        })
    },
    DataBooksISBN(isbn) {
        return instance.get(`isbn/${isbn}`).then(response => {
            return response.data
        })
    },
    DataAuthor(id) {
        return instance.get(`${id}.json`).then(response => {
            return response.data
        })
    }
}