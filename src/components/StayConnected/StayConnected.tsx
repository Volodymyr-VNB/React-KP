import Newsletter from 'components/Newsletter/Newsletter'
import './StayConnected.scss'
import { AiOutlineInstagram, AiFillBehanceCircle } from 'react-icons/ai';

import { RiPinterestLine,RiStackOverflowFill } from 'react-icons/ri';
type Props = {
    sizeStay?:string
}
const StayConnected = ({sizeStay="S"}: Props) => {
    if (sizeStay == "L") {
        
        return (
        <>
        <div className="stay row">
        <div className="trend-title row">
            <h1>Stay Connected</h1>
            <span  ></span>
            <div className="trend-line"></div>
        </div>                    
                    
                    <div className="trend-stay row">
                        <div className="social-XL instagram ">
                            <div><AiOutlineInstagram /></div><span>|&#160;&#160;Instagram</span><p>24M</p></div>
                        <div className="social-XL Stackoverflow "> 
                        <div><RiStackOverflowFill /></div><span>|&#160;&#160;Stackoverflow</span><p>2k</p></div>
                        <div className="social-XL Behance ">
                        <div><AiFillBehanceCircle /></div><span>|&#160;&#160;Behance</span><p>407k</p></div>
                        <div className="social-XL Pinterest ">
                        <div><RiPinterestLine /></div><span>|&#160;&#160;Pinterest</span><p>54M</p></div>
                    </div>
                </div>
                
                <Newsletter
                lili={2}
                />
            </>
        )     
    } else {
        return (
        
            <>
                <div className="stay row">
                    <h3 className="cat-color ">Follow Us</h3>
                    <h3 className="post-title-inner ">Stay Connected</h3>
                    <div className="social-stay row">
                        <div className="social1 facebook1 "> 2k</div>
                        <div className="social1 whatsapp1 ">3M</div>
                        <div className="social1 soundcloud1 ">420k</div>
                    </div>
                </div>
                
                <Newsletter/>
            </>
        )   
    }
    
}
export default StayConnected
