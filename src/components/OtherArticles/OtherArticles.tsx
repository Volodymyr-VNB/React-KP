import { Row } from 'antd'
import './OtherArticles.scss'
import articleArray from 'utils/articleBlog'
import PostLi from 'components/PostLi/PostLi'
import NextPrev from 'components/NextPrev/NextPrev'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
type Props = {
    
}
const OtherArticles = (props : Props) => {
    const data = useContext(AppContext);
console.log(Number(data?.keyIdpr)-1)

    return (
        <div className="OtherArticles row">
            <h3>Other Articles</h3>
            <div className="OtherArticles-container">
                <div className="next-prev-posts row">
                    <Row justify="space-between" align="top">
                        {articleArray
                            .filter(
                                (item) =>
                                    item.id === Number(data?.keyIdpr)-1  ||
                                    item.id === Number(data?.keyIdpr)+1
                            )
                            .map(
                                ({
                                    id,
                                    srcImg,
                                    altImg,
                                    hrefTitle,
                                    titleAll,
                                }) => (
                                    <PostLi
                                        key={id}
                                        arrows={
                                            Number(data?.keyIdpr) - 1 === id
                                                ? 'Previous'
                                                : 'Next'
                                        }
                                        keyKey={
                                            Number(data?.keyIdpr) - 1 === id
                                                ? Number(data?.keyIdpr) - 1 
                                                : Number(data?.keyIdpr) + 1 
                                        }
                                        srcImg={srcImg}
                                        altImg={altImg}
                                        hrefTitle={hrefTitle}
                                        lili={5}
                                        titleAll={titleAll}
                                        divClass=" row weeklyNews-item"
                                        imgClass="categories-img weeklyNews-img"
                                        aClass="post-Recent-title line-a line-a-l "
                                        containerImg="wweeklyNews-container"
                                        catClass=""
                                        catText=""
                                        dates=""
                                        subcategoriy=""
                                    />
                                )
                            )}
                    </Row>
                </div>
                <NextPrev />
            </div>
        </div>
    )
}
export default OtherArticles
