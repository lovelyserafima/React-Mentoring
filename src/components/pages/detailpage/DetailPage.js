import React, { Component } from 'react';
import { connect } from 'react-redux';
import Detail, { HeaderCSSGrid } from './DetailPage.Styles';
import MovieDetails from '../../details/MovieDetails';
import PageName from '../../header/pagename/PageName';
import ResultsOptions from '../../helper/resultsoption/genre/ResultsOptionsGenre';
import Results from '../../body/results/Results';
import ChangePageButton from '../../helper/changepagebutton/ChangePageButton';
import { viewMovieById } from '../../../modules/actions';
import LoadingWrapper from '../../helper/loading/Loading';

const mapStateToProps = (state) => ({
  selectedMovie: state.movieReducer.selectedMovie,
  movies: state.movieReducer.movies,
});

class DetailPage extends Component {
  componentDidMount() {
    this.viewMovie();
  }

    viewMovie = () => {
      const { id } = this.props.match.params;
      const { viewMovieById } = this.props;

      viewMovieById(id);
    };

    render() {
      const { selectedMovie, movies } = this.props;
      return (
            <div>
                <HeaderCSSGrid>
                    <PageName name={'netflixroulette'}/>
                    <Detail>
                        {selectedMovie ? <MovieDetails details={selectedMovie} /> : <LoadingWrapper />}
                    </Detail>
                    <ChangePageButton />
                </HeaderCSSGrid>
                {!selectedMovie ? <LoadingWrapper/> : <ResultsOptions genre={ selectedMovie.genres[0] } />}
                {!movies ? <LoadingWrapper/> : <Results results={movies} />}
            </div>
      );
    }
}

export default DetailPage = connect(mapStateToProps, { viewMovieById })(DetailPage);
