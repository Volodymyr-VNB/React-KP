import './Footer.scss'
import logo from 'assets/logo.png'
import { BsTwitter,BsPinterest,BsTelegram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

type Props = {}
const Footer = (props: Props) => {
    return (
        <section className="footer">
            <div className="footer-about row">
                <img
                    src={logo}
                    alt="Fonix"
                    className="logo1"
                    width="200"
                    height="62"
                />
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                </h4>
                <button type="submit" className="button-foot">
                    About us
                </button>
            </div>
            <div className="foot-cat row">
              <h3 className='linear'>Categories</h3>
              <h4>Digital</h4>
              <h4>Entertainment</h4>
              <h4>Fashion</h4>
            </div>
            <div className="foot-new row">
              <h3 className='linear'>Newsletter</h3>
              <div className='row-col' >
                    <input type="email" className='input input2' placeholder="Email" />
                    <button type="submit" className="button2">
                        <span className="button-text h4 color-white">Subscribe</span>
                    </button>
                </div>
            </div>
            <div className="foot-follows row">
              <h3 className='linear'>Follow Us</h3>
              <div className='row socIcon' >
                    <div className="foot-twitter soc-size"><BsTwitter size={20}/>Twitter</div>
                    <div className="foot-Linkedin soc-size"><FaLinkedinIn size={20}/>Linkedin</div>
                    <div className="foot-Pinterest soc-size"><BsPinterest size={20}/>Pinterest</div>
                    <div className="foot-Telegram soc-size"><BsTelegram size={20}/>Telegram</div>
                </div>
            </div>
            <div className='foot-end'>&#169;2022, All Rights Reserved.</div>
        </section>
    )
}
export default Footer
