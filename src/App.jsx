
import Prueba from './components/prueba'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routers/routes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import styled from 'styled-components'
import Loading from './components/Loading'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <NavBar/>
          <Container>
            <MyRoutes/>
            
          </Container>
  
          <Footer/>
          
      </BrowserRouter>
    </>
  )
}

const Container = styled.div`
  padding-top: 78.71px;
`


export default App
