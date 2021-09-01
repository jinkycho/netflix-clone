import React from 'react';
import Row from './Sections/Row';
import './LandingPage.css';
import { withRouter } from 'react-router-dom';
import Banner from './Sections/Banner';
import requests from '../../../requests';

function LandingPage() {

    return (
        <div className="main-container">
            <Banner/>
                <Row title = "지금 뜨는 콘텐츠" fetchUrl={requests.fetchTrending}/>
                <Row title = "인기 영화" fetchUrl={requests.fetchTopRated}/>
                <Row title = "로맨스 영화" fetchUrl={requests.fetchRomanceMovies}/>
                <Row title = "코미디 영화" fetchUrl={requests.fetchComedyMovies}/>
                <Row title = "액션 영화" fetchUrl={requests.fetchActionMovies}/>
                <Row title = "넷플릭스 오리지널" fetchUrl={requests.fetchNetflixOriginals}/>
        </div>
    )
}

export default withRouter(LandingPage)