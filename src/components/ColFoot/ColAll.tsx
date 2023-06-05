import articleArray from 'utils/articleBlog'
import ColFoot from 'components/ColFoot/ColFoot'

type Props = {
    search1:number
    search2:number
    search3?:number
    search4?:number
    img?:string
}
const ColAll = ({search1,search2,search3=999,search4=999, img="no"}: Props) => {
  return (
    <>
    {articleArray
                .map(({ id, titleShot, dates
                    ,srcImg, categoriy }) => (
                                <ColFoot
                                    titleShot={titleShot}
                                    dates={dates}
                                    keykey={id}
                                    srcImg={srcImg}
                                    categoriy={categoriy}
                                    img={img}
                                />
                            ))
                .filter(
                                (articleArray) =>
                                    articleArray.props.keykey === search1 ||
                                    articleArray.props.keykey === search2 ||
                                    articleArray.props.keykey === search3 ||
                                    articleArray.props.keykey === search4
                            )}
    </>
  )
}
export default ColAll