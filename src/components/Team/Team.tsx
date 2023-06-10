
import { Image } from "antd"
import "./Team.scss"
import {FaYoutubeSquare} from 'react-icons/fa'

type Props = {
  className :string,
  src:string,

  names:string
}
const Team = ({className,src,names}: Props) => {
  return (
    <div className={className}>
      <Image
    width={300}
    src={src}
  />
    {/* <img src={src} alt={names} /> */}
    <h3>{names}</h3>
    <div className="social-stay row">
                    <div className="social2 facebook1"></div>
                    <div className="social2 whatsapp1"></div>
                    <div className="Youtube1"><FaYoutubeSquare/></div>
                    
                </div>
    </div>
    
  )
}
export default Team