import { Row } from 'antd'
import './OtherArticles.scss'
import articleArray from 'utils/articleBlog'
import PostLi from 'components/PostLi/PostLi'
import NextPrev from 'components/NextPrev/NextPrev'
type Props = {
    keyId: number
}
const OtherArticles = ({ keyId }: Props) => {
    return (
        <div className="OtherArticles row">
            <h3>Other Articles</h3>
            <div className="OtherArticles-container">
                <div className="next-prev-posts row">
                    <Row justify="space-between" align="top">
                        {articleArray
                            .filter(
                                (item) =>
                                    item.id === keyId - 1 ||
                                    item.id === keyId + 1
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
                                            keyId - 1 === id
                                                ? 'Previous'
                                                : 'Next'
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
                <NextPrev keyId={keyId}/>
            </div>
        </div>
    )
}
export default OtherArticles
