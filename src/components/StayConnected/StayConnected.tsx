import Newsletter from 'components/Newsletter/Newsletter'
import './StayConnected.scss'
type Props = {}
const StayConnected = (props: Props) => {
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
export default StayConnected
