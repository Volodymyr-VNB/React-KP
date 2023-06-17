import StayConnected from "components/StayConnected/StayConnected"
import "./Avtor.scss"
type Props = {}
const Avtor = (props: Props) => {
    return (
        <div className="author-box-container ">
            <div className="author-box row">
                <div className="author-box-avatar">
                    <img
                        className="avatar-photo"
                        src="images/john.jpg"
                        alt="John Nikova"
                        width="120"
                        height="120"
                    />
                </div>
                <div className="single-author-box-desc">
                    
                    <h4 className="written-by">Written By</h4>
                    <h5 className="author-name">John Nikova</h5>
                    <p className="author-bio h4">
                        I am so happy, my dear friend, so absorbed in the
                        exquisite sense of mere tranquil existence, that I
                        neglect my talents. I should be incapable of drawing a
                        single stroke at the present moment; and yet I feel that
                        I never was a greater artist than now.
                    </p>
                    <StayConnected sizeStay="avtor"/>
                </div>
            </div>
        </div>
    )
}
export default Avtor
