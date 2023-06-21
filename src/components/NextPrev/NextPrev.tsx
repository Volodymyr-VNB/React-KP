import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import './NextPrev.scss'

import NextPrevItem from './NextPrevItem'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'

type Props = {}
const NextPrev = (props: Props) => {
    
    
    const data = useContext(AppContext)
    return (
        <div className="fixed-next-prev-posts show">
            <div className="fixed-post next-post">
                <div className="post-label ">
                    <span className="text">Next</span>
                    <span className="icon">
                        <AiOutlineArrowDown />
                    </span>
                </div>
                
                <NextPrevItem
                    keyIdItem={
                        Number(data?.keyIdpr) + 1 > Number(data?.countAll)
                            ? 1
                            : Number(data?.keyIdpr) + 1
                    }
                />
            </div>
            <div className="fixed-post prev-post">
                <div className="post-label">
                    <span className="icon">
                        <AiOutlineArrowUp />
                    </span>
                    <span className="text">Previews</span>
                </div>
                
                <NextPrevItem
                    keyIdItem={
                        Number(data?.keyIdpr) - 1 === 0
                            ? Number(data?.countAll)
                            : Number(data?.keyIdpr) - 1
                    }
                />
            </div>
        </div>
    )
}
export default NextPrev
