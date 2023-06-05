import ColorCat from 'components/ColorCat/ColorCat';
import { RiFireLine} from 'react-icons/ri';

type LineNews = {
srcImg    : string,
altImg    : string,
hrefTitle : string,
titleShot : string,
titleAll  : string,
titleViews: string,
divClass  : string,
imgClass  : string,
aClass    : string,
h6Class   : string,
iconClass : string,
containerImg : string,
catClass  :string,
catText  :string,
keyA? :string,
dates? :string,
lili?:number,
keyKey?: number

}
const PostLi = 
( {srcImg, altImg,hrefTitle,titleShot,
    titleAll,  titleViews,
    divClass,imgClass,aClass,h6Class,iconClass,
    containerImg,catClass,catText,lili=0
  }: LineNews) => {
    if (lili==1 ) {
      return (
        <li>
        <div className={divClass}>
          <div className= {containerImg} >
          <img  className={imgClass} src={srcImg} alt={altImg} />
          </div>
          
          <ColorCat 
          catClass  = {catClass} 
          catText  ={catText}
          />
          <h5 >
            <a href={hrefTitle} className= {aClass}
              title={titleShot}>
              {titleAll} </a>
              <h6 className={h6Class}>
                <span className={iconClass}><RiFireLine/></span>
                {titleViews} </h6>  
        </h5>
        </div>
        </li>
)
    } else {
      return (
        <div className={divClass}>
          <div className= {containerImg} >
          <img  className={imgClass} src={srcImg} alt={altImg} />
          </div>
          
          <ColorCat 
          catClass  = {catClass} 
          catText  ={catText}
          />
          <h5 >
            <a href={hrefTitle} className= {aClass}
              title={titleShot}>
              {titleAll} </a>
              <h6 className={h6Class}>
                <span className={iconClass}><RiFireLine/></span>
                {titleViews} </h6>  
        </h5>
        </div>
    )
    }
  
  
  
}
export default PostLi