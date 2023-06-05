import Fonex from 'components/Fonex/Fonex'
import './FooterPage.scss'
import ColAll from 'components/ColFoot/ColAll'

type Props = {}
const FooterPage = (props: Props) => {
    return (
        <section className="footpage">
            <div className="footpage-fon">
                <div className="footpage-cont row">
                    <Fonex
                        classNam="footer-about row footer-about-page"
                        h4="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        butClass="button-foot h4 color-white"
                        buttonName="Contact Us"
                        color="Black"
                    />
                    <div className="business ">
                        <h3>Business</h3>
                        <p className="xxx"></p>
                        <ColAll search1={11} search2={12} />
                    </div>
                    <div></div>
                    <div className="business ">
                        <h3>Technology</h3>
                        <p className="xxx"></p>
                        <ColAll search1={8} search2={1} />
                    </div>
                    <div className="business-img ">
                        <h3>Categories</h3>
                        <p className="xxx"></p>
                        <div className="business-img-cont row">
                            <ColAll
                                search1={2}
                                search2={3}
                                search3={7}
                                search4={11}
                                img="yes"
                            />
                        </div>
                    </div>
                </div>
                <p className="bootonAll">Follow Us in Our Social Media</p>
                <div className="header-icons row foot-p">
                    <div className="soundcloud social"></div>
                    <div className="whatsapp social"></div>
                    <div className="gitH social gitH-color row "></div>
                    <div className="facebook social"></div>
                </div>
            </div>
        </section>
    )
}
export default FooterPage
