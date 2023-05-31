import {  Row } from 'antd'
// import Grid from 'antd/es/card/Grid'
import PostLi from 'components/PostLi/PostLi'
import articleArray from 'utils/articleBlog'


    articleArray.map((article) => console.log('article', article.srcImg))


type Props = {}
const Weekly = (props: Props) => {
    return (
        <>
            <Row gutter={[32, 24]}>
                {articleArray.map((article) => (
                    <PostLi
                        srcImg={article.srcImg}
                        altImg={article.altImg}
                        hrefTitle={article.hrefTitle}
                        titleShot={article.titleShot}
                        titleAll={article.titleAll}
                        titleViews={article.titleViews}
                        divClass=" row weeklyNews-item"
                        imgClass="categories-img weeklyNews-img"
                        aClass="post-Recent-title line-a line-a-l "
                        h6Class="titre-line "
                        iconClass="displayBlokc"
                        containerImg="wweeklyNews-container"
                        catClass="featured-cat h4-cat weeklyText"
                        catText={article.categoriy}
                    />
                ))}
            </Row>
        </>
    )
}
export default Weekly
