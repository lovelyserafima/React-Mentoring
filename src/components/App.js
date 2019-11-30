import React, { Component } from 'react';
import ErrorBoundary from "./ErrorBoundary";
import MainPage from "./pages/searchpage/MainPage";
import DetailPage from "./pages/detailpage/DetailPage";
import {ChangePageWrapper, FooterWrapper} from "./App.Styles";
import ChangePageButton from "./helper/changepagebutton/ChangePageButton";
import GlobalStyle from "./Global.Styles";
import PageName from "./header/pagename/PageName";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    selectedMovie: state.selectedMovie
});

class App extends Component {

    render() {
        const { selectedMovie } = this.props;
        return (
            <ErrorBoundary>
                <GlobalStyle />
                {selectedMovie === '' ? (
                    <MainPage />
                ) : (
                    <DetailPage movieData={selectedMovie} />
                )}

                <FooterWrapper>
                    <PageName name={'netflixroulette'}/>
                </FooterWrapper>
            </ErrorBoundary>
        );
    }
}

export default connect(mapStateToProps)(App);