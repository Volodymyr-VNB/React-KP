import {  Row } from 'antd'
// import Grid from 'antd/es/card/Grid'
import PostLi from 'components/PostLi/PostLi'
import articleArray from 'utils/articleBlog'


    // articleArray.map((article) => console.log('article', article.srcImg))


type Props = {}
const Weekly = (props: Props) => {
    return (
        <>
            <Row gutter={32} justify="space-between" align="top">
                {articleArray.map(
                    ({id,srcImg,altImg,hrefTitle,titleShot,
                        titleAll,titleViews,categoriy}) =>  
                    (<PostLi 
                        key={id}
                        srcImg={srcImg}
                        altImg={altImg}
                        hrefTitle={hrefTitle}
                        titleShot={titleShot}
                        titleAll={titleAll}
                        titleViews={titleViews}
                        divClass=" row weeklyNews-item"
                        imgClass="categories-img weeklyNews-img"
                        aClass="post-Recent-title line-a line-a-l "
                        h6Class="titre-line "
                        iconClass="displayBlokc"
                        containerImg="wweeklyNews-container"
                        catClass="featured-cat h4-cat weeklyText"
                        catText={categoriy}
                    />
                ))}
            </Row>
        </>
    )
}
export default Weekly
