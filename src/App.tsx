//import logo from './assets/LogoOnly.png'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


function App() {
  return (
    <div className='container mx-auto'>
      <Header />
      <div className='my-12 md:flex'>
        <Formulario />
        <hr className='h-px my-8 bg-gray-600 border-0 mx-3'/>
        <ListadoPacientes />
        <div className='py-4 md:py-0'/>
      </div>
    </div>
  )
}

export default App
