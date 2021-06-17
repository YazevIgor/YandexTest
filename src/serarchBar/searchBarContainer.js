import React from "react";
import SearchBar from "./searchBar";
import {getBooks, getDataBook, updateCompleted, updateModalActive, updateRequestData} from "../redux/searchBarReducer";
import {connect} from "react-redux";

class SearchBarContainer extends React.Component {
    render() {
        return <SearchBar books={this.props.books}
                          updateRequestData={this.props.updateRequestData}
                          requestText={this.props.requestText}
                          getBooks={this.props.getBooks}
                          completed={this.props.completed}
                          updateCompleted={this.props.updateCompleted}
                          getDataBook={this.props.getDataBook}
                          dataSelectedBook={this.props.dataSelectedBook}
                          modalActive={this.props.modalActive}
                          updateModalActive={this.props.updateModalActive}
                          dataAuthor={this.props.author} />}
}

const mapStateToProps = (state) => {
    return {
        books: state.searchBar.books,
        requestText: state.searchBar.requestText,
        completed: state.searchBar.completed,
        dataSelectedBook: state.searchBar.dataSelectedBook,
        modalActive: state.searchBar.modalActive,
        author: state.searchBar.author
    }
}

export default connect(mapStateToProps, {getBooks, getDataBook, updateRequestData,updateCompleted, updateModalActive})(SearchBarContainer);