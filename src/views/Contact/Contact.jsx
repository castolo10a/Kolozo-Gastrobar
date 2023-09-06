import { useRef, useState } from "react";
// import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";

const initialState = {
    user_name: '',
    user_email: '',
    message: ''
  }

export default function Contact () {
    const form = useRef();
    const [input, setInput] = useState(initialState);
    const [err, setErr] = useState(initialState);
  
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
      event.preventDefault();
      if(Object.values(err).length > 0 || Object.values(input).length === 0){
        Swal.fire({
          title: 'Complete los campos Obligatorios!',
          text: 'Revise los datos ingresados',
          icon: 'error',
          confirmButtonText: 'Ok',
          customClass: {
            title: 'font-norse md:text-4xl',
          }
        })
      }else{
        Swal.fire({
          title: 'Mensaje enviado con exito!',
          text: 'Responderemos a la menor brevedad posible',
          icon: 'success',
          confirmButtonText: 'Ok',
          customClass: {
            title: 'font-norse md:text-4xl',
          }
        })
        // emailjs
        //   .sendForm(
        //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
        //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        //     form.current,
        //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        //   )
        //   .then(
        //     (result) => {
        //       console.log(result.text)
        //     },
        //     (error) => {
        //       console.log(error.text)
        //     }
        //   )
        setInput(initialState)
      }
    }

    return (
    <div>
        <div className="text-center pt-24">
          <h1 className="animate-fade-down animate-duration-[3000ms] text-black font-norse text-6xl">
            CONTACTO
          </h1>
        </div>
        <div className="w-full mx-auto px-4 md:px-24">
        <div className="animate-fade-down animate-duration-[5000ms] py-8">
              <p className="pt-2 md:pt-0 md:py-0 font-sans text-black md:text-2xl text-center md:pb-4">
                Nuestro equipo está aquí para brindarte asistencia en cualquier consulta o solicitud que puedas tener. Si deseas ponerte en contacto con nosotros, por favor utiliza el formulario que encontrarás a continuación. También puedes conectarte con nosotros a través de nuestras redes sociales. ¡Esperamos ansiosamente tus preguntas y comentarios!
              </p>
              <p className="pt-2 md:pt-0 md:py-0 font-sans text-black md:text-2xl text-center">
                Estamos comprometidos en responder a la brevedad posible y en brindarte la atención que mereces. Tu opinión es esencial para nosotros y esperamos poder ayudarte en todo lo que necesites. ¡No dudes en contactarnos!
              </p>
        </div>
        <form
            className="flex flex-col mx-auto text-center"
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row md:justify-around md:py-4">
                <div className="flex flex-col w-full md:w-auto md:mb-0 mb-4">
                    <input
                        placeholder="Nombre*"
                        type="text"
                        name="user_name"
                        value={input.user_name}
                        id="name"
                        className="animate-fade-right animate-duration-[5000ms] h-12 md:w-80 px-3 font-sans bg-transparent border border-solid border-black rounded-lg text-black md:text-2xl"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <span
                        hidden={!err.user_name}
                        className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-lg"
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
                        className="animate-fade-left animate-duration-[5000ms] h-12 md:w-80 px-3 font-sans bg-transparent border border-solid border-black outline-none rounded-lg text-black md:text-2xl"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                    <span
                        hidden={!err.user_email}
                        className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-lg"
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
                  className="animate-fade-down animate-duration-[5000ms] bg-transparent px-3 py-2 font-sans bg-transparent border border-solid border-black outline-none rounded-lg text-black md:text-2xl"
                  autoComplete="off"
                  onChange={handleChange}
                ></textarea>
                  <span
                    hidden={!err.message}
                    className="before:content-['*'] before:mr-.75 before:text-red-700 text-red-700 italic text-lg"
                  >
                    {err.message}
                  </span>
              </div>
            <div className="animate-fade-down animate-duration-[5000ms] py-8">
                <ButtonSubmit />
            </div>
          </form>
        </div>
    </div>
    )
}
