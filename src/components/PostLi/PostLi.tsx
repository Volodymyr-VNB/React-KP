import { Image } from 'antd'
import ColorCat from 'components/ColorCat/ColorCat'
import { RiFireLine } from 'react-icons/ri'
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr'
import articleArray  from 'utils/articleBlog'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'


type LineNews = {
    srcImg: string
    altImg: string
    hrefTitle: string
    titleShot?: string
    titleAll?: string
    titleViews?: string
    divClass: string
    imgClass: string
    aClass: string
    h6Class?: string
    iconClass?: string
    containerImg: string
    catClass: string
    catText: string
    keyA?: string
    dates?: string
    lili?: number
    keyKey?: number
    categoriy?: string
    avtorImg?: string
    autor?: string
    excerpt?: string
    subcategoriy: string
    arrows?: string
    id?:number
    
}
const PostLi = ({
    srcImg,
    altImg,
    hrefTitle,
    titleShot,
    titleAll,
    titleViews,
    subcategoriy,
    divClass,
    imgClass,
    aClass,
    h6Class,
    iconClass,
    containerImg,
    catClass,
    catText,
    lili = 0,
    avtorImg = '',
    autor,
    dates,
    excerpt,
    arrows,
    id,
    keyKey,
}: LineNews) => {
    const data = useContext(AppContext)
    let count = articleArray.filter(
        (articleArray) => articleArray.categoriy === catText
    ).length
    if (lili === 1) {
        return (
            <li>
                <div className={divClass}>
                    <div className={containerImg}>
                        <img className={imgClass} src={srcImg} alt={altImg} />
                    </div>

                    <ColorCat catClass={catClass} catText={catText} />
                    <h5>
                        <a
                            href={hrefTitle}
                            className={aClass}
                            title={titleShot}
                        >
                            {titleAll}{' '}
                        </a>
                        <h6 className={h6Class}>
                            <span className={iconClass}>
                                <RiFireLine />
                            </span>
                            {titleViews}{' '}
                        </h6>
                    </h5>
                </div>
            </li>
        )
    }
    if (lili === 2) {
        return (
            <div className={divClass}>
                <div className={containerImg}>
                    <Image width={410} height={300} src={srcImg} />
                    {/* <img className={imgClass} src={srcImg} alt={altImg} /> */}
                </div>
                <div className="brow-txt ">
                    <ColorCat
                        catClass={catClass}
                        catText={subcategoriy}
                        lili={2}
                    />

                    <h5>
                        <a
                            href={hrefTitle}
                            className={aClass}
                            title={titleShot}
                        >
                            {titleAll}{' '}
                        </a>
                    </h5>
                    <div className="avtor-blok">
                        <img src={avtorImg} alt="avtor" className="avtor" />
                        <div className={h6Class}>
                            <h6 className="autor-name">{autor}</h6>
                            <h6 className="autor-date">{dates}</h6>
                        </div>
                    </div>
                    <h6 className="excerpt">{excerpt}</h6>
                </div>
            </div>
        )
    }
    if (lili === 3) {
        return (
            <div className={divClass}>
                <div className={containerImg}>
                    <img className={imgClass} src={srcImg} alt={altImg} />
                </div>
                <div className="list"></div>
                <div className={catClass}>
                    <h5>
                        <a
                            href={hrefTitle}
                            className={aClass}
                            title={titleShot}
                        >
                            {titleAll}
                        </a>
                    </h5>
                    <h6 className={h6Class}>{dates}</h6>
                </div>
            </div>
        )
    }
    if (lili === 4) {
        return (
            <div className={divClass}>
                <div className={containerImg}>
                    <img className={imgClass} src={srcImg} alt={altImg} />
                </div>

                <ColorCat catClass={catClass} catText={catText} />
                <h5>
                    <NavLink to={hrefTitle} className={aClass}>
                        {catText}
                    </NavLink>
                    <h6 className={h6Class}>{count} Posts</h6>
                </h5>
            </div>
        )
    }
    if (lili === 5) {
        return (
            <div className={divClass}>
                <div className={containerImg}>
                    <img className={imgClass} src={srcImg} alt={altImg} />
                </div>
                <div className="row-col previous-next">
                    <p>
                        {arrows === 'Previous' ? (
                            <>
                                <GrFormPreviousLink />
                                &#160;Previous
                            </>
                        ) : (
                            <>
                                Next&#160;
                                <GrFormNextLink />
                            </>
                        )}
                    </p>
                    <h5>
                        <a
                            href={hrefTitle}
                            className={aClass}
                            title={titleShot}
                        >
                            {titleAll}
                        </a>
                    </h5>
                </div>
            </div>
        )
    }
    if (lili === 6) {
       
        let linkTo= keyKey
        console.log("linkTo=",linkTo)
        console.log("(key)",keyKey)
        // data?.keyIdpr=keyKey
        // data?.changKeyId(Number(keyKey))
        return (
            <>
                <div className={containerImg}>
                    {/* <a href={hrefTitle}>
                        <img
                            width="150"
                            height="150"
                            src={srcImg}
                            className={imgClass}
                            alt={altImg}
                            title={titleShot}
                            sizes="(max-width: 150px) 100vw, 150px"
                        />
                    </a> */}
                    {/* <Link to={String(linkTo)}> */}
                    <Link to="/articlePost" >
                    <img
                            width="150"
                            height="150"
                            
                            onClick={() => data?.changKeyId(Number(keyKey))}
                            src={srcImg}
                            className={imgClass}
                            alt={altImg}
                            title={titleShot}
                            sizes="(max-width: 150px) 100vw, 150px"
                        />
      </Link>
                </div>
                <div className="contentNext">
                    <span className="date">{dates}</span>
                    <h3 className="content-title">
                        <Link to="/articlePost"
                        className={aClass} 
                        // href={hrefTitle}
                        onClick={() => data?.changKeyId(Number(keyKey))}
                        >
                            {titleAll}
                        </Link>
                        
                    </h3>
                </div>
            </>
        )
    } else {
        return (
            <div className={divClass}>
                <div className={containerImg}>
                    <img className={imgClass} src={srcImg} alt={altImg} />
                </div>

                <ColorCat catClass={catClass} catText={catText} />
                <h5>
                    <a href={hrefTitle} className={aClass} title={titleShot}>
                        {titleAll}{' '}
                    </a>

                    <h6 className={h6Class}>
                        <span className={iconClass}>
                            <RiFireLine />
                        </span>
                        {titleViews}{' '}
                    </h6>
                </h5>
            </div>
        )
    }
}
export default PostLi
