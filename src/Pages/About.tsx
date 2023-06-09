import Team from 'components/Team/Team'
import './About.scss'
import Newsletter from 'components/Newsletter/Newsletter'
import { TbBrandTelegram } from 'react-icons/tb'
import PostLi from 'components/PostLi/PostLi'

type Props = {}
const About = (props: Props) => {
    return (
        <>
            <section className="about row" id='about'>
                <div className="row-col">
                    <h3 className="cat-color">ABOUT US</h3>
                    <h3 className="post-title-inner linear-Baza ">
                        Our Teams Comes With The Experience & Knowledge
                    </h3>
                    <div className="h4 about-p row">
                        <p>
                            <strong>Lorem Ipsum</strong> is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry’s standard dummy.
                        </p>

                        <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="h4 about-p1 row">
                        <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="about-avtor">
                            Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                            <br /> elit. Ut elit tellus, <br /> <br />
                            John Nikova
                        </p>
                    </div>
                </div>
                <img src="images/about_thought.jpg" alt="About" />
            </section>
            <section className="our-Perfect-Team">
                <h3 className="post-title-inner linear-Baza linear-Baza2">
                    About Our Perfect Team
                </h3>
                <div className="row">
                    <Team
                        className="team row"
                        src="images/james.jpg"
                        names="James Nolan"
                    />
                    <Team
                        className="team row"
                        src="images/Clara.jpg"
                        names="Clara Levy"
                    />
                    <Team
                        className="team row"
                        src="images/john.jpg"
                        names="John Nikova"
                    />
                    <Team
                        className="team row"
                        src="images/wili.jpg"
                        names="William Lag"
                    />
                </div>
            </section>
            <section className="Newsletter">
                <div className="news-fon row">
                    <TbBrandTelegram />
                    <Newsletter />
                </div>
            </section>
            <section className='trending-Categories'>
            <h3 className="post-title-inner linear-Baza linear-Baza2">
            Trending-Categories
                </h3>
                <div className='row trend'>
                <PostLi
                            srcImg="images/woman-with-hat-700x700.jpg"
                            altImg="Travel"
                            hrefTitle="https:/"
                            titleShot="Travel"
                            titleAll="Travel"
                            titleViews="7 Posts"
                            divClass="categories-About row"
                            imgClass="categories-img cat-img-About"
                            aClass="post-Recent-title h5 line-a color-white"
                            h6Class="titre-line text-align-center color-white"
                            iconClass="dispNone"
                            containerImg="img-containet img-containet-about img-containet-about1"
                            catClass="dispNone"
                            catText="Travel"
                            subcategoriy=""
                        />
                <PostLi
                            srcImg="images/gadget.jpg"
                            altImg="Gadget"
                            hrefTitle="https:/"
                            titleShot="Gadget"
                            titleAll="Gadget"
                            titleViews="5 Posts"
                            divClass="categories-About row"
                            imgClass="categories-img cat-img-About"
                            aClass="post-Recent-title h5 line-a color-white"
                            h6Class="titre-line text-align-center color-white"
                            iconClass="dispNone"
                            containerImg="img-containet img-containet-about img-containet-about2"
                            catClass="dispNone"
                            catText="Gadget"
                            subcategoriy=""
                        />
                <PostLi
                            srcImg="images/digital.jpg"
                            altImg="Digital"
                            hrefTitle="https:/"
                            titleShot="Digital"
                            titleAll="Digital"
                            titleViews="15 Posts"
                            divClass="categories-About row"
                            imgClass="categories-img cat-img-About"
                            aClass="post-Recent-title h5 line-a color-white"
                            h6Class="titre-line text-align-center color-white"
                            iconClass="dispNone"
                            containerImg="img-containet img-containet-about img-containet-about3"
                            catClass="dispNone"
                            catText="Digital"
                            subcategoriy=""
                        />
                <PostLi
                            srcImg="images/digital-1024x682.jpg"
                            altImg="Entertainment"
                            hrefTitle="https:/"
                            titleShot="Entertainment"
                            titleAll="Entertainment"
                            titleViews="7 Posts"
                            divClass="categories-About row"
                            imgClass="categories-img cat-img-About"
                            aClass="post-Recent-title h5 line-a color-white"
                            h6Class="titre-line text-align-center color-white"
                            iconClass="dispNone"
                            containerImg="img-containet img-containet-about img-containet-about4"
                            catClass="dispNone"
                            catText="Entertainment"
                            subcategoriy=""
                        />
                </div>
            </section>
            <section className='about-footer'>

            </section>
        </>
    )
}
export default About
