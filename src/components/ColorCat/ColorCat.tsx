type Props = {
    catClass: string,
    catText: string,
}
const ColorCat = ({ catClass, catText = ''  }: Props) => {
  let html  = '#top'  
  const divStyle = {
        color: 'blue',
        }
     
    switch (catText) {
        case 'Travel':
            divStyle.color = '#00DB92'
            html = '#top'
            break
        case 'Lifestyle':
            divStyle.color = '#ff4b9d'
            html = '#top'
            break
        case 'Fashion':
            divStyle.color = '#ff004e'
            html = '#top'
            break
        case 'Entertainment':
            divStyle.color = '#ffae25'
            html = '#top'
            break
        case 'Digital':
            divStyle.color = '#1f73ff'
            html = '#top'
            break

        case 'Mobile':
            divStyle.color = '#9356ff'
            html = '#top'
            break
        case 'Gadget':
            divStyle.color = '#17a0b5'
            html = '#top'
            break

        default:
            divStyle.color = '#717171'
            html = '#top'
    }

    return (
        <div className={catClass} style={divStyle}>
            <a href={html} style={divStyle} >{catText} </a>
        </div>
    )
}
export default ColorCat
