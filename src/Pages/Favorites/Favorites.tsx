import articleArray from 'utils/articleBlog'
import '../BrowseCategory/BrowseCategory.scss'
import './Favorites.scss'
import PostLi from 'components/PostLi/PostLi'
import TrendingNews from 'components/TrendingNews/TrendingNews'
import StayConnected from 'components/StayConnected/StayConnected'
import FooterPage from 'components/FooterPage/FooterPage'
import { useAppSelector } from 'redux/hoor'
import { HeartTwoTone } from '@ant-design/icons'

type Props = {
    id: number
}
const Favorites = ({ id }: Props) => {
    

    const data = useAppSelector((state) => state.articleLikeState)

    let dataLikes = []
    for (const property in data) {
        if (data[property] === true) {
            for (const index in articleArray) {
                if (Number(property) === articleArray[index].id) {
                    dataLikes.push(articleArray[index])
                }
            }
        }
    }
    
    const countData = Object.values(
        useAppSelector((state) => state.articleLikeState)
    ).filter((item) => item === true).length

    return (
        <>
            <section className="browse-Category" id="Travel">
                <div className="browse-headline">
                    <h1>Favorites</h1>
                   
                    <h4>
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine.
                    </h4>
                    <h3 className="post-count post-count-likes ">
                        {countData + ' '}
                        <HeartTwoTone
                            twoToneColor="#eb2f96"
                            className="heartTwoToneClick"
                        />
                    </h3>
                </div>
            </section>
            <section className="browse-centr row right">
                <div className="brows-articl col-8">
                    {dataLikes.map(
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
                                keyKey={id}
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
                    )}
                </div>
                <aside className="aside col-4">
                    <TrendingNews />
                    <StayConnected sizeStay="L" />
                </aside>
            </section>
            <FooterPage />
        </>
    )
}
export default Favorites
