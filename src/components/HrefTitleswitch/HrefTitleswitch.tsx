type Props = {
cat:string    
    

}
const HrefTitleswitch = ({cat}: Props) => {
    const hrefTitleswitch =() =>{
        let html=""
        switch (cat) {
            case 'Travel':
                html = '/browseCategory'
                break
            case 'Lifestyle':
                html = '/lifestyle'
                break
            case 'Fashion':
                html = '/fashion'
                break
            case 'Entertainment':
                html = '/entertainment'
                break
            case 'Digital':
                html = '/digital'
                break
    
            case 'Mobile':
                html = '/mobile'
                break
            case 'Gadget':
                html = '/gadget'
                break
                case 'Tech News':
                    html = '/techNews'
                break
            default:
                html = '/'
        }
        return html

    }
  return (
    <></>
  )
}
export default HrefTitleswitch