import { PatientData } from "../App"
import Paciente from "./Paciente"

type ListadoPacientesProps = {
    patients: PatientData[]
    onLoadedPatient: (patient: PatientData) => void
    deletePatient: (id: string) => void
}

function ListadoPacientes(props: ListadoPacientesProps) {

    const items = props.patients.map((patient) => (
        <Paciente
            key={patient.id}
            patients={patient}
            onLoadedPatient={props.onLoadedPatient}
            deletePatient={props.deletePatient} />
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

