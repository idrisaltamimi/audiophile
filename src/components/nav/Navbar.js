import React from 'react'
import { Link } from 'react-router-dom'

import Modal from '../modal/Modal'
import CategoriesList from './CategoriesList'

import { categoriesLinks } from '../../utils/categoriesLinks'

export default function Navbar({ width, isNavOpen, closeNav }) {

   return (
      <>
         {(width < 769) &&
            <Modal open={isNavOpen} modalClass={'nav-modal'} close={closeNav}>
               <div className='nav_modal_container'>
                  <CategoriesList closeNav={closeNav} />
               </div>
            </Modal>}

         {(width >= 769) &&
            <nav>
               <Link onClick={(e) => e.target.blur()} className='header__link' to="/">
                  Home
               </Link>
               {categoriesLinks('header__link ')}
            </nav>}
      </>
   )
}
