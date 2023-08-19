function Paciente() {
    return (
        <div className="mb-5 bg-white shadow-md px-5 py-5 rounded-md md:mr-3">
            {labelField({ label: "Nombre", value: "Brianna" })}
            {labelField({ label: "Apellido", value: "Suarez" })}
            {labelField({ label: "Email", value: "megasoutt@gmail.com" })}
            {labelField({ label: "Fecha", value: "28 Agosto de 2023" })}
            {labelField({ label: "Comentario", value: "Duis autienderit. Eiusmod nisi adipisicing id tempor anim ullamco minim pariatur. Dolore tempor laborum quis mollit exercitation velit cupidatat qui nisi et aliquip irure. didunt commi veniam aliqua veniam." })}

        </div>
    )
}

export default Paciente

type LabelData = {
    label: string,
    value: string,
}

function labelField(labelData: LabelData) {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercase">
            {labelData.label}:{' '}
            <span className="font-normal normal-case">{labelData.value}</span>
        </p>
    )
}
