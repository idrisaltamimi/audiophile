import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { categoriesLinks } from '../../utils/categoriesLinks'
import { removeFocus, toTopSmooth } from '../../utils/no_focus'

export default function Footer() {
   return (
      <>
         <footer className='footer'>
            <div className='footer__contact'>
               <section>
                  <Link to={'/'}
                     onClick={toTopSmooth}
                     className='footer__contact--logo'>
                     <img
                        src={'./assets/shared/desktop/logo.svg'}
                        alt='audiophile logo' />
                  </Link>

                  <nav className='footer__contact--nav'>
                     <Link
                        onClick={toTopSmooth}
                        className='footer__link' to="/">Home</Link>
                     {categoriesLinks('footer__link')}
                  </nav>

                  <p className='footer__contact--paragraph paragraph'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

                  <p className='footer__contact--copyright paragraph'>Copyright 2021. All Rights Reserved</p>

                  <div className='footer__contact--links'>
                     <ul>
                        <li>
                           <a href='*'
                              onClick={removeFocus}
                              target="_blank">
                              <FontAwesomeIcon className='footer__contact--link' icon={faSquareFacebook} />
                           </a>
                        </li>

                        <li>
                           <a href='*'
                              onClick={removeFocus}
                              target="_blank">
                              <FontAwesomeIcon className='footer__contact--link' icon={faTwitter} />
                           </a>
                        </li>

                        <li>
                           <a href='*'
                              onClick={removeFocus}
                              target="_blank">
                              <FontAwesomeIcon className='footer__contact--link' icon={faInstagram} />
                           </a>
                        </li>
                     </ul>
                  </div>
               </section>
            </div>
         </footer>
      </>
   )
}
