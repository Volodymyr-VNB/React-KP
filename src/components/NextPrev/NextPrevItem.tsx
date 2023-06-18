import PostLi from "components/PostLi/PostLi"
import articleArray from "utils/articleBlog"

type Props = {
    keyIdItem:number
}
const NextPrevItem = ({keyIdItem}: Props) => {
  return (
    <div className="post-wrapper">
                    {articleArray
                            .filter(
                                (item) =>
                                    // item.id === keyId - 1 ||
                                    item.id === keyIdItem
                            )
                            .map(
                                ({
                                    id,
                                    srcImg,
                                    altImg,
                                    hrefTitle,
                                    titleAll,
                                    dates
                                }) => (
                                    <PostLi
                                        keyKey={keyIdItem}
                                        srcImg={srcImg}
                                        altImg={altImg}
                                        hrefTitle={hrefTitle}
                                        lili={6}
                                        titleAll={titleAll}
                                        divClass=""
                                        imgClass="post-wrapper-image"
                                        aClass="content-title-a post-Recent-title line-a "
                                        containerImg="post-wrapper-image"
                                        catClass=""
                                        catText=""
                                        dates={dates}
                                        subcategoriy=""
                                    />
                                )
                            )}
                </div>
  )
}
export default NextPrevItem