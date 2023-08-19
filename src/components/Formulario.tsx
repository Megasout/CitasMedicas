function Formulario() {
    return (
        <div className="md:w-1/2 lg:w-2/5 mb-10">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-red-700 font-bold">Administralos</span>
            </p>
            {form()}
        </div>
    )
}

export default Formulario

function form() {
    return (
        <form className="bg-white py-7 px-5">
            {formFiel({ id: 'ff1', formName: 'Nombre', formPlaceHolder: 'Nombre del Paciente' })}
            {formFiel({ id: 'ff2', formName: 'Apellido', formPlaceHolder: 'Apellido del Paciente' })}
            {formFiel({ id: 'ff3', formName: 'Email', inputType: "email", formPlaceHolder: 'email@gmail.com' })}
            {formFiel({ id: 'ff4', formName: 'Fecha', inputType: "date" })}
            <div className="mb-5">
                <label htmlFor='ff5' className="block font-bold text-gray-400">
                    <span className="text-gray-700 uppercase font-bold">Comentario </span>
                    (Opcional)
                </label>
                <textarea
                    id="ff5"
                    className="border-2 w-full placeholder-gray-400 rounded-md CustomScrollBar"
                    placeholder="Describe los sintomas o razon de cita"
                />
            </div>
            <input
                type="submit"
                className="bg-purple-500 w-full p-3 text-white uppercase font-bold hover:bg-purple-600 
                cursor-pointer transition-colors"
                value="Enviar Paciente"
            />
        </form>
    )
}

type FormData = {
    id: string,
    formName: string,
    formPlaceHolder?: string
    inputType?: React.HTMLInputTypeAttribute
}

function formFiel(formData: FormData): JSX.Element {
    let inputType: React.HTMLInputTypeAttribute = "text";

    if (formData.inputType)
        inputType = formData.inputType

    return (
        <div className="mb-5">
            <label htmlFor={formData.id}
                className="block text-gray-700 uppercase font-bold">{formData.formName}</label>
            <input
                id={formData.id}
                className="border-2 w-full placeholder-gray-400 rounded-md"
                type={inputType}
                placeholder={formData.formPlaceHolder}></input>
        </div>
    )
}

