import {  Row } from 'antd'
import PostLi from 'components/PostLi/PostLi'
import articleArray from 'utils/articleBlog'


type Props = {}
const Weekly = (props: Props) => {
    return (
        <>
            <Row justify="space-between" align="top">
                {articleArray.map(
                    ({id,srcImg,altImg,hrefTitle,titleShot,
                        titleAll,titleViews,categoriy,viewsBlokc,dates}) =>  
                    (<PostLi 
                        key={id}
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
                        
                    />
                )).filter((articleArray) => 
                articleArray.props.keyA === "Weekly News" 
                ||
                articleArray.props.dates === "August 26, 2022" 
                )  }
            </Row>
        </>
    )
}
export default Weekly
