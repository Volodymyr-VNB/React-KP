import Animation from 'components/Animation/Animation'

import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
import { Link } from "react-router-dom";
type Props = {}
const CurrentTerm = (props: Props) => {
    const data = useContext(AppContext)
  return (
    <span>
                        <Link to="/articlePost/11" onClick={() => data?.changKeyId(11)} >
                          <Animation
                            
                            
                            srcAni  = "images/game-changing-1000x600.jpg"
                            TxtAni  = "Game Changing Virtual Reality Console"
                            />
                             </Link>
                             <Link to="/articlePost/12" onClick={() => data?.changKeyId(12)} >
                          <Animation
                            
                            srcAni  = "images/how-to-make1000x600.jpg"
                            TxtAni  = "How to Make a Competitor`s Success Work for You"
                            /></Link>
                             <Link to="/articlePost/23" onClick={() => data?.changKeyId(23)} >
                          <Animation
                            
                            srcAni  = "images/texnologi-1000x600.jpg"
                            TxtAni  = "Technology Allows Profit To Serve The Community"
                            /></Link>
                        </span>
  )
}
export default CurrentTerm