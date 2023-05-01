
import Prueba from './components/prueba'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routers/routes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import styled from 'styled-components'
import Loading from './components/Loading'
import Modals from './components/utils/Modals'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Container>
            <MyRoutes/>
            
          </Container>
          <Modals/>
          <Footer/>
          
      </BrowserRouter>
    </>
  )
}

const Container = styled.div`
  padding-top: 78.71px;
`


export default App
