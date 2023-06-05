type Props = {
    titleShot:string,
    dates:string,
    keykey?:number,
    img?: string,
    srcImg?:string,
    categoriy?:string

}
const ColFoot = ({titleShot,dates,img="no",srcImg,categoriy
}: Props) => {
  if (img==="no") {
    return (
      <>
      <h5>{titleShot}</h5>
      <h4>{dates}</h4>
      </>)
  } else {
    return (
      <div className="col-img0">
      <img src={srcImg} className='col-img' alt={titleShot} />           
      <h5>{categoriy}</h5>
      </div>)
  }
  
}
export default ColFoot