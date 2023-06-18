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
    const decrement = (id:number)=>{
        return (id - 1 === 0)?Number(data?.countAll):(id - 1)
    }
    const increment = (id:number)=>{
       return id + 1 > Number(data?.countAll) ? 1
                : id + 1
    }
    
console.log(Number(data?.keyIdpr)-1)

    return (
        <div className="OtherArticles row">
            <h3>Other Articles</h3>
            <div className="OtherArticles-container">
                <div className="next-prev-posts row">
                    <Row justify="space-between" align="top">
                        {articleArray
                            .filter(
                                (item) => item.id === Number(decrement(Number(data?.keyIdpr))) 
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
                                        arrows={'Previous'}
                                        keyKey={Number(decrement(Number(data?.keyIdpr)))}
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
                        {articleArray
                            .filter(
                                (item) =>
                                    item.id === Number(increment(Number(data?.keyIdpr))) 
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
                                        arrows={'Next'}
                                        keyKey={Number(increment(Number(data?.keyIdpr)))}
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
