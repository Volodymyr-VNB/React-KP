import articleArray from "utils/articleBlog"
import "./TrendingNews.scss"
import PostLi from "components/PostLi/PostLi"


type Props = {}
const TrendingNews = (props: Props) => {
  return (
    <section className="trendingNews">
        <div className="trend-title row">
            <h1>Trending News</h1>
            <span  ></span>
            <div className="trend-line"></div>
        </div>
        <div className="trend-arct">
        
        {articleArray.map(
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
                        divClass=" row trend-item"
                        imgClass="categories-img trend-img"
                        aClass="post-Recent-title line-a line-a-l "
                        h6Class="titre-line "
                        iconClass="displayBlokc"
                        containerImg="trend-container scale"
                        catClass="trend-text"
                        catText={categoriy}
                        dates={dates}
                        subcategoriy={subcategoriy}
                        lili={3}
                        
                    />
                )).filter((articleArray) => 
                // articleArray.props.keyKey === 21 
                articleArray.props.keyA === "Trending News" 
                 
                )  }
        </div>

    </section>
    
  )
}
export default TrendingNews