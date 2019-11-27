import React, { Component } from 'react';
import ErrorBoundary from "./ErrorBoundary";
import MainPage from "./pages/searchpage/MainPage";
import DetailPage from "./pages/detailpage/DetailPage";
import {ChangePageWrapper, FooterWrapper} from "./App.Styles";
import ChangePageButton from "./helper/changepagebutton/ChangePageButton";
import GlobalStyle from "./Global.Styles";
import PageName from "./header/pagename/PageName";
import {DETAILS_PAGE, MAIN_PAGE} from "./AppConstants";
import { Provider } from 'react-redux';
import store from '../redux/store';

class App extends Component {
    state = {
        pageType: MAIN_PAGE
    };

    changePage = () => {
        const { pageType } = this.state;
        const newType = pageType === MAIN_PAGE ? DETAILS_PAGE : MAIN_PAGE;
        this.setState(() => ({ pageType: newType }));
    };

    render() {
        const { pageType } = this.state;
        return (
            <Provider store={store}>
                <ErrorBoundary>
                    <GlobalStyle />
                    {pageType === MAIN_PAGE ? <MainPage /> : <DetailPage />}
                    <ChangePageWrapper>
                        <ChangePageButton changePage={this.changePage} />
                    </ChangePageWrapper>

                    <FooterWrapper>
                        <PageName name={'netflixroulette'}/>
                    </FooterWrapper>
                </ErrorBoundary>
            </Provider>
        );
    }
}

export default App;