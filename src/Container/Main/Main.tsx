import './Main.scss'

import PostLi from 'components/PostLi/PostLi'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import Weekly from 'components/Weekly/Weekly'
import Post from 'components/Post/Post'
import CarouselEditor from 'components/CarouselEditor/CarouselEditor'
import StayConnected from 'components/StayConnected/StayConnected'
import articleArray from 'utils/articleBlog'
import Footer from 'Container/Footer/Footer'


type Props = {}
const Main = (props: Props) => {
    const hrefTitleswitch =(cat:string) =>{
        let html=""
        switch (cat) {
            case 'Travel':
                html = '/browseCategory'
                break
            case 'Lifestyle':
                html = '/lifestyle'
                break
            case 'Fashion':
                html = '/fashion'
                break
            case 'Entertainment':
                html = '/entertainment'
                break
            case 'Digital':
                html = '/digital'
                break
    
            case 'Mobile':
                html = '/mobile'
                break
            case 'Gadget':
                html = '/gadget'
                break
                case 'Tech News':
                    html = '/techNews'
                break
            default:
                html = '/'
        }
        return html

    }
    return (
        <>
            <main className="main">
                <section className="post">
                    {articleArray
                        .map(
                            ({
                                id,
                                srcImg,
                                altImg,
                                hrefTitle,
                                titleShot,
                                subcategoriy,
                                titleAll,
                                titleViews,
                                categoriy,
                                excerpt,
                            }) => (
                                <Post
                                    keyKey={id}
                                    srcImg={srcImg}
                                    altImg={altImg}
                                    hrefTitle={hrefTitle}
                                    titleShot={titleShot}
                                    titleAll={titleAll}
                                    titleViews={titleViews}
                                    divClass="post-Recent-ImgS row"
                                    imgClass="post-Img"
                                    aClass="post-Title-a line-a"
                                    h4Class="post-coments dispNone"
                                    containerImg="post-containerImg scale"
                                    contentn="post-contentn"
                                    catClass="post-Category h4-cat"
                                    catText={categoriy}
                                    subcatClass="post-Subcategory h4-cat"
                                    subcatText={subcategoriy}
                                    h1Class="post-Title"
                                    excerptClass="post-excerpt"
                                    excerpt={excerpt}
                                />
                            )
                        )
                        .filter(
                            (articleArray) => articleArray.props.keyKey === 15
                            // articleArray.props.keyA === "Weekly News"
                        )}
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
                            {articleArray
                                .map(
                                    ({
                                        id,
                                        srcImg,
                                        altImg,
                                        hrefTitle,
                                        titleShot,
                                        subcategoriy,
                                        titleAll,
                                        titleViews,
                                        categoriy,
                                        viewsBlokc,
                                        dates,
                                    }) => (
                                        <PostLi
                                            lili={1}
                                            key={id}
                                            keyA={viewsBlokc}
                                            srcImg={srcImg}
                                            altImg={altImg}
                                            hrefTitle={hrefTitle}
                                            titleShot={titleShot}
                                            titleAll={titleAll}
                                            titleViews={titleViews}
                                            divClass="post-li"
                                            imgClass="post-Recent-img"
                                            containerImg="post-Recent-img"
                                            aClass="post-Recent-title line-a"
                                            h6Class="titre-line"
                                            iconClass="displayBlock"
                                            catClass="dispNone"
                                            catText={categoriy}
                                            dates={dates}
                                            subcategoriy={subcategoriy}
                                        />
                                    )
                                )
                                .filter(
                                    (articleArray) =>
                                        articleArray.props.dates ===
                                        'August 26, 2022'
                                    // articleArray.props.keyA === "Weekly News"
                                )}
                        </ol>
                    </div>
                </section>
                <section className="categories ">
                    <h3 className="cat-color">Recent</h3>
                    <h3 className="post-title-inner">Categories</h3>
                    <div className="categories-line row">
                       
                        {articleArray
                            .map(
                                ({
                                    id,
                                    srcImg,
                                    altImg,
                                    hrefTitle,
                                    titleShot,
                                    subcategoriy,
                                    titleAll,
                                    titleViews,
                                    categoriy,
                                    viewsBlokc,
                                    dates,
                                }) => (
                                    <PostLi
                                        
                                        keyKey={id}
                                        keyA={viewsBlokc}
                                        srcImg={srcImg}
                                        altImg={altImg}
                                        hrefTitle= {hrefTitleswitch(categoriy) }
                                        titleShot={titleShot}
                                        titleAll={categoriy}
                                        titleViews={titleViews}
                                        divClass="categories-item row"
                                        imgClass="categories-img"
                                        containerImg="img-containet"
                                        aClass="post-Recent-title line-a"
                                        h6Class="titre-line"
                                        iconClass="dispNone"
                                        catClass="dispNone"
                                        catText={categoriy}
                                        dates={dates}
                                        subcategoriy={subcategoriy}
                                        lili={4}
                                    />
                                )
                            )
                            .filter(
                                (articleArray) =>
                                    articleArray.props.keyKey === 5 ||
                                    articleArray.props.keyKey === 4 ||
                                    articleArray.props.keyKey === 12 ||
                                    articleArray.props.keyKey === 17 ||
                                    articleArray.props.keyKey === 18
                                
                            )}
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
                            className="ant-carousel0"
                        >
                            {articleArray
                                .map(
                                    ({
                                        id,
                                        srcImg,
                                        altImg,
                                        hrefTitle,
                                        titleShot,
                                        subcategoriy,
                                        titleAll,
                                        titleViews,
                                        categoriy,
                                        viewsBlokc,
                                    }) => (
                                        <PostLi
                                            key={id}
                                            keyA={viewsBlokc}
                                            srcImg={srcImg}
                                            altImg={altImg}
                                            hrefTitle={hrefTitle}
                                            titleShot={titleShot}
                                            titleAll={titleAll}
                                            titleViews={titleViews}
                                            divClass="categories-item row featured-item"
                                            imgClass="categories-img featured-img"
                                            aClass="post-Recent-title line-a line-a-l"
                                            h6Class="titre-line "
                                            iconClass="dispNone"
                                            containerImg="img-containet-featured"
                                            catClass="featured-cat h4-cat"
                                            catText={categoriy}
                                            subcategoriy={subcategoriy}
                                        />
                                    )
                                )
                                .filter(
                                    (articleArray) =>
                                        articleArray.props.titleShot ===
                                            'Sony Laptops Are Still Part Of The Sony Family' ||
                                        articleArray.props.keyA ===
                                            'Featured News'
                                )}
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
                    <CarouselEditor />
                </section>
                <section className="stayConnected">
                    <StayConnected />
                </section>
            </main>

            <Footer />
        </>
    )
}
export default Main
