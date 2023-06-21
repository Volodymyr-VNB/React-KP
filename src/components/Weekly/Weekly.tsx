import {  Row } from 'antd'
import PostLi from 'components/PostLi/PostLi'
import articleArray from 'utils/articleBlog'


type Props = {}
const Weekly = (props: Props) => {
    return (
        <>
            <Row justify="space-between" align="top">
                {articleArray
                .filter((item) => 
                item.viewsBlokc === "Weekly News" 
                ||
                item.dates === "August 26, 2022" 
                ) 
                .map(
                    ({id,srcImg,altImg,hrefTitle,titleShot,subcategoriy,
                        titleAll,titleViews,categoriy,viewsBlokc,dates}) =>  
                    (<PostLi 
                        key={id}
                        keyKey={id}
                        keyA ={viewsBlokc}
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
                        dates={dates}
                        subcategoriy={subcategoriy}
                        
                    />
                )) }
            </Row>
        </>
    )
}
export default Weekly
