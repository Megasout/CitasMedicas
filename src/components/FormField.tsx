import { ErrorType } from "./Formulario";

type FormData = {
    id: string
    formName: string
    value: unknown
    formPlaceHolder?: string
    inputType?: React.HTMLInputTypeAttribute,
    error: ErrorType,
    onChange: (newValue: String | Date) => void
}

function FormFiel(formData: FormData): JSX.Element {
    let inputType: React.HTMLInputTypeAttribute = "text";

    if (formData.inputType)
        inputType = formData.inputType

    let value = formData.value ? formData.value : ''

    let showError = formData.error.value && (!formData.value || formData.value == '')

    const inputCss: string = formData.error.value && (!formData.value || formData.value == '') ?
        "border-2 w-full placeholder-gray-400 rounded-md border-red-600" :
        "border-2 w-full placeholder-gray-400 rounded-md"

    return (
        <div className="mb-5">
            <label htmlFor={formData.id}
                className="block text-gray-700 uppercase font-bold">{formData.formName}</label>
            <input
                id={formData.id}
                className={inputCss}
                type={inputType}
                placeholder={formData.formPlaceHolder}
                value={value as (string | number | readonly string[] | undefined)}
                onChange={(event) => formData.onChange(event.target.value)}></input>
            {showError &&
                (<ErrorMessage>{formData.error.message}</ErrorMessage>)}
        </div>
    )
}

export default FormFiel

// TODO: Anotar este tipo de children en mis apuntes
interface ErrorMessageProps {
    children: React.ReactNode
}

function ErrorMessage(prop: ErrorMessageProps) {
    return (
        <p className='text-red-600'>{prop.children}</p>)
}