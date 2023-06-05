
import './Fonex.scss'
import logo from 'assets/logo.png'
import logo1 from 'assets/Logo-Light-Fonix.png'

type Props = {
    classNam: string
    h4: string
    butClass: string
    buttonName: string
    color?: string
}
const Fonex = ({
    classNam,
    h4,
    butClass,
    buttonName,
    color = 'whihe',
}: Props) => {
    return (
        <div className={classNam}>
            {color == 'whihe' ? (
                <img
                    src={logo}
                    alt="Fonix"
                    className="logo1"
                    width="200"
                    height="62"
                />
            ) : (
                <img
                    src={logo1}
                    alt="Fonix"
                    className="logo1"
                    width="200"
                    height="62"
                />
            )}

            <h4>{h4}</h4>
            <button type="submit" className={butClass}>
                {buttonName}
            </button>
        </div>
    )
}
export default Fonex
