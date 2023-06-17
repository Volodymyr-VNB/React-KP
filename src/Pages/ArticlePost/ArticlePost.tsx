import articleArray, { Article, getArticleObject } from 'utils/articleBlog'
import './ArticlePost.scss'

import ArticleItem from 'components/ArticleItem/ArticleItem'
import FooterPage from 'components/FooterPage/FooterPage'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'

type postArtical = {}

const ArticlePost = (props: postArtical) => {
    const data = useContext(AppContext)
    return (
        <>
            <section className="article-sect">
                {articleArray
                    .filter((item) => item.id === data?.keyIdpr)
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
                    )}
            </section>
            <FooterPage />
        </>
    )
}
export default ArticlePost
