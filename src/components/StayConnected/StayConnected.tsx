import Newsletter from 'components/Newsletter/Newsletter'
import './StayConnected.scss'
import { AiOutlineInstagram, AiFillBehanceCircle } from 'react-icons/ai'
import { AiOutlineMail, AiOutlineCopy } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'

import {
    FaFacebookF,
    FaPinterestP,
    FaWhatsapp,
    FaLinkedinIn,
} from 'react-icons/fa'

import { RiPinterestLine, RiStackOverflowFill } from 'react-icons/ri'
type Props = {
    sizeStay?: string
}
const StayConnected = ({ sizeStay = 'S' }: Props) => {
    if (sizeStay === 'L') {
        return (
            <>
                <div className="stay row">
                    <div className="trend-title row">
                        <h1>Stay Connected</h1>
                        <span></span>
                        <div className="trend-line"></div>
                    </div>

                    <div className="trend-stay row">
                        <div className="social-XL instagram ">
                            <div>
                                <AiOutlineInstagram />
                            </div>
                            <span>|&#160;&#160;Instagram</span>
                            <p>24M</p>
                        </div>
                        <div className="social-XL Stackoverflow ">
                            <div>
                                <RiStackOverflowFill />
                            </div>
                            <span>|&#160;&#160;Stackoverflow</span>
                            <p>2k</p>
                        </div>
                        <div className="social-XL Behance ">
                            <div>
                                <AiFillBehanceCircle />
                            </div>
                            <span>|&#160;&#160;Behance</span>
                            <p>407k</p>
                        </div>
                        <div className="social-XL Pinterest ">
                            <div>
                                <RiPinterestLine />
                            </div>
                            <span>|&#160;&#160;Pinterest</span>
                            <p>54M</p>
                        </div>
                    </div>
                </div>

                <Newsletter lili={2} />
            </>
        )
    }
    if (sizeStay === 'SC') {
        return (
            <>
                <div className="single-share-box-container">
                    <h3 className="title ar-hot-mar row">Share Article</h3>
                    <div className="single-share-box row">
                        <a rel="noreferrer"
                            className="facebook-2 single-share-box-"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://demo.rivaxstudio.com/fonix/main/?p=1707"
                            target="_blank"
                        >
                            <FaFacebookF />
                        </a>
                        <a rel="noreferrer"
                            className="twitter-2 single-share-box-"
                            href="https://twitter.com/share?text=Top+5+New+Tech+Gadgets+You+Must+Have+In+2023&amp;url=https://demo.rivaxstudio.com/fonix/main/?p=1707"
                            target="_blank"
                        >
                            <BsTwitter />
                        </a>
                        <a rel="noreferrer"
                            className="pinterest-2 single-share-box-"
                            href="//pinterest.com/pin/create/link/?url=https://demo.rivaxstudio.com/fonix/main/?p=1707&amp;media=https://demo.rivaxstudio.com/fonix/main/wp-content/uploads/2022/05/pretty-blonde-girl-sitting-window-sill-with-cup.jpg&amp;description=Top+5+New+Tech+Gadgets+You+Must+Have+In+2023"
                            target="_blank"
                        >
                            <FaPinterestP />
                        </a>
                        <a rel="noreferrer"
                            className="email-2 single-share-box-"
                            href="mailto:?subject=Top+5+New+Tech+Gadgets+You+Must+Have+In+2023&amp;body=https://demo.rivaxstudio.com/fonix/main/?p=1707"
                            target="_blank"
                        >
                            <AiOutlineMail />
                        </a>
                        <a rel="noreferrer"
                            className="whatsapp-2 single-share-box-"
                            href="https://api.whatsapp.com/send?text=https://demo.rivaxstudio.com/fonix/main/?p=1707"
                            data-action="share/whatsapp/share"
                            target="_blank"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                    <div className="single-share-box-link">
                        <div className="form-content">
                            <input
                                type="text"
                                name="url"
                                value="https://demo.rivaxstudio.com/fonix/main/top-5-new-tech-gadgets-you-must-have-in-2023/"
                                className="share-link-text"
                            />
                            <button type="submit" className="share-link-btn">
                                <AiOutlineCopy />
                                <span className="copied-popup-text"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (sizeStay === 'Smoll') {
        return (
            <div className="header-icons row">
                <a href="https://soundcloud.com" target="_blank">
                    <div className="soundcloud social"></div>
                </a>
                <a rel="noreferrer"
                    href="https://api.whatsapp.com/send?text=https://demo.rivaxstudio.com/fonix/main/?p=1707"
                    target="_blank"
                >
                    <div className="whatsapp social"></div>
                </a>
                <a  rel="noreferrer" href="https://github.com/" target="_blank">
                    <div className="gitH social"></div>
                </a>

                <a   rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https://demo.rivaxstudio.com/fonix/main/?p=1707">
                    <div className="facebook social"></div>
                </a>
            </div>
        )
    }
    if (sizeStay === 'avtor') {
        return (
            <div className="author-social-links row">
                <a 
                     rel="noreferrer"
                    className="websites"
                    target="_blank"
                    data-title="Follow Me on Facebook"
                    href="https://facebook.com"
                >
                    <FaFacebookF />
                </a>
                <a
                     rel="noreferrer"
                    className="websites"
                    target="_blank"
                    data-title="Follow Me on Twitter"
                    href="https://twitter.com"
                >
                    {' '}
                    <BsTwitter />{' '}
                </a>
                <a
                     rel="noreferrer"
                    className="websites"
                    target="_blank"
                    data-title="Follow Me on Linkedin"
                    href="https://linkedIn.com"
                >
                    {' '}
                    <FaLinkedinIn />{' '}
                </a>
                <a
                     rel="noreferrer"
                    className="websites"
                    target="_blank"
                    data-title="Follow Me on Instagram"
                    href="https://instagram.com"
                >
                    {' '}
                    <AiOutlineInstagram />{' '}
                </a>
                <a
                     rel="noreferrer"
                    className="websites"
                    target="_blank"
                    data-title="Follow Me on Pinterest"
                    href="https://Pinterest.com"
                >
                    {' '}
                    <FaPinterestP />{' '}
                </a>
            </div>
        )
    } else {
        return (
            <>
                <div className="stay row">
                    <h3 className="cat-color ">Follow Us</h3>
                    <h3 className="post-title-inner ">Stay Connected</h3>
                    <div className="social-stay row">
                        <div className="social1 facebook1 ">
                            <a  rel="noreferrer"
                            href="https://www.facebook.com/sharer/sharer.php?u=https://demo.rivaxstudio.com/fonix/main/?p=1707">
                                2k
                            </a>
                        </div>
                        <div className="social1 whatsapp1 ">
                            <a rel="noreferrer"
                                href="https://api.whatsapp.com/send?text=https://demo.rivaxstudio.com/fonix/main/?p=1707"
                                target="_blank"
                            >
                                3M
                            </a>
                        </div>
                        <div className="social1 soundcloud1 ">
                            <a  rel="noreferrer"
                            href="https://soundcloud.com" target="_blank">
                                420k
                            </a>
                        </div>
                    </div>
                </div>

                <Newsletter />
            </>
        )
    }
}
export default StayConnected
