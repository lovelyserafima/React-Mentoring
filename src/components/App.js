import React, { Component } from 'react';
import ErrorBoundary from "./ErrorBoundary";
import MainPage from "./pages/searchpage/MainPage";
import DetailPage from "./pages/detailpage/DetailPage";
import {ChangePageWrapper, FooterWrapper} from "./App.Styles";
import ChangePageButton from "./helper/changepagebutton/ChangePageButton";
import GlobalStyle from "./Global.Styles";
import PageName from "./header/pagename/PageName";
import Constants from "./constants/Constants";

class App extends Component {
    state = {
        pageType: Constants.MAIN_PAGE
    };

    changePage = () => {
        const { pageType } = this.state;
        const newType = pageType === Constants.MAIN_PAGE ? Constants.DETAILS_PAGE : Constants.MAIN_PAGE;
        this.setState(() => ({ pageType: newType }));
    };

    render() {
        const { pageType } = this.state;
        return (
            <ErrorBoundary>
                <GlobalStyle />
                {pageType === Constants.MAIN_PAGE ? <MainPage /> : <DetailPage changePage={this.changePage} />}

                {/*this is temporarily functionality*/}
                <ChangePageWrapper>
                    <ChangePageButton changePage={this.changePage} />
                </ChangePageWrapper>

                <FooterWrapper>
                    <PageName name={'netflixroulette'}/>
                </FooterWrapper>
            </ErrorBoundary>
        );
    }
}

export default App;