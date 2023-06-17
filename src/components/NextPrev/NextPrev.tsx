import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import './NextPrev.scss'
import articleArray from 'utils/articleBlog'
import PostLi from 'components/PostLi/PostLi'
import NextPrevItem from './NextPrevItem'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
type Props = {
    
}
const NextPrev = (props: Props) => {
    const data = useContext(AppContext);
    return (
        <div className="fixed-next-prev-posts show">
            <div className="fixed-post next-post">
                <div className="post-label ">
                    <span className="text">Next</span>
                    <span className="icon">
                        <AiOutlineArrowDown/>
                    </span>
                </div>
                {/* <div className="post-wrapper">
                    {articleArray
                            .filter(
                                (item) =>
                                    // item.id === keyId - 1 ||
                                    item.id === keyId + 1
                            )
                            .map(
                                ({
                                    id,
                                    srcImg,
                                    altImg,
                                    hrefTitle,
                                    titleAll,
                                    dates
                                }) => (
                                    <PostLi
                                        key={id}
                                        srcImg={srcImg}
                                        altImg={altImg}
                                        hrefTitle={hrefTitle}
                                        lili={6}
                                        titleAll={titleAll}
                                        divClass=""
                                        imgClass="post-wrapper-image"
                                        aClass="content-title-a post-Recent-title line-a "
                                        containerImg="post-wrapper-image"
                                        catClass=""
                                        catText=""
                                        dates={dates}
                                        subcategoriy=""
                                    />
                                )
                            )}
                </div> */}
                <NextPrevItem keyIdItem={Number(data?.keyIdpr)+1}/>
            </div>
            <div className="fixed-post prev-post">
                <div className="post-label">
                    <span className="icon">
                    <AiOutlineArrowUp/>
                    </span>
                    <span className="text">Previews</span>
                </div>
                {/* <div className="post-wrapper">
                    <div className="content">
                        <span className="date">September 2, 2022</span>
                        <h3 className="title">
                            <a
                                className="title-animation-underline"
                                href="https://demo.rivaxstudio.com/fonix/main/mobile-photography-tips-playing-with-light/"
                            >
                                Mobile Photography Tips: Playing with Light
                            </a>
                        </h3>
                    </div>
                    <div className="image">
                        <a href="https://demo.rivaxstudio.com/fonix/main/mobile-photography-tips-playing-with-light/">
                            <img
                                width="150"
                                height="150"
                                src="https://demo.rivaxstudio.com/fonix/main/wp-content/uploads/2022/04/daniel-korpai-xgffTVZs1FI-unsplash-150x150.jpg"
                                className="attachment-thumbnail size-thumbnail wp-post-image"
                                alt=""
                                decoding="async"
                                loading="lazy"
                                title="Top 5 New Tech Gadgets You Must Have In 2023"
                                
                                sizes="(max-width: 150px) 100vw, 150px"
                            />
                        </a>
                    </div>
                </div> */}
                {/* <div className="post-wrapper">
                    {articleArray
                            .filter(
                                (item) =>
                                    // item.id === keyId - 1 ||
                                    item.id === keyId - 1
                            )
                            .map(
                                ({
                                    id,
                                    srcImg,
                                    altImg,
                                    hrefTitle,
                                    titleAll,
                                    dates
                                }) => (
                                    <PostLi
                                        key={id}
                                        srcImg={srcImg}
                                        altImg={altImg}
                                        hrefTitle={hrefTitle}
                                        lili={6}
                                        titleAll={titleAll}
                                        divClass=""
                                        imgClass="post-wrapper-image"
                                        aClass="content-title-a post-Recent-title line-a "
                                        containerImg="post-wrapper-image"
                                        catClass=""
                                        catText=""
                                        dates={dates}
                                        subcategoriy=""
                                    />
                                )
                            )}
                </div> */}
                <NextPrevItem keyIdItem={Number(data?.keyIdpr)-1}/>
            </div>
        </div>
    )
}
export default NextPrev
