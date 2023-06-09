import { MessageTwoTone } from '@ant-design/icons'
import {  Image } from 'antd'
import ColorCat from 'components/ColorCat/ColorCat'
import { RiFireLine } from 'react-icons/ri'
import ArticleHot from './ArticleHot'
import LikedsBox from 'components/LikedsBox/LikedsBox'
type T = {
    name: string
    text: string
    email: string
}

type Props = {
    srcImg: string
    altImg: string
    hrefTitle: string
    titleAll: string
    titleViews: string
    categoriy: string
    subcategoriy: string
    dates?: string
    keyKey?: number
    lastRead?: string
    avtorImg?: string
    autor?: string
    views: number
    coments?: Array<T>
   
   
  
}
const ArticleItem = ({
    srcImg,
    altImg,
    keyKey,
    avtorImg,
    autor,
    titleAll,

    categoriy,
    subcategoriy,
    dates,
    lastRead,
    views,
    coments,
    
}: Props) => {
    let comentsNum =coments?.length
    
    
    return (
        <div className="articleItem">
            <div className="articleImg-cont">
                <Image
                    // width={1280}

                    className="articleImg"
                    src={srcImg}
                    alt={altImg}
                    rootClassName="articleImg"
                />
            </div>
            <div className="artecTitle row">
                <ColorCat
                    catClass="artecTitleClass h6"
                    catText={categoriy}
                    lili={2}
                />
                <ColorCat
                    catClass="artecTitleClass h6"
                    catText={subcategoriy}
                    lili={2}
                />
            </div>
            <h1>{titleAll}</h1>
            <div className="line-arti"></div>
            <div className="avtor-blok-a row">
                <img src={avtorImg} alt="avtor" className="avtor" />
                <div className="avtor-avtor row-col">
                    <h6 className="autor-name">{autor}</h6>
                    <div className="row">
                        <h6 className="autor-date">
                            {dates} / {lastRead}
                        </h6>
                        <div className="press row">
                            <span>
                                <RiFireLine className="riFireLine" />
                                {views}
                            </span>
                            <span>
                                <MessageTwoTone
                                    twoToneColor="#32e7ff"
                                    className="messageTwoTone"
                                />
                                {" "+comentsNum}
                            </span>
                            <span className="likes">
                                
                                <LikedsBox keyKey={keyKey!}/>
                                
                                
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <ArticleHot />
        </div>
    )
}
export default ArticleItem
