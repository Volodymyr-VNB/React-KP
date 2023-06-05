import articleArray from 'utils/articleBlog'


type Props = {
    search1:number,
    search2:number,
    search3:number,
    search4:number,
    keykey?: number
}
const ColAlljpg = ({search1,search2,search3,search4}: Props) => {
  return (
    <>
    {articleArray
                .map(({ id, srcImg,titleShot, categoriy}) => (
                  
                    < >
                    <img src={srcImg} className='col-img' alt={titleShot} />           
                    <h5>{categoriy}</h5>
                    </>

                            ))
                .filter((articleArray) =>
                                    articleArray.props.keykey === search1 ||
                                    articleArray.props.keykey === search2 ||
                                    articleArray.props.keykey === search3 ||
                                    articleArray.props.keykey === search4 
                            )}
    </>
  )
}
export default ColAlljpg