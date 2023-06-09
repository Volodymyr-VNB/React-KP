import articleArray from 'utils/articleBlog'
import './ArticlePost.scss'

import ArticleItem from 'components/ArticleItem/ArticleItem'
import FooterPage from 'components/FooterPage/FooterPage'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
import Reviews from 'components/Reviews/Reviews'

type postArtical = {}

const ArticlePost = (props: postArtical) => {
    const dataC = useContext(AppContext)
    const divStyle = {
        width: 0,
    }

    return (
        <>
            <section className="article-sect">
                {articleArray
                    .filter((item) => item.id === dataC?.keyIdpr)
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
                           coments,
                        }) => (
                            <ArticleItem
                                key={id}
                                srcImg={srcImg}
                                altImg={altImg}
                                hrefTitle={hrefTitle}
                                titleAll={titleAll}
                                titleViews={titleViews}
                                subcategoriy={subcategoriy}
                                dates={dates}
                                keyKey={id}
                                categoriy={categoriy}
                                avtorImg="/images/john.jpg"
                                autor={autor}
                                views={views}
                                coments={coments}
                                
                            />
                        )
                    )}
                <div className="reading-progress-indicator">
                    <span className="progress-indicator" style={divStyle}>
                   </span>
                </div>
            </section>
            <Reviews key={dataC?.keyIdpr} id={dataC?.keyIdpr!} />

            <FooterPage />
        </>
    )
}
export default ArticlePost
