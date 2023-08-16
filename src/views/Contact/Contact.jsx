import { useRef, useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";

const initialState = {
    user_name: '',
    user_email: '',
    message: ''
  }

export default function Contact () {
    const images = ['bg-emperador', 'bg-kolozoGastrobar', 'bg-beerKolozo'];
    const title = 'CONTACTO'
    const form = useRef()
    const [input, setInput] = useState(initialState)
    const [err, setErr] = useState(initialState)
  
    const validateEmail = (email) => {
      const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      return regex.test(email)
    }
  
    const validateName = (name) => {
      const nombreExpReg = /^[a-zA-Z\s]*$/;
      return nombreExpReg.test(name)
    }
  
    const validate = (input) => {
      const err = {}
  
      if (!input.user_name) {
        err.user_name = 'Debe ingresar un nombre'
      }
      if (!validateName(input.user_name)) {
          err.user_name = 'Debe ingresar un nombre valido'
      }
      if (!input.message) {
        err.message = 'Debe ingresar un mensaje'
      }
      if (!input.user_email) {
        err.user_email = 'Debe ingresar un correo'
      }
      if (!validateEmail(input.user_email)) {
        err.user_email = 'Debe ingresar un correo valido'
      }
      return err
    }
  
    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setInput((prev) => ({
        ...prev,
        [name]: value
      }))
  
      setErr(
        validate({
          ...input,
          [name]: value
        })
      )
    }
  
    const handleSubmit = (event) => {
        event.preventDefault()
        setInput({
        user_name: '',
        user_email: '',
        message: ''
        })
    }

    return (
    <div className="bg-teal-800">
        <Carrousel images={images} title={title}/>
        <div className="w-full mx-auto px-4 md:px-24">
        <div className="py-8">
              <p className="pt-2 md:pt-0 md:py-0 font-sans text-gray-200 md:text-2xl text-center">
                Nuestro equipo está aquí para brindarte asistencia en cualquier consulta o solicitud que puedas tener. Si deseas ponerte en contacto con nosotros, por favor utiliza el formulario que encontrarás a continuación. También puedes conectarte con nosotros a través de nuestras redes sociales. ¡Esperamos ansiosamente tus preguntas y comentarios!

                Estamos comprometidos en responder a la brevedad posible y en brindarte la atención que mereces. Tu opinión es esencial para nosotros y esperamos poder ayudarte en todo lo que necesites. ¡No dudes en contactarnos!
              </p>
            </div>
        <form
            className="flex flex-col mx-auto text-center"
            ref={form}
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="flex flex-col md:flex-row md:justify-around md:py-4">
                <div className="flex flex-col w-full md:w-auto md:mb-0 mb-4">
                    <input
                        placeholder="Nombre*"
                        type="text"
                        name="user_name"
                        value={input.user_name}
                        id="name"
                        className="h-12 md:w-80 px-3 font-sans bg-transparent border border-solid rounded-lg text-gray-200 md:text-2xl"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <span
                        hidden={!err.user_name}
                        className="before:content-['*'] before:mr-.75 before:text-red-800 text-red-800 italic text-lg"
                    >
                        {err.user_name}
                    </span>
                </div>
                <div className="flex flex-col w-full md:w-auto">
                    <input
                        placeholder="Email*"
                        type="text"
                        name="user_email"
                        value={input.user_email}
                        id="email"
                        className="h-12 md:w-80 px-3 font-sans bg-transparent border border-solid outline-none rounded-lg text-gray-200 md:text-2xl"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <span
                        hidden={!err.user_email}
                        className="before:content-['*'] before:mr-.75 before:text-red-800 text-red-800 italic text-lg"
                    >
                        {err.user_email}
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-auto md:w-auto py-8">
                <textarea
                  placeholder="Mensaje*"
                  name="message"
                  value={input.message}
                  cols="30"
                  rows="8"
                  className="bg-transparent px-3 py-2 font-sans bg-transparent border border-solid outline-none rounded-lg text-gray-200 md:text-2xl"
                  autoComplete="off"
                  onChange={handleChange}
                ></textarea>
                  <span
                    hidden={!err.message}
                    className="before:content-['*'] before:mr-.75 before:text-red-800 text-red-800 italic text-lg"
                  >
                    {err.message}
                  </span>
              </div>
            <div className="py-8">
                <ButtonSubmit
                  status={Object.values(err).length !== 0}
                />
            </div>
          </form>
        </div>
    </div>
    )
}