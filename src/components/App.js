import React, { Component } from 'react';
import ErrorBoundary from "./ErrorBoundary";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import {ChangePageWrapper} from "../style/App.Styles";
import ChangePageButton from "./helper/ChangePageButton";
import GlobalStyle from "../style/Global.Styles";

class App extends Component {
    state = {
        pageType: 'search'
    };

    changePage = () => {
        const { pageType } = this.state;
        const newType = pageType === 'search' ? 'detail' : 'search';
        this.setState(state => ({ pageType: newType }));
    };

    render() {
        const { pageType } = this.state;
        return (
            <ErrorBoundary>
                <GlobalStyle />
                {pageType === 'search' ? <SearchPage /> : <DetailPage />}
                <ChangePageWrapper>
                    <ChangePageButton changePage={this.changePage} />
                </ChangePageWrapper>
            </ErrorBoundary>
        );
    }
}

export default App;