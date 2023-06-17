import articleArray from 'utils/articleBlog'
import './BrowseCategory.scss'
import PostLi from 'components/PostLi/PostLi'
import TrendingNews from 'components/TrendingNews/TrendingNews'
import StayConnected from 'components/StayConnected/StayConnected'
import FooterPage from 'components/FooterPage/FooterPage'

type Props = {
    categogiyBrow:string
}
const BrowseCategory = ({categogiyBrow}: Props) => {
    let count= articleArray.filter((articleArray) =>
    articleArray.categoriy === categogiyBrow).length
    return (
        <>
            <section className="browse-Category" id='Travel'>
                <div className="browse-headline">
                    <h4>Browse Category</h4>
                    <h1>{categogiyBrow}</h1>
                    <h4>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine.
                    </h4>
                    <h4 className="post-count ">{count} Articles</h4>
                </div>
            </section>
            <section className="browse-centr row">
                <div className="brows-articl col-8">
                    {articleArray
                        .map(
                            ({
                                id,
                                srcImg,
                                altImg,
                                hrefTitle,
                                titleShot,
                                autor,
                                excerpt,
                                titleAll,
                                titleViews,
                                categoriy,
                                viewsBlokc,
                                dates,
                                subcategoriy,
                            }) => (
                                
                                <PostLi
                                    key={id}
                                    keyA={viewsBlokc}
                                    srcImg={srcImg}
                                    altImg={altImg}
                                    hrefTitle={hrefTitle}
                                    titleShot={titleShot}
                                    titleAll={titleAll}
                                    titleViews={titleViews}
                                    divClass=" row Brows-item"
                                    imgClass="categories-img browse-img "
                                    aClass="post-Recent-title line-a line-a-l h3 brow-title"
                                    h6Class="avtor-blok-txt row-col"
                                    iconClass="displayBlokc"
                                    containerImg="brows-container "
                                    catClass="featured-cat h4-cat brows-cat"
                                    catText={categoriy}
                                    dates={dates}
                                    lili={2}
                                    avtorImg="images/john.jpg"
                                    autor={autor}
                                    excerpt={excerpt}
                                    subcategoriy={subcategoriy}
                                />
                                
                            )
                        )
                        .filter(
                            (articleArray) =>
                                articleArray.props.catText === categogiyBrow
                        ) }
                </div>
                <aside className="aside col-4">
                    <TrendingNews/>
                    <StayConnected
                    sizeStay = "L"/>
                </aside>
            </section>
            <FooterPage/>
        </>
    )
}
export default BrowseCategory
