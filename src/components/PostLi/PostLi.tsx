import {  Image } from 'antd'
import ColorCat from 'components/ColorCat/ColorCat'
import { RiFireLine } from 'react-icons/ri'
import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr'
import articleArray  from 'utils/articleBlog'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
import LinkArticle from 'components/LinkArticle/LinkArticle'

import LikedsBox from 'components/LikedsBox/LikedsBox'


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
    // const artId = keyKey|| 0
    //     const isLiked = useAppSelector((state) => state.articleLikeState[artId])
    //     const dispatch = useAppDispatch()

    let count = articleArray.filter(
        (articleArray) => articleArray.categoriy === catText
    ).length
    if (lili === 1) {
        return (
            <li key={id}>
                <div className={divClass}>
                    <div className={containerImg}>
                        <img className={imgClass} src={srcImg} alt={altImg} />
                    </div>

                    <ColorCat catClass={catClass} catText={catText} />
                    <h5>
                        
                        <LinkArticle key={id}
                        keyKey={Number(keyKey)}
                        aClass={aClass} 
                        titleAll={String(titleAll) }
                        titleShot={titleShot}
                        />
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
                </div>
                <div className="brow-txt ">
                    <ColorCat
                        catClass={catClass}
                        catText={subcategoriy}
                        lili={2}
                    />

                    <h5>
                        
                        <LinkArticle
                        keyKey={Number(keyKey)}
                        aClass={aClass} 
                        titleAll={String(titleAll) }
                        titleShot={titleShot}
                        />
                    </h5>
                    <div className="avtor-blok">
                        <img src={avtorImg} alt="avtor" className="avtor" />
                        <div className={h6Class}>
                            <h6 className="autor-name">{autor}</h6>
                            <h6 className="autor-date">{dates}</h6>
                        </div>
                    </div>
                    <h6 className="excerpt">{excerpt}</h6>
                    <LikedsBox keyKey={keyKey!}/>
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
                        
                        <LinkArticle
                        keyKey={Number(keyKey)}
                        aClass={aClass} 
                        titleAll={String(titleAll) }
                        titleShot={titleShot}
                        />
                    </h5>
                    <h6 className={h6Class}>{dates}
                    <LikedsBox keyKey={keyKey!}/>
                    </h6>
                </div>
            </div>
        )
    }
    if (lili === 4) {
        //це категорія
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
                                <LikedsBox keyKey={keyKey!}/>
                            </>
                        ) : (
                            <>
                            <LikedsBox keyKey={keyKey!}/>
                                Next&#160;
                                <GrFormNextLink />
                            </>
                        )}
                    </p>
                    <h5>
                        
                        <LinkArticle
                        keyKey={Number(keyKey)}
                        aClass={aClass} 
                        titleAll={String(titleAll) }
                        titleShot={titleShot}
                        />
                    </h5>
                </div>
            </div>
        )
    }
    if (lili === 6) {
     
        return (
            <>
                <div className={containerImg}>
                    
                   
                    <Link to={`/articlePost/${keyKey}`} >
                    <img
                            width="150"
                            height="150"
                            
                            onClick={() => data?.changKeyId(Number(keyKey))}
                            // require('./images/mops.jpeg').default
                            src={srcImg}
                            className={imgClass}
                            alt={altImg}
                            title={titleShot}
                            sizes="(max-width: 150px) 100vw, 150px"
                        />
      </Link>
                </div>
                <div className="contentNext">
                    <span className="date">{dates}
                    <LikedsBox keyKey={keyKey!}/>
                    </span>
                    <h3 className="content-title">
                        
                        <LinkArticle
                        keyKey={Number(keyKey)}
                        aClass={aClass} 
                        titleAll={String(titleAll) }
                        titleShot={titleShot}
                        />
                        
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
                    
                    <LinkArticle
                        keyKey={Number(keyKey)}
                        aClass={aClass} 
                        titleAll={String(titleAll) }
                        titleShot={titleShot}
                        />

                    <h6 className={h6Class}>
                        <span className={iconClass}>
                            <RiFireLine />
                        </span>
                        {titleViews}
                         <LikedsBox keyKey={keyKey!}/>
                    </h6>
                </h5>
            </div>
        )
    }
}
export default PostLi
