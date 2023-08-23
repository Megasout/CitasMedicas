import { PatientData } from "../App"
import Paciente from "./Paciente"

type ListadoPacientesProps = {
    patients: PatientData[]
    onLoadedPatient: (patient: PatientData) => void
}

function ListadoPacientes(props: ListadoPacientesProps) {

    // TODO: agregar a apuntes que los elementos lista de auto contruccion como este nesecitan una key
    // y que puedo obtener desde el map el indice en el que me encuentro

    //Esto funciona pero es una mala practica que afecta el performance
    // const items = props.patients.map((patient, index) => (
    //     <Paciente key={index} patients={patient}/>
    // ))

    //Aun asi esto puede repetirse si dos usuarios ingresan datos a la vez 
    //aunque la probabilidad es minima pero como no tenemos BD
    //para probar si existe o no por ahora esto deberia de funcionar
    const generaId = (): string => {
        //Esto generara un numero aleatorio quitando los 2 primeros caracteres
        const random = Math.random().toString(36).substring(2)
        //Esto obtiene la fecha de hoy en milisegundos
        const fecha = Date.now().toString(36)

        return fecha + random
    }

    const items = props.patients.map((patient) => (
        <Paciente key={generaId()} patients={patient} onLoadedPatient={props.onLoadedPatient} />
    ))

    const title = (props.patients.length > 0) ? 'Listado de Pacientes' : 'No hay pacientes'

    return (
        <div className="md:w-1/2 lg:w-3/5 md:ml-5">
            <h2 className="font-black text-3xl text-center">
                {title}</h2>

            {props.patients.length > 0 &&
                (<>
                    <p className="text-lg md:mt-[56px] lg:mt-5 mb-10 text-center">Administra tus {' '}
                        <span className="text-red-700 font-bold">Pacientes y Citas</span>
                    </p>
                    <div className="md:h-[496px] md:overflow-y-auto CustomScrollBar">
                        {items}
                    </div>
                </>)}
        </div>
    )
}

export default ListadoPacientes

