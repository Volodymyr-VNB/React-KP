import articleArray, { Article, getArticleObject } from 'utils/articleBlog'
import './ArticlePost.scss'
import PostLi from 'components/PostLi/PostLi'
import { Image } from 'antd'
import ArticleItem from 'components/ArticleItem/ArticleItem'
import FooterPage from 'components/FooterPage/FooterPage'

type postArtical = {
    keyKey?: number
}
const ArticlePost = (props: postArtical) => {
    let keyKey = 0
    return (
        <>
        <section className="article-sect">
            {articleArray
                .map(
                    ({
                        id,
                        srcImg,
                        altImg,
                        hrefTitle,
                        subcategoriy,
                        titleAll,
                        titleViews,
                        categoriy,
                        dates,
                        autor,
                        views,
                        comentsNum,
        likes,
                    }) => (
                        <ArticleItem
                            srcImg={srcImg}
                            altImg={altImg}
                            hrefTitle={hrefTitle}
                            titleAll={titleAll}
                            titleViews={titleViews}
                            subcategoriy={subcategoriy}
                            dates={dates}
                            keyKey={id}
                            categoriy={categoriy}
                            avtorImg="images/john.jpg"
                            autor={autor}
                            views={views}
                            comentsNum={comentsNum}

                            likes={likes}

                        />
                        
                    )
                )
                .filter((articleArray) => articleArray.props.keyKey === 15)}
        </section>
        <FooterPage/>
        </>
    )
}
export default ArticlePost
