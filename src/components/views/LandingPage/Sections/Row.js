import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import axios from '../../../../axois';
import Modal from '../../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronDown  } from '@fortawesome/free-solid-svg-icons';
import './Row.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {

    const {title, fetchUrl} = props;

    const [movies, setMovies] = useState([]);
    const [movieDetail, setMovieDetail] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ cardOpen, setCardOpen ] = useState(false);
    const [ contentDetail, setContentDetail] = useState([]);

  

    const openModal = () => {
        setModalOpen(true)
        setCardOpen(false)
    }

    const closeModal = () => {
        setModalOpen(false)
    } 
    const openCard = (e, movie) => {
        setCardOpen(true)
        setMovieDetail(movie)
    }

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        //if [], run once when the row loads, and don't run again
    }, [fetchUrl]);

    const RenderCard = (props) =>{
        const id = props.id;

        if(id === movieDetail.id){
            return(
                <div className="content-card">
                    <img src={`${base_url}${movieDetail.backdrop_path}`} alt={movieDetail.title}/>
                        <div className = "card-container">
                            <ul className = "buttons">
                                <li>
                                    <Link to = {`/video/${movieDetail?.title || movieDetail?.name || movieDetail?.original_name}`} className="small-btn play-btn"><FontAwesomeIcon icon={faPlay} size="xs" className= "icon" /></Link>
                                </li>
                                {/* <li>  
                                    <Wishlist addVideo = {movieDetail.id} addUser = {localStorage.getItem('userId')}/>
                                </li>
                                <li>
                                    <LikeDislike userId = {localStorage.getItem('userId')} videoId = {movieDetail.id} />
                                </li> */}
                                <li>  
                                    <button className="small-btn modal-btn" onClick={ openModal }><FontAwesomeIcon icon={faChevronDown} size="sm" className= "icon" /></button>
                                </li>
                            </ul>
                            <p>{movieDetail?.title || movieDetail?.name || movieDetail?.original_name }</p>
                        </div>
                </div>
            )
        }
        return(
            null
        )
        
    }


    const RenderCards = movies.map((movie, index) => {
        return(
            //href={`/upload/${content._id}`}
            <div className= "slider-card"
                onMouseEnter= {(e) => openCard(e ,movie)}
                onMouseLeave = {() => setCardOpen(false)}
                key={index}>
                <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
                <img className="img" 
                src={`${base_url}${movie.backdrop_path}`} alt={movie.title}/>
                {cardOpen &&  <RenderCard id = {movie.id}/>}
            </div>
            )
    }) 

    const settings = {
        infinite: false,
        slidesToShow : 5,
        slidesToScroll : 1,
        slide : 'div'
    }

    return (
        <div className="slider-container">
            <h3 className="category-label">{title}</h3>
            <div className="slider-row">
                <Slider {...settings}>
                    {RenderCards}
                </Slider>
            </div>
            <Modal open={modalOpen} close={closeModal} movieDetail = {movieDetail} />
        </div>
        
    )
}

export default Row
