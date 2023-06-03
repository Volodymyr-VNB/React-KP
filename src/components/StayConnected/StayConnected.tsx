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
            <div className="getEvery row">
                <div className="getEvery row">
                    <h3 className="post-title-inner">Get Every Newsletter</h3>
                    <h3 className="cat-color">
                        Get notified of the best deals on our WordPress themes.
                    </h3>
                </div>
                <div>
                    <input type="email" className='input' placeholder="Email" />
                    <button type="submit" className="button">
                        <span className="button-text h4 color-white">Subscribe</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default StayConnected
