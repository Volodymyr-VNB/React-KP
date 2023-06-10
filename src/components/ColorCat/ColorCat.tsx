type Props = {
    catClass: string,
    catText: string,
    lili?:number,
}
const ColorCat = ({ catClass, catText = '',lili=1  }: Props) => {
  let html  = '#top'  
  const divStyle = {
        color: "blue",
        backgroundColor: "inherit",
        }
     
    switch (catText) {
        case 'Travel':
            if (lili===1) {
                divStyle.color = '#00DB92'  
            } else {
                divStyle.color = '#ffffff'
                divStyle.backgroundColor = '#00DB92'   
            }
            html = '#top'
            break
        case 'Lifestyle':
            if (lili===1) {
                divStyle.color = '#ff4b9d'  
            } else {
                divStyle.color = '#ffffff'
                divStyle.backgroundColor = '#ff4b9d'   
            }
            
            html = '#top'
            break
        case 'Fashion':
            if (lili===1) {
                divStyle.color = '#ff004e'  
            } else {
                divStyle.color = '#ffffff'
                divStyle.backgroundColor = '#ff004e'   
            }
            
            html = '#top'
            break
        case 'Entertainment':
            if (lili===1) {
                divStyle.color = '#ffae25'  
            } else {
                divStyle.color = '#ffffff'
                divStyle.backgroundColor = '#ffae25'   
            }
            
           
            html = '#top'
            break
        case 'Digital':
            if (lili===1) {
                divStyle.color = '#1f73ff'  
            } else {
                divStyle.color = '#ffffff'
                divStyle.backgroundColor = '#1f73ff'   
            }
            
            
            html = '#top'
            break

        case 'Mobile':
            if (lili===1) {
                divStyle.color = '#9356ff'  
            } else {
                divStyle.color = '#ffffff'
                divStyle.backgroundColor = '#9356ff'   
            }
            
            html = '#top'
            break
        case 'Gadget':
            if (lili===1) {
                divStyle.color = '#17a0b5'  
            } else {
                divStyle.color = '#ffffff'
                divStyle.backgroundColor = '#17a0b5'   
            }
            
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
