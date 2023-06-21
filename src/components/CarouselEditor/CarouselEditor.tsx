import { Carousel } from 'antd'
import { LeftSquareFilled , RightSquareFilled  } from '@ant-design/icons'
import Post from 'components/Post/Post'
import './CarouselEditor.scss'
import articleArray from 'utils/articleBlog'

type Props = {}
const CarouselEditor = (props: Props) => {
    return (
        <div className="editorChoiceCarousel ">
        <Carousel
            // className="ant-carousel1"
            autoplay={true}
           
            slidesToShow={1}
            
            dots = { true     }
            
            
            arrows={true}
            prevArrow={<LeftSquareFilled  />}
            nextArrow={<RightSquareFilled />}
            adaptiveHeight ={true}
            className= "ant-carousel2"
             centerMode = {true}
             centerPadding= "410px"
        >
            
            {articleArray
            .filter((item) => 
            item.id === 15  ||
            item.id === 16  ||
            item.id === 2  ||
            item.id === 1  ||
            item.id === 5  
            )
            .map(
                    ({id,srcImg,altImg,hrefTitle,titleShot,subcategoriy,
                        titleAll,titleViews,categoriy,excerpt}) =>  
                    (
                    <Post
                    keyKey={id}
                    key={id}
                        srcImg={srcImg}
                        altImg={altImg}
                        hrefTitle={hrefTitle}
                        titleShot={titleShot}
                        titleAll={titleAll}
                        titleViews={titleViews}
                        divClass="post-Recent-ImgS editorChoicCar  row"
                        imgClass="post-Img post-Img--editor"
                        aClass="post-Title-a line-a carouse-a"
                        h4Class="post-coments dispNone"
                        containerImg="post-containerImg scale"
                        contentn="post-contentn"
                        catClass="post-Category h4-cat"
                        catText={categoriy}
                        subcatClass="post-Subcategory h4-cat"
                        subcatText={subcategoriy}
                        h1Class="post-Title"
                        excerptClass="post-excerpt"
                        excerpt={excerpt}
                    />
                    ))
                    
                    }
            
            
            
            
        </Carousel>
        </div>
    )
}
export default CarouselEditor
