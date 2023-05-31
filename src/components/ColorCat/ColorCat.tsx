type Props = {
    catClass:   string
    catText:   string
   }
const ColorCat = ({catClass, catText =""}: Props) => {
    const divStyle = {
        color: 'blue',
      };
    switch (catText) {
        case 'Travel':
            divStyle.color = '#00DB92'; 
         
          break;
        case "Lifestyle":
            divStyle.color = '#ff4b9d'; 
          break;
        case "Fashion":
            divStyle.color = '#ff004e'; 
          break;
        case "Entertainment":
            divStyle.color = '#ffae25'; 
          break;
        case "Digital":
            divStyle.color = '#1f73ff'; 
          break;
       
        case "Mobile":
            divStyle.color = '#9356ff';
          break;
        case "Gadget":
            divStyle.color = '#17a0b5';
          break;
       
        default:
            divStyle.color = '#717171';
      }
      
    return (
    <div  className={catClass} style={divStyle} >
                 {catText}
                </div>
  )
}
export default ColorCat