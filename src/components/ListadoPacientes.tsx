import Paciente from "./Paciente"

function ListadoPacientes() {
    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:ml-5">
            <h2 className="font-black text-3xl text-center">
                Listado de Pacientes</h2>
            <p className="text-lg md:mt-[56px] lg:mt-5 mb-10 text-center">Administra tus {' '}
                <span className="text-red-700 font-bold">Pacientes y Citas</span>
            </p>
            <div className="md:h-[496px] md:overflow-y-scroll CustomScrollBar">
                <Paciente />
                <Paciente />
                <Paciente />
                <Paciente />
                <Paciente />

            </div>
        </div>
    )
}

export default ListadoPacientes

