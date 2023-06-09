import Newsletter from 'components/Newsletter/Newsletter'
import './StayConnected.scss'
import { AiFillInstagram,AiFillBehanceCircle } from 'react-icons/ai';
import { RiPinterestLine } from 'react-icons/ri';
type Props = {
    sizeStay?:string
}
const StayConnected = ({sizeStay="S"}: Props) => {
    if (sizeStay = "L") {
        return (
        <>
        <div className="stay row">
        <div className="trend-title row">
            <h1>Stay Connected</h1>
            <span  ></span>
            <div className="trend-line"></div>
        </div>                    
                    
                    <div className="trend-stay row">
                        <div className="social-L instagram "> 24M</div>
                        <div className="social-L Stackoverflow "> 2k</div>
                        <div className="social-L Behance ">407k</div>
                        <div className="social-L Pinterest ">54M</div>
                    </div>
                </div>
                
                <Newsletter/>
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
