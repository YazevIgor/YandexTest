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
    DataBooks() {
        return instance.get(`developers/api`).then(response => {
            return response.data
        })
    }
}