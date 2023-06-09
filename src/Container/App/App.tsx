import Footer from 'Container/Footer/Footer'
import Header from 'Container/Header/Header'
import Main from 'Container/Main/Main'
import About from 'Pages/About'
import BrowseCategory from 'components/BrowseCategory/BrowseCategory'
import FooterPage from 'components/FooterPage/FooterPage'


type Props = {}
const App = (props: Props) => {
  return (
    <>
            <Header/>
            <Main/>
            <About/>
            <FooterPage/>
            <BrowseCategory/>


            <Footer/>
            
            
           
        </>
  )
}
export default App