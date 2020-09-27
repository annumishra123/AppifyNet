import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../../actions/searchActions";
import debounce from "lodash.debounce";

export class MoviesContainer extends Component {
  
  componentDidMount() {
    this.props.fetchMovies(this.props.page);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = debounce(() => {
    const { isLoading } = this.props;
    if (isLoading) return;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.props.fetchMovies(this.props.page);
    }
  }, 10);

  render() {
    const { movies } = this.props;
    return (
      <div className="container">
        <div className="row">
          {movies.Search.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.searchReducer.movies,
  isLoading: state.searchReducer.isLoading,
  page: state.searchReducer.page,
});

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer);
