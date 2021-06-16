import React from "react";
import SearchBar from "./searchBar";
import {getBooks, getDataBook, updateCompleted, updateRequestData} from "../redux/searchBarReducer";
import {connect} from "react-redux";

class SearchBarContainer extends React.Component {
    render() {
        return <SearchBar books={this.props.books}
                          updateRequestData={this.props.updateRequestData}
                          requestText={this.props.requestText}
                          getBooks={this.props.getBooks}
                          completed={this.props.completed}
                          updateCompleted={this.props.updateCompleted} />}
}

const mapStateToProps = (state) => {
    return {
        books: state.searchBar.books,
        requestText: state.searchBar.requestText,
        completed: state.searchBar.completed,
    }
}

export default connect(mapStateToProps, {getBooks, getDataBook, updateRequestData,updateCompleted})(SearchBarContainer);