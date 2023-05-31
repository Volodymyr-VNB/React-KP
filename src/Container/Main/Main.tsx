import './Main.scss'

import prettyBlondeGirl from 'assets/pretty-blonde-girl-1300x650.jpg'
import bikiniGirlHolding from 'assets/bikini-girl-holding-700x700.jpg'
import stylishBohemianCouple from 'assets/stylish-bohemian-couple-700x700.jpg'
import womanWithHat from 'assets/woman-with-hat-700x700.jpg'
import woodenBridgeKoh from 'assets/wooden-bridge-koh-700x700.jpg'
import {  FaRegComment } from 'react-icons/fa'
import PostLi from 'components/PostLi/PostLi'
import mobile from 'assets/mobile-1000x600.jpg'
import digital from 'assets/digital-1024x682.jpg'
import cadget from 'assets/gadget-768x960.jpg'
import livestule from 'assets/lafeStyle-1024x682.jpg'
import sexyStylish from 'assets/sexy-stylish-450x350.jpg'
import lost from 'assets/lost-tourists-450x350.jpg'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
// import "./ antd/dist/antd.css";
import baner from 'assets/banner-3-700x165.png'
// import game from 'assets/game-changing-1000x600.jpg'
// import mobile2 from 'assets/mobile2.jpg'
// import mobile3 from 'assets/mobile3.jpg'
// import mobile4 from 'assets/mobile4.jpg'
// import digital1 from 'assets/how-to-make1000x600.jpg'
// import digital2 from 'assets/digital2-1300x650.jpg'
// import digital3 from 'assets/digital31000x600.jpg'
// import gadget1 from 'assets/gadget1-1000x600.jpg'
// import gadget3 from 'assets/gadget3-450x350.jpg'
import Weekly from 'components/Weekly/Weekly'

// const contentStyle: React.CSSProperties = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// }

// const MainC: React.FC = () => {
//   const onChange = (currentSlide: number) => {
//     console.log(currentSlide);
//   };
// const Arrow = ({ type, style, className, onClick }) => (
//   <LeftSquareOutlined type={type} style={style} className={className} onClick={onClick} />
// );
// const Arrow1 = ({ type, style, className, onClick }) => (
//   <RightSquareOutlined  type={type} style={style} className={className} onClick={onClick} />
// );

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <main className="main">
                <section className="post">
                    <div className="post-Recent-ImgS row">
                        <img
                            className="post-Img"
                            src={prettyBlondeGirl}
                            alt="Pretty Blonde Girl"
                        />
                        <div className="post-contentn">
                            <div className="row ">
                                <div className="post-Category h4-cat">
                                    <a href="#top">Gadget</a>{' '}
                                </div>
                                <div className="post-Subcategory h4-cat">
                                    <a href="#top">Tech News</a>{' '}
                                </div>
                            </div>
                            <h1 className="post-Title">
                                <a
                                    href="https://demo.rivaxstudio.com/fonix/main/top-5-new-tech-gadgets-you-must-have-in-2023/"
                                    className="post-Title-a line-a"
                                    title="Top 5 New Tech Gadgets You Must Have In 2023"
                                >
                                    Top 5 New Tech Gadgets You Must Have In 2023
                                </a>
                            </h1>
                            <h4 className="post-excerpt">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in&#8230;
                            </h4>
                            <h4 className="post-coments dispNone">
                                <FaRegComment /> No coments. 116 Views
                            </h4>
                        </div>
                    </div>

                    <div className="post-Recent row">
                        <div className="post-Recent-a row">
                            <span className="post-title-inner row">
                                <span className="title-text">Recent Post</span>
                                <span className="subtitle-text-wrap row">
                                    <span className="subtitle-text">HOT</span>
                                </span>
                            </span>
                        </div>
                        <ol className="post-news">
                            <li>
                                {' '}
                                <PostLi
                                    srcImg={stylishBohemianCouple}
                                    altImg="Stylish Bohemian Couple"
                                    hrefTitle="https:/"
                                    titleShot="10 Honeymoon Destinations for Every Budget"
                                    titleAll="10 Honeymoon Destinations for Every Budget"
                                    titleViews="112 Views"
                                    divClass="post-li"
                                    imgClass="post-Recent-img"
                                    containerImg="post-Recent-img"
                                    aClass="post-Recent-title line-a"
                                    h6Class="titre-line"
                                    iconClass="displayBlock"
                                    catClass="dispNone"
                                    catText="Travel"
                                />{' '}
                            </li>
                            <li>
                                <PostLi
                                    srcImg={woodenBridgeKoh}
                                    altImg="Wooden Bridge Koh"
                                    hrefTitle="https:/"
                                    titleShot="15 Underrated but Amazing Island Vacations"
                                    titleAll="15 Underrated but Amazing Island Vacations"
                                    titleViews="81 Views"
                                    divClass="post-li"
                                    imgClass="post-Recent-img"
                                    containerImg="post-Recent-img"
                                    aClass="post-Recent-title line-a"
                                    h6Class="titre-line"
                                    iconClass="displayBlock"
                                    catClass="dispNone"
                                    catText=""
                                />
                            </li>
                            <li>
                                <PostLi
                                    srcImg={womanWithHat}
                                    altImg="Woman With Hat"
                                    hrefTitle="https:/"
                                    titleShot="How a Beach Vacation Can be a Skincare Treatment"
                                    titleAll="How a Beach Vacation Can be a Skincare Treatment"
                                    titleViews="98 Views"
                                    divClass="post-li"
                                    imgClass="post-Recent-img"
                                    containerImg="post-Recent-img"
                                    aClass="post-Recent-title line-a"
                                    h6Class="titre-line"
                                    iconClass="displayBlock"
                                    catClass="dispNone"
                                    catText="Travel"
                                />
                            </li>
                            <li>
                                <PostLi
                                    srcImg={bikiniGirlHolding}
                                    altImg="Bikini Girl Holding"
                                    hrefTitle="https:/"
                                    titleShot="How to Turn a Mini Camera into a PowerTech"
                                    titleAll="How to Turn a Mini Camera into a PowerTech"
                                    titleViews="88 Views"
                                    divClass="post-li"
                                    imgClass="post-Recent-img"
                                    containerImg="post-Recent-img"
                                    aClass="post-Recent-title line-a"
                                    h6Class="titre-line"
                                    iconClass="displayBlock"
                                    catClass="dispNone"
                                    catText="Travel"
                                />
                            </li>
                        </ol>
                    </div>
                </section>
                <section className="categories ">
                    <h3 className="cat-color">Recent</h3>
                    <h3 className="post-title-inner">Categories</h3>
                    <div className="categories-line row">
                        <PostLi
                            srcImg={mobile}
                            altImg="Mobile"
                            hrefTitle="https:/"
                            titleShot="Mobile"
                            titleAll="Mobile "
                            titleViews="6 Posts"
                            divClass="categories-item row"
                            imgClass="categories-img"
                            aClass="post-Recent-title line-a"
                            h6Class="titre-line"
                            iconClass="dispNone"
                            containerImg="img-containet"
                            catClass="dispNone"
                            catText="Mobile"
                        />
                        <PostLi
                            srcImg={womanWithHat}
                            altImg="Travel"
                            hrefTitle="https:/"
                            titleShot="Travel"
                            titleAll="Travel"
                            titleViews="7 Posts"
                            divClass="categories-item row"
                            imgClass="categories-img"
                            aClass="post-Recent-title line-a"
                            h6Class="titre-line text-align-center"
                            iconClass="dispNone"
                            containerImg="img-containet"
                            catClass="dispNone"
                            catText="Travel"
                        />
                        <PostLi
                            srcImg={digital}
                            altImg="Digital"
                            hrefTitle="https:/"
                            titleShot="Digital"
                            titleAll="Digital"
                            titleViews="15 Posts"
                            divClass="categories-item row"
                            imgClass="categories-img"
                            aClass="post-Recent-title line-a"
                            h6Class="titre-line text-align-center"
                            iconClass="dispNone"
                            containerImg="img-containet"
                            catClass="dispNone"
                            catText="Digital"
                        />
                        <PostLi
                            srcImg={cadget}
                            altImg="Cadget"
                            hrefTitle="https:/"
                            titleShot="Cadget"
                            titleAll="Cadget"
                            titleViews="6 Posts"
                            divClass="categories-item row"
                            imgClass="categories-img"
                            aClass="post-Recent-title line-a"
                            h6Class="titre-line text-align-center"
                            iconClass="dispNone"
                            containerImg="img-containet"
                            catClass="dispNone"
                            catText="Cadget"
                        />
                        <PostLi
                            srcImg={livestule}
                            altImg="Livestule"
                            hrefTitle="https:/"
                            titleShot="Livestule"
                            titleAll="Livestule"
                            titleViews="14 Posts"
                            divClass="categories-item row"
                            imgClass="categories-img"
                            aClass="post-Recent-title line-a"
                            h6Class="titre-line text-align-center"
                            iconClass="dispNone"
                            containerImg="img-containet"
                            catClass="dispNone"
                            catText="Livestule"
                        />
                    </div>
                </section>
                <section className="featured-News">
                    <h3 className="cat-color">Recent</h3>
                    <h3 className="post-title-inner">Featured News</h3>
                    <div className="categories-line row">
                        <Carousel
                            autoplay={true}
                            autoplaySpeed={4000}
                            slidesToShow={4}
                            focusOnSelect={true}
                            //  swipeToSlide= {1}
                            dots={false}
                            //  prevArrow={<Arrow type="left"  />}
                            //  nextArrow={<Arrow1 type="right" className='.right' />}
                            arrows={true}
                            prevArrow={<LeftOutlined />}
                            nextArrow={<RightOutlined />}
                        >
                            <PostLi
                                srcImg={stylishBohemianCouple}
                                altImg="Stylish Bohemian Couple"
                                hrefTitle="https:/"
                                titleShot="10 Honeymoon Destinations for Every Budget"
                                titleAll="10 Honeymoon Destinations for Every Budget "
                                titleViews="4 min Read"
                                divClass="categories-item row featured-item"
                                imgClass="categories-img featured-img"
                                aClass="post-Recent-title line-a line-a-l"
                                h6Class="titre-line"
                                iconClass="dispNone"
                                containerImg="img-containet-featured"
                                catClass="featured-cat h4-cat"
                                catText="Travel"
                            />
                            <PostLi
                                srcImg={woodenBridgeKoh}
                                altImg="Wooden Bridge Koh"
                                hrefTitle="https:/"
                                titleShot="15 Underrated but Amazing Island Vacations"
                                titleAll="15 Underrated but Amazing Island Vacations "
                                titleViews="4 min Read"
                                divClass="categories-item row featured-item"
                                imgClass="categories-img featured-img"
                                aClass="post-Recent-title line-a line-a-l"
                                h6Class="titre-line"
                                iconClass="dispNone"
                                containerImg="img-containet-featured"
                                catClass="featured-cat h4-cat"
                                catText="Entertainment"
                            />
                            <PostLi
                                srcImg={womanWithHat}
                                altImg="Woman With Hat"
                                hrefTitle="https:/"
                                titleShot="How a Beach Vacation Can be a Skincare Treatment"
                                titleAll="How a Beach Vacation Can be a Skincare Treatment"
                                titleViews="4 min Read"
                                divClass="categories-item row featured-item"
                                imgClass="categories-img featured-img"
                                aClass="post-Recent-title line-a line-a-l"
                                h6Class="titre-line"
                                iconClass="dispNone"
                                containerImg="img-containet-featured"
                                catClass="featured-cat h4-cat"
                                catText="Lifestyle"
                            />
                            <PostLi
                                srcImg={bikiniGirlHolding}
                                altImg="Bikini Girl Holding"
                                hrefTitle="https:/"
                                titleShot="How to Turn a Mini Camera into a PowerTech"
                                titleAll="How to Turn a Mini Camera into a PowerTech"
                                titleViews="4 min Read"
                                divClass="categories-item row featured-item"
                                imgClass="categories-img featured-img"
                                aClass="post-Recent-title line-a line-a-l"
                                h6Class="titre-line"
                                iconClass="dispNone"
                                containerImg="img-containet-featured"
                                catClass="featured-cat h4-cat"
                                catText="Travel"
                            />
                            <PostLi
                                srcImg={sexyStylish}
                                altImg="Bikini Girl Holding"
                                hrefTitle="https:/"
                                titleShot="Most Beautiful Days in Sydney Have Started"
                                titleAll="Most Beautiful Days in Sydney Have Started"
                                titleViews="4 min Read"
                                divClass="categories-item row featured-item"
                                imgClass="categories-img featured-img"
                                aClass="post-Recent-title line-a line-a-l"
                                h6Class="titre-line"
                                iconClass="dispNone"
                                containerImg="img-containet-featured"
                                catClass="featured-cat h4-cat"
                                catText="Lifestyle"
                            />
                            <PostLi
                                srcImg={lost}
                                altImg="Travel in Bermuda"
                                hrefTitle="https:/"
                                titleShot="Travel in Bermuda: Read Tips & Tricks to the Island Life   "
                                titleAll="Travel in Bermuda: Read Tips & Tricks to the Island Life   "
                                titleViews="4 min Read"
                                divClass="categories-item row featured-item"
                                imgClass="categories-img featured-img"
                                aClass="post-Recent-title line-a line-a-l"
                                h6Class="titre-line"
                                iconClass="dispNone"
                                containerImg="img-containet-featured"
                                catClass="featured-cat h4-cat"
                                catText="Travel"
                            />
                        </Carousel>
                    </div>
                </section>
                <section className="baner">
                    <img src={baner} alt="baner" />
                </section>
                <section className="weeklyNews">
                    <h3 className="cat-color">Recent</h3>
                    <h3 className="post-title-inner">Weekly News</h3>
                    <div className="weeklyNews">
                        {/* <PostLi
            srcImg    = {game}
            altImg    = "Game"
            hrefTitle = "https:/"
            titleShot = "Game Changing Virtual Reality Console"
            titleAll  = "Game Changing Virtual Reality Console "
            titleViews= "157 Views"
            divClass  = ' row weeklyNews-item'
            imgClass  = 'categories-img weeklyNews-img'
            aClass    = "post-Recent-title line-a line-a-l "
            h6Class   = 'titre-line '
            iconClass = "displayBlokc"
            containerImg= "wweeklyNews-container"
            catClass  = "featured-cat h4-cat weeklyText"
            catText   = "Digital"
            /> */}
                        <Weekly />
                    </div>
                </section>
            </main>
        </>
    )
}
export default Main
