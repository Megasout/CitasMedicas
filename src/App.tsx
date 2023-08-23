import { useState, useEffect } from 'react'

//import logo from './assets/LogoOnly.png'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


export type PatientData = {
  id?: string
  name?: string
  lastName?: string
  email?: string
  date?: string
  comment?: string
}

function App() {
  const patientsLocalStorage: PatientData[] = JSON.parse
  (localStorage.getItem('patients') as string ?? '[]')  
  const [patients, setPatients] = useState<PatientData[]>(patientsLocalStorage)
  const [loadedPatient, setLoadedPatient] = useState<PatientData>({})

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const generaId = (): string => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return fecha + random
  }

  const handleAddPatients = (newPatient: PatientData) => {
    let patientsT: PatientData[] = []
    patients?.map((patient) => { return patientsT.push(patient) })
    patientsT.push({ ...newPatient, id: generaId() })
    setPatients(patientsT)
  }

  const handleEditPatient = (updatedPatient: PatientData) => {
    let patientsT: PatientData[] = []
    patients?.map((patient) => {
      if (patient.id == updatedPatient.id)
        return patientsT.push(updatedPatient)

      return patientsT.push(patient)
    })

    setLoadedPatient({})
    setPatients(patientsT)
  }

  const handleDeletePatient = (id: string) => {
    let patientsT: PatientData[] = []
    patientsT = patients.filter(item => id != item.id)

    setPatients(patientsT)
  }

  return (
    <div className='container mx-auto'>
      <Header />
      <div className='my-12 md:flex'>
        <Formulario
          addPatient={handleAddPatients}
          loadedPatient={loadedPatient}
          setLoadedPatitent={handleEditPatient} />
        <hr className='h-px my-8 bg-gray-600 border-0 mx-3' />
        <ListadoPacientes
          patients={patients}
          onLoadedPatient={(patient) => setLoadedPatient(patient)}
          deletePatient={handleDeletePatient} />
        <div className='py-4 md:py-0' />
      </div>
    </div>
  )
}

export default App
