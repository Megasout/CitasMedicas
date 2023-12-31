import { PatientData } from "../App"

type PacienteProps = {
    patients: PatientData
    onLoadedPatient: (patient: PatientData) => void
    deletePatient: (id: string) => void
}

function Paciente(props: PacienteProps) {
    const { name, lastName, email, date, comment } = props.patients

    const handleEdit = () => props.onLoadedPatient(props.patients)
    const handleDelete = () => {
        const respuesta = confirm('Deseas eliminar este paciente?')

        if (respuesta)
            props.deletePatient(props.patients.id as string)
    }


    return (
        <div className="mb-5 bg-white shadow-md px-5 py-5 rounded-md md:mr-3">
            <LabelField label="Nombre" value={name as string} />
            <LabelField label="Apellido" value={lastName as string} />
            <LabelField label="Email" value={email as string} />
            <LabelField label="Fecha" value={date as string} />
            {comment &&
                (<LabelField label="Comentario" value={comment as string} />)}

            <div className="flex justify-end">
                <button className="bg-purple-500 hover:bg-purple-600 transition-colors text-white py-1 w-[100px] mr-3"
                    onClick={handleEdit}>
                    Editar</button>
                <button className="bg-red-600 hover:bg-red-700 transition-colors text-white py-1 w-[100px]"
                    onClick={handleDelete}>
                    Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente

type LabelData = {
    label: string,
    value: string,
}

function LabelField(labelData: LabelData) {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercase">
            {labelData.label}:{' '}
            <span className="font-normal normal-case">{labelData.value}</span>
        </p>
    )
}
