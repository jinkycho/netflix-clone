import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './DetailPage.css';
import SideVideo from './Section/SideVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';
const base_url = "https://image.tmdb.org/t/p/original/";

function DetailPage(movieDetail) {
    const movie = movieDetail.movieDetail;
    console.log('movie', movie)
    useEffect(() => {
        // async function fetchData(){
        //     const movieRequest = '/movie/' + movieId.id + requests.fetchMovieDetail;
        //     const request = await axios.get(movieRequest);
        //     console.table('result', request.data.results);

        //     setMovie(
        //         request.data.results
        //     );
        // };
        // fetchData();
    }, [])

    return (
        <div className="detail-container">
            <div className="detail-top">
                <h1>{movie?.title || movie?.name || movie?.original_name }</h1>
                <img src={`${base_url}${movie.backdrop_path}`} alt={movie.title} />
                <ul className = "buttons">
                    <li>
                        <Link to = {`/video/${movie?.title || movie?.name || movie?.original_name}`} className="primary-btn play-btn">
                            <FontAwesomeIcon icon={faPlay} size="xs" className= "btn-icon" />
                                <span>재생</span>
                        </Link>
                    </li>
                    {/* <li>  
                        <Wishlist addVideo = {movie.id} addUser = {localStorage.getItem('userId')}/>
                    </li>
                    <li>
                        <LikeDislike videoId = {movie.id} userId = {localStorage.getItem('userId')}  />
                    </li> */}
                </ul>
            </div>
            <div className="detail-common detail-middle">
                <p>{movie.overview}</p>
                <p>공개날짜 : {movie.release_date}</p>
            </div>
            <div className="detail-common detail-bottom">
                <h2>추천 영상</h2>
                <SideVideo movieId = {movie.id} />
            </div>
        </div>
    )
}

export default withRouter(DetailPage)
