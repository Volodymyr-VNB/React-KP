import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Post from 'components/Post/Post'
import './CarouselEditor.scss'

type Props = {}
const CarouselEditor = (props: Props) => {
    return (
        <div className="editorChoiceCarousel">
        <Carousel
            // className="ant-carousel1"
            autoplay={true}
           
            slidesToShow={2}
            
            dots={true}
            arrows={true}
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
            adaptiveHeight ={true}
           
             centerMode = {true}
             centerPadding='50px'
        >
            <div>
            <Post
                srcImg="images/pretty-blonde-girl-1300x650.jpg"
                altImg="Pretty Blonde Girl"
                hrefTitle="https://demo.rivaxstudio.com/fonix/main/top-5-new-tech-gadgets-you-must-have-in-2023/"
                titleShot="Top 5 New Tech Gadgets You Must Have In 2023"
                titleAll="Top 5 New Tech Gadgets You Must Have In 2023"
                titleViews="116 Views"
                divClass="post-Recent-ImgS row post-Recent-ImgS-car"
                imgClass="post-Img post-Recent-ImgS-car"
                aClass="post-Title-a line-a"
                h4Class="post-coments dispNone"
                containerImg="post-containerImg post-containerImg-car scale"
                contentn="post-contentn"
                catClass="post-Category h4-cat"
                catText="Gadget"
                subcatClass="post-Subcategory h4-cat"
                subcatText="Tech News"
                h1Class="post-Title"
                excerptClass="post-excerpt"
                excerpt="Far far away, behind the word mountains, far
                        from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live
                        in&#8230;"
            /></div>
            <div>
            <Post
                srcImg="images/pretty-blonde-girl-1300x650.jpg"
                altImg="Pretty Blonde Girl"
                hrefTitle="https://demo.rivaxstudio.com/fonix/main/top-5-new-tech-gadgets-you-must-have-in-2023/"
                titleShot="Top 5 New Tech Gadgets You Must Have In 2023"
                titleAll="Top 5 New Tech Gadgets You Must Have In 2023"
                titleViews="116 Views"
                divClass="post-Recent-ImgS row post-Recent-ImgS-car"
                imgClass="post-Img post-Recent-ImgS-car"
                aClass="post-Title-a line-a"
                h4Class="post-coments dispNone"
                containerImg="post-containerImg post-containerImg-car scale"
                contentn="post-contentn"
                catClass="post-Category h4-cat"
                catText="Gadget"
                subcatClass="post-Subcategory h4-cat"
                subcatText="Tech News"
                h1Class="post-Title"
                excerptClass="post-excerpt"
                excerpt="Far far away, behind the word mountains, far
                        from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live
                        in&#8230;"
            /></div>
            <div>
            <Post
                srcImg="images/pretty-blonde-girl-1300x650.jpg"
                altImg="Pretty Blonde Girl"
                hrefTitle="https://demo.rivaxstudio.com/fonix/main/top-5-new-tech-gadgets-you-must-have-in-2023/"
                titleShot="Top 5 New Tech Gadgets You Must Have In 2023"
                titleAll="Top 5 New Tech Gadgets You Must Have In 2023"
                titleViews="116 Views"
                divClass="post-Recent-ImgS row post-Recent-ImgS-car"
                imgClass="post-Img post-Recent-ImgS-car"
                aClass="post-Title-a line-a"
                h4Class="post-coments dispNone"
                containerImg="post-containerImg post-containerImg-car scale"
                contentn="post-contentn"
                catClass="post-Category h4-cat"
                catText="Gadget"
                subcatClass="post-Subcategory h4-cat"
                subcatText="Tech News"
                h1Class="post-Title"
                excerptClass="post-excerpt"
                excerpt="Far far away, behind the word mountains, far
                        from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live
                        in&#8230;"
            /></div>
            <div>
            <Post
                srcImg="images/pretty-blonde-girl-1300x650.jpg"
                altImg="Pretty Blonde Girl"
                hrefTitle="https://demo.rivaxstudio.com/fonix/main/top-5-new-tech-gadgets-you-must-have-in-2023/"
                titleShot="Top 5 New Tech Gadgets You Must Have In 2023"
                titleAll="Top 5 New Tech Gadgets You Must Have In 2023"
                titleViews="116 Views"
                divClass="post-Recent-ImgS row post-Recent-ImgS-car"
                imgClass="post-Img post-Recent-ImgS-car"
                aClass="post-Title-a line-a"
                h4Class="post-coments dispNone"
                containerImg="post-containerImg post-containerImg-car scale"
                contentn="post-contentn"
                catClass="post-Category h4-cat"
                catText="Gadget"
                subcatClass="post-Subcategory h4-cat"
                subcatText="Tech News"
                h1Class="post-Title"
                excerptClass="post-excerpt"
                excerpt="Far far away, behind the word mountains, far
                        from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live
                        in&#8230;"
            /></div>
            
        </Carousel>
        </div>
    )
}
export default CarouselEditor
