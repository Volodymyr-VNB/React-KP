import ColorCat from 'components/ColorCat/ColorCat'
import { RiFireLine } from 'react-icons/ri'

type LineNews = {
    srcImg: string
    altImg: string
    hrefTitle: string
    titleShot: string
    titleAll: string
    titleViews: string
    divClass: string
    imgClass: string
    aClass: string
    h6Class: string
    iconClass: string
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
}: LineNews) => {
    // console.log(subcategoriy)
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
                    <img className={imgClass} src={srcImg} alt={altImg} />
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
