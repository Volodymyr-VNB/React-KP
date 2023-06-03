import './Main.scss'

import { FaRegComment } from 'react-icons/fa'
import PostLi from 'components/PostLi/PostLi'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
// import "./ antd/dist/antd.css";
import Weekly from 'components/Weekly/Weekly'
import Post from 'components/Post/Post'
import CarouselEditor from 'Container/CarouselEditor/CarouselEditor'
import StayConnected from 'components/StayConnected/StayConnected'

type Props = {}
const Main = (props: Props) => {
    return (
        <>
            <main className="main">
                <section className="post">
                    <Post
                        srcImg="images/pretty-blonde-girl-1300x650.jpg"
                        altImg="Pretty Blonde Girl"
                        hrefTitle="https://demo.rivaxstudio.com/fonix/main/top-5-new-tech-gadgets-you-must-have-in-2023/"
                        titleShot="Top 5 New Tech Gadgets You Must Have In 2023"
                        titleAll="Top 5 New Tech Gadgets You Must Have In 2023"
                        titleViews="116 Views"
                        divClass="post-Recent-ImgS row"
                        imgClass="post-Img"
                        aClass="post-Title-a line-a"
                        h4Class="post-coments dispNone"
                        containerImg="post-containerImg scale"
                        contentn="post-contentn"
                        catClass="post-Category h4-cat"
                        catText="Gadget"
                        subcatClass="post-Subcategory h4-cat"
                        subcatText="Tech News"
                        h1Class="post-Title"
                        excerptClass="post-excerpt"
                        excerpt="Far far away, behind the word mountains, far
                        from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live
                        in&#8230;"
                    />

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
                                <PostLi
                                    srcImg="images/stylish-bohemian-couple-700x700.jpg"
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
                                />
                            </li>
                            <li>
                                <PostLi
                                    srcImg="images/wooden-bridge-koh-700x700.jpg"
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
                                    srcImg="images/woman-with-hat-700x700.jpg"
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
                                    srcImg="images/bikini-girl-holding-700x700.jpg"
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
                            srcImg="images/mobile-1000x600.jpg"
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
                            srcImg="images/woman-with-hat-700x700.jpg"
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
                            srcImg="images/digital-1024x682.jpg"
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
                            srcImg="images/gadget-768x960.jpg"
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
                            srcImg="images/lafeStyle-1024x682.jpg"
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
                            dots={false}
                            arrows={true}
                            prevArrow={<LeftOutlined />}
                            nextArrow={<RightOutlined />}
                            className= "ant-carousel0"
                        >
                            <PostLi
                                srcImg="images/stylish-bohemian-couple-700x700.jpg"
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
                                srcImg="images/wooden-bridge-koh-700x700.jpg"
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
                                srcImg="images/woman-with-hat-700x700.jpg"
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
                                srcImg="images/bikini-girl-holding-700x700.jpg"
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
                                srcImg="images/sexy-stylish-450x350.jpg"
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
                                srcImg="images/lost-tourists-450x350.jpg"
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
                    <img src="images/banner-3-700x165.png" alt="baner" />
                </section>
                <section className="weeklyNews">
                    <h3 className="cat-color">Recent</h3>
                    <h3 className="post-title-inner">Weekly News</h3>
                    <div className="weeklyNews-block">
                        <Weekly />
                    </div>
                </section>
                <section className="editorChoice">
                    <div className="editorChoiceFon">
                        <h3 className="cat-color color-white">Recent</h3>
                        <h3 className="post-title-inner color-white">
                            Editor's Choice
                        </h3>
                    </div>
                    <CarouselEditor/>
                </section>
                <section className='stayConnected'>
                   <StayConnected/> 
                </section>
            </main>
        </>
    )
}
export default Main
