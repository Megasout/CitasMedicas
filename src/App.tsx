import {useState} from 'react'

//import logo from './assets/LogoOnly.png'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


export type PatientData = {
  name?: string
  lastName?: string
  email?: string
  date?: string
  comment?: string
}

function App() {
  const [patients, setPatients] = useState<PatientData[]>([])

  const [loadedPatient, setLoadedPatient] = useState<PatientData>({})

  const handleAddPatients = (newPatient: PatientData) => {
    let patientsT: PatientData[] = []
    patients?.map((patient) =>{ return patientsT.push(patient)})
    patientsT.push(newPatient)
    setPatients(patientsT)
  }

  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='my-12 md:flex'>
        <Formulario addPatient={handleAddPatients} loadedPatient={loadedPatient}/>
        <hr className='h-px my-8 bg-gray-600 border-0 mx-3'/>
        <ListadoPacientes patients={patients} onLoadedPatient={(patient) => setLoadedPatient(patient)}/>
        <div className='py-4 md:py-0'/>
      </div>
    </div>
  )
}

export default App
