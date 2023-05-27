type PropsAni = {
    hrefAni: string,
    srcAni: string,
    TxtAni: string
}
const Animation = ({hrefAni,srcAni,TxtAni}: PropsAni) => {
  return (
    <a href={hrefAni}>
        <img className="heder-slide-img" src={srcAni}  alt="New"/>
        <span className="heder-span">{TxtAni} </span>
    </a>
  )
}
export default Animation