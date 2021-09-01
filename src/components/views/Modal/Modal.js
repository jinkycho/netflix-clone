import React, { useState } from 'react';
import { withRouter } from 'react-router';
import DetailPage from '../DetailPage/DetailPage';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes  } from '@fortawesome/free-solid-svg-icons';


function Modal(props) {
    const {open, close, movieDetail} = props;

    return (
           // 모달이 열릴때 openModal 클래스가 생성된다.
            <div className={ open ? 'openModal modal': 'modal' }>
                { open ? (  
                    <section>
                        <header>
                            <button className="close" onClick={close}>
                            <FontAwesomeIcon icon={faTimes} size="1x" className= "icon" />
                            </button>
                        </header>
                        <div className="detail">
                        <DetailPage movieDetail = {movieDetail} />
                        </div>
                        <footer></footer>
                    </section>
                ) : null }
            </div>  
    )
  }

  export default withRouter(Modal);