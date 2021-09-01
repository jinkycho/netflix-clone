import React, { useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import './Banner.css';
import Modal from '../../Modal/Modal';
import axios from '../../../../axois';
import requests from '../../../../requests';
import { Link } from 'react-router-dom';

const base_url = "https://image.tmdb.org/t/p/original/";


function Banner() {

    const [movie, setMovie] = useState([]);
    const [modalOpen, setModalOpen ] = useState(false);

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            console.table('result', request.data.results);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * (request.data.results.length -1))]
            );
        };
        fetchData();
    }, [])

    const style = {
        background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(20, 20, 20, 1)), url(' + base_url + movie.backdrop_path + ')'
    }



    return (
            <div className="banner" style={style}>
                <div className="banner-content">
                    <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                    <p>{movie.overview}</p>
                    <div className="banner-btns">
                        <Link to = {`/video/${movie?.title || movie?.name || movie?.original_name}`} className="primary-btn play-btn">
                            <FontAwesomeIcon icon={faPlay} size="sm" className= "btn-icon" />
                            <span>재생</span>
                        </Link>
                        <button className="primary-btn detail-btn" onClick={openModal}>
                            <FontAwesomeIcon icon={faInfoCircle} size="1x" className= "btn-icon detail-icon" />
                            <span>상세 정보</span>
                        </button>

                        <Modal open={modalOpen} close={closeModal} movieDetail = {movie}/>
                    </div>
                </div>
            </div>
    )
}

export default withRouter(Banner)