type PropsAni = {
    srcAni: string
    TxtAni: string
}
const Animation = ({ srcAni, TxtAni }: PropsAni) => {
    return (
        <p>
            <img className="heder-slide-img" src={srcAni} alt="New" />
            <span className="heder-span">{TxtAni} </span>
        </p>
    )
}
export default Animation
