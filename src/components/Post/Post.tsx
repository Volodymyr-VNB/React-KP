import './Post.scss'
import { FaRegComment } from 'react-icons/fa'
import ColorCat from 'components/ColorCat/ColorCat'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
import LinkArticle from 'components/LinkArticle/LinkArticle'

type PostNew = {
    srcImg: string
    altImg: string
    hrefTitle: string
    titleShot: string
    titleAll: string
    titleViews: string
    divClass: string
    imgClass: string
    aClass: string
    h4Class: string
    containerImg: string
    contentn: string
    catClass: string
    catText: string
    subcatClass: string
    subcatText: string
    h1Class: string
    excerptClass: string
    excerpt: string
    keyKey?: number,
    id?:number
}

const Post = ({
    divClass,
    imgClass,
    srcImg,
    altImg,
    containerImg,
    contentn,
    catClass,
    catText,
    subcatClass,
    subcatText,
    hrefTitle,
    h1Class,
    aClass,
    titleAll,
    titleShot,
    excerptClass,
    excerpt,
    h4Class,
    titleViews,
    id,
    keyKey
}: PostNew) => {
    return (
        <div className={divClass}>
            <div className={containerImg}>
            <img className={imgClass} src={srcImg} alt={altImg} />
            </div>
            <div className={contentn}>
                <div className="row ">
                    <ColorCat catClass={catClass} catText={catText} />
                    <ColorCat catClass={subcatClass} catText={subcatText} />
                </div>
                <h1 className={h1Class}>
                    {/* <a href={hrefTitle} className={aClass} title={titleShot}>
                        {titleAll}
                    </a> */}
                    <LinkArticle
                        keyKey={Number(keyKey)} 
                        aClass={aClass} 
                        titleAll={String(titleAll) }
                        titleShot={titleShot}
                        />
                </h1>
                <h4 className={excerptClass}>{excerpt}</h4>
                <h4 className={h4Class}>
                    <FaRegComment /> No coments. {titleViews}
                </h4>
            </div>
        </div>
    )
}
export default Post
