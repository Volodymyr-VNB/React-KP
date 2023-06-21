import './Header.scss'
import logo from 'assets/logo.png'
import {  NavLink } from "react-router-dom";

import StayConnected from 'components/StayConnected/StayConnected';
import CurrentTerm from 'components/CurrentTerm/CurrentTerm';

type Props = {}
const Header = (props: Props) => {
    
  return (
    <>
    <header className="header">
        <div className="header-fon">
            <div className="header-0 row">
                <div className="hot-items row">
                    <span className="hot-gripfire"></span>
                    <span className="hot-text">Hot Items</span>
                </div>
                <div className="running-line">
                    <div className="heder-slide1 row">
                        <CurrentTerm/>
                        <CurrentTerm/>

                       
                        
                    </div>
                </div>

                <div className="search row">
                    <input
                        type="text"
                        className="search-txt"
                        placeholder="search and enter"
                        name='searchBox'
                    />
                    <div className="search-img"></div>
                </div>
            </div>
        </div>
        <div className="header-fon1 ">
        <div className="header-1 row">
            <img
                src={logo}
                alt="Fonix"
                className="logo"
                width="200"
                height="62"
            />
            <nav className="header-menu">
                <ul className='header-menu-0'>
                    <li className='header-menu-item'>
                        
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li className='header-menu-item'>
                       
                        <NavLink to={'/browseCategory'}>Travel</NavLink>
                    </li>
                    <li className='header-menu-item'>
                        <a href="#top">Categories</a>
                        <ul className='header-menu-sub'>
                            <li>
                               
                                <NavLink to={'/mobile'}>Mobile</NavLink>
                            </li>
                            <li>
                                
                                <NavLink to={'/browseCategory'}>Travel</NavLink>
                            </li>
                            <li>
                               
                                <NavLink to={'/digital'}>Digital</NavLink>
                            </li>
                            <li>
                              
                                <NavLink to={'/gadget'}>Gadget</NavLink>
                            </li>
                            <li>
                             
                                <NavLink to={'/lifestyle'}>Lifestyle</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className='header-menu-item like row'>
                        <a href="#top">Favorites</a>
                        <div className="like-number">
                            <p id="like-count">0</p>
                        </div>
                        
                    </li>
                    <li className='header-menu-item'>
                       
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li className='header-menu-item'>
                       
                        <NavLink to={'/articlePost'}>ArticlePost</NavLink>
                    </li>
                </ul>
            </nav>
            <StayConnected sizeStay='Smoll'/>
        </div></div>
    </header>
</>
  )
}
export default Header