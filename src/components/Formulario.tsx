import { FormEvent, useState, useEffect } from 'react'

import { PatientData } from '../App'
import FormFiel from './FormField'

type FormulalrioProps = {
    addPatient: (patitent: PatientData) => void
    loadedPatient: PatientData
    setLoadedPatitent: (updatedPatient: PatientData) => void
}

function Formulario(props: FormulalrioProps) {
    return (
        <div className="md:w-1/2 lg:w-2/5 mb-10">
            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-red-700 font-bold">Administralos</span>
            </p>
            <Form
                addPatient={props.addPatient}
                loadedPatient={props.loadedPatient}
                setLoadedPatitent={props.setLoadedPatitent} />
        </div>
    )
}

export default Formulario

export type ErrorType = {
    value: boolean
    message: string
}

interface ErrorsDictionary {
    [id: string]: ErrorType
}

function Form(prop: FormulalrioProps) {
    const [patientData, setPatient] = useState<PatientData>({})

    const [error, setError] = useState<ErrorsDictionary>({
        'name': { value: false, message: 'El campo nombre esta vacio' },
        'lastName': { value: false, message: 'El campo apellido esta vacio' },
        'email': { value: false, message: 'El campo email esta vacio' },
        'date': { value: false, message: 'El campo fecha esta vacio' }
    })

    const setValueError = (error: ErrorType, value: boolean): ErrorType => {
        return { ...error, value: value }
    }

    useEffect(() => {
        if (Object.keys(prop.loadedPatient).length > 0) {
            setPatient(prop.loadedPatient)
        }

    }, [prop.loadedPatient])

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault()

        let errorT: ErrorsDictionary = { ...error }

        //Validacion del Formulario
        errorT['name'] = setValueError(errorT['name'], !patientData.name || patientData.name == (''))
        errorT['lastName'] = setValueError(errorT['lastName'], !patientData.lastName || patientData.lastName == (''))
        errorT['email'] = setValueError(errorT['email'], !patientData.email || patientData.email == (''))
        errorT['date'] = setValueError(errorT['date'], !patientData.date)

        for (const key in errorT) {
            if (errorT[key].value)
                return setError(errorT)
        }
        //Fin de validacion

        if(!patientData.id)
            prop.addPatient(patientData)
        else
            prop.setLoadedPatitent(patientData)

        setPatient({
            id: '',
            name: '',
            lastName: '',
            date: '',
            email: '',
            comment: ''
        })
        setError(errorT)
    }

    return (
        <>
            <form onSubmit={handleOnSubmit} className="bg-white py-7 px-5">
                <FormFiel id='ff1'
                    value={patientData.name}
                    onChange={(newValue) => setPatient({ ...patientData, name: newValue as (String & undefined) })}
                    error={error['name']}
                    formName='Nombre'
                    formPlaceHolder='Nombre del Paciente' />
                <FormFiel id='ff2'
                    value={patientData.lastName}
                    onChange={(newValue) => setPatient({ ...patientData, lastName: newValue as (String & undefined) })}
                    error={error['lastName']}
                    formName='Apellido'
                    formPlaceHolder='Apellido del Paciente' />
                <FormFiel id='ff3'
                    value={patientData.email}
                    onChange={(newValue) => setPatient({ ...patientData, email: newValue as (String & undefined) })}
                    error={error['email']}
                    formName='Email'
                    inputType="email"
                    formPlaceHolder='email@gmail.com' />
                <FormFiel id='ff4'
                    value={patientData.date}
                    onChange={(newValue) => setPatient({ ...patientData, date: newValue as (Date & undefined) })}
                    error={error['date']}
                    formName='Fecha'
                    inputType="date" />
                <div className="mb-5">
                    <label htmlFor='ff5' className="block font-bold text-gray-400">
                        <span className="text-gray-700 uppercase font-bold">Comentario </span>
                        (Opcional)
                    </label>
                    <textarea
                        id="ff5"
                        value={patientData.comment}
                        onChange={(event) => setPatient({ ...patientData, comment: event.target.value })}
                        className="border-2 w-full placeholder-gray-400 rounded-md CustomScrollBar"
                        placeholder="Describe los sintomas o razon de cita"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-purple-500 w-full p-3 text-white uppercase font-bold hover:bg-purple-600 
                cursor-pointer transition-colors"
                    value={patientData.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>
        </>
    )
}