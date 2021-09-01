import React, { useState, useEffect } from 'react'
import './SideVideo.css'
import { withRouter } from 'react-router';
import axios from '../../../../axois';
import requests from '../../../../requests';
const base_url = "https://image.tmdb.org/t/p/original/";

function SideVideo(movieId) {
    const [SideVideos, setSideVideos] = useState([])
    useEffect(() => {
        async function fetchData(){

            const movieRequest = '/movie/' + movieId.movieId  + requests.fetchRecommendations;
            const request = await axios.get(movieRequest);
            console.table('result', request.data.results);

            setSideVideos(
                request.data.results
            );
        };
        fetchData();
    }, [])

        const renderSideVideo = SideVideos.map((video, index) => {

            return(
                <div className = "side-video-card" key={index}>
                    <img src={`${base_url}${video.backdrop_path}`} alt={video.title} />
                    <div className="card-container">
                        <div className="card-top">
                            <h3>{video.title}</h3>
                            {/* <Wishlist addVideo = {video._id} addUser = {localStorage.getItem('userId')}/> */}
                        </div>
                        <div className="card-bottom">
                            <p className="video-detail">{video.overview}</p>
                        </div>
                    </div>
                </div>
            )
            
        })

    return (

        <div className="video-recommend">
            {renderSideVideo}
        </div>
    )
}

export default withRouter(SideVideo)
