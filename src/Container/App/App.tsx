import Footer from 'Container/Footer/Footer'
import Header from 'Container/Header/Header'
import Main from 'Container/Main/Main'
import About from 'Pages/About'


type Props = {}
const App = (props: Props) => {
  return (
    <>
            <Header/>
            <Main/>
            <About/>
            <Footer/>
            
           
        </>
  )
}
export default App