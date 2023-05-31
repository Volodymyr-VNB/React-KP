import './Header.scss'
import logo from 'assets/logo.png'
import gameChanging from 'assets/game-changing-1000x600.jpg'
import howToMake from 'assets/how-to-make1000x600.jpg'
import texnologi from 'assets/texnologi-1000x600.jpg'
import Animation from 'components/Animation/Animation'

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
                        <span>
                          <Animation
                            hrefAni = "https://demo.rivaxstudio.com/fonix/main/game-changing-virtual-reality-console/"
                            srcAni  = {gameChanging}
                            TxtAni  = "Game Changing Virtual Reality Console"
                            />
                          <Animation
                            hrefAni = "https://demo.rivaxstudio.com/fonix/main/how-to-make-a-competitors-success-work-for-you/"
                            srcAni  = {howToMake}
                            TxtAni  = "How to Make a Competitor`s Success Work for You"
                            />
                          <Animation
                            hrefAni = "https://demo.rivaxstudio.com/fonix/main/technology-allows-profit-to-serve-the-community/"
                            srcAni  = {texnologi}
                            TxtAni  = "Technology Allows Profit To Serve The Community"
                            />
                        </span>
                        <span>
                          <Animation
                            hrefAni = "https://demo.rivaxstudio.com/fonix/main/game-changing-virtual-reality-console/"
                            srcAni  = {gameChanging}
                            TxtAni  = "Game Changing Virtual Reality Console"
                            />
                          <Animation
                            hrefAni = "https://demo.rivaxstudio.com/fonix/main/how-to-make-a-competitors-success-work-for-you/"
                            srcAni  = {howToMake}
                            TxtAni  = "How to Make a Competitor`s Success Work for You"
                            />
                          <Animation
                            hrefAni = "https://demo.rivaxstudio.com/fonix/main/technology-allows-profit-to-serve-the-community/"
                            srcAni  = {texnologi}
                            TxtAni  = "Technology Allows Profit To Serve The Community"
                            />
                        </span>
                        
                    </div>
                </div>

                <div className="search row">
                    <input
                        type="text"
                        className="search-txt"
                        placeholder="search and enter"
                    />
                    <div className="search-img"></div>
                </div>
            </div>
        </div>
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
                        <a href="#">Home</a>
                    </li>
                    <li className='header-menu-item'>
                        <a href="#">Travel</a>
                    </li>
                    <li className='header-menu-item'>
                        <a href="#">Categories</a>
                        <ul className='header-menu-sub'>
                            <li>
                                <a href="#">Mobile</a>
                            </li>
                            <li>
                                <a href="#">Travel</a>
                            </li>
                            <li>
                                <a href="#">Digital</a>
                            </li>
                            <li>
                                <a href="#">Gadget</a>
                            </li>
                            <li>
                                <a href="#">Lifestyle</a>
                            </li>
                        </ul>
                    </li>
                    <li className='header-menu-item like row'>
                        <a href="#">Favorites</a>
                        <div className="like-number">
                            <p id="like-count">0</p>
                        </div>
                        
                    </li>
                    <li className='header-menu-item'>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
            <div className="header-icons row">
                <div className="soundcloud social"></div>
                <div className="whatsapp social"></div>
                <div className="gitH social"></div>
                <div className="facebook social"></div>
                {/* <img src="" alt="" /> */}

            </div>
        </div>
    </header>
</>
  )
}
export default Header