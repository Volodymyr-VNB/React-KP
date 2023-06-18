import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from 'Container/App/App'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'

type LinkAr = {
    to?: string
    keyKey: number
    aClass?: string
    titleAll: string
    titleShot?: string
}
const LinkArticle = ({
    to = '/articlePost',
    keyKey,
    aClass,
    titleAll,
    titleShot,
}: LinkAr) => {
    const data = useContext(AppContext)
    // let keyKey=data?.keyIdpr
    console.log('(keyKey=)', keyKey)
    return (
        <>
            <ScrollToTop />
            <Link
                to={to}
                onClick={() => data?.changKeyId(Number(keyKey))}
                className={aClass}
                title={titleShot}
            >
                {titleAll}
            </Link>
        </>
    )
}
export default LinkArticle
