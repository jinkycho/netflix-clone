import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useParams } from 'react-router';
import './VideoPage.css'

function VideoPage() {

    const movie = useParams();
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        console.log('title', movie.title)

        movieTrailer(movie.title, (error, response) => {
            if(error) console.log(error);
            console.log(response)
            const urlParams = new URLSearchParams(new URL(response).search);
            console.log('urlParams',urlParams.get('v'));
            setTrailerUrl(urlParams.get('v'));
        })
    }, [])

    console.log('url', trailerUrl);

    const opts = {
        width: '100%',
        height: '750',
        playerVars : {
            autoplay: 1
        }
    }


    return (
        <div className="video-container">
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default VideoPage
