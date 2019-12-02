import React, { Component } from 'react';
import ErrorBoundary from "./ErrorBoundary";
import MainPage from "./pages/searchpage/MainPage";
import {DetailPageContainer} from "./pages/detailpage/DetailPage";
import {FooterWrapper} from "./App.Styles";
import GlobalStyle from "./Global.Styles";
import PageName from "./header/pagename/PageName";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    selectedMovie: state.movieReducer.selectedMovie
});

export class App extends Component {

    render() {
        const { selectedMovie } = this.props;
        {console.log(selectedMovie)}
        return (
            <ErrorBoundary>
                <GlobalStyle />
                {selectedMovie === '' ? (
                    <MainPage />
                ) : (
                    <DetailPageContainer movieData={selectedMovie} />
                )}

                <FooterWrapper>
                    <PageName name={'netflixroulette'}/>
                </FooterWrapper>
            </ErrorBoundary>
        );
    }
}

export default connect(mapStateToProps)(App);