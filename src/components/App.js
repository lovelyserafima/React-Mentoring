import React, { Component } from 'react';
import ErrorBoundary from "./ErrorBoundary";
import SearchPage from "./pages/searchpage/SearchPage";
import DetailPage from "./pages/detailpage/DetailPage";
import {ChangePageWrapper, FooterWrapper} from "./App.Styles";
import ChangePageButton from "./helper/changepagebutton/ChangePageButton";
import GlobalStyle from "./Global.Styles";
import PageName from "./header/pagename/PageName";

class App extends Component {
    state = {
        pageType: 'search'
    };

    changePage = () => {
        const { pageType } = this.state;
        const newType = pageType === 'search' ? 'detail' : 'search';
        this.setState(() => ({ pageType: newType }));
    };

    render() {
        const { pageType } = this.state;
        return (
            <ErrorBoundary>
                <GlobalStyle />
                {pageType === 'search' ? <SearchPage /> : <DetailPage changePage={this.changePage} />}
                <ChangePageWrapper>
                    <ChangePageButton changePage={this.changePage} />
                </ChangePageWrapper>
                <FooterWrapper>
                    <PageName />
                </FooterWrapper>
            </ErrorBoundary>
        );
    }
}

export default App;