import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import './contacto.css'
export const ContactUs = () => {
  const form = useRef();
  init("user_OniMjnYHjEfbCIN28g5kY");

  const enviarDatos = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w7ggfod', 'template_sey87fh', e.target, 'user_OniMjnYHjEfbCIN28g5kY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
        <div className="formulario">
          <div className="container">
                <h1 className="h1form">Formulario de contacto</h1>
                <form className="row" onSubmit={enviarDatos}>
                      <fieldset>
                        <div className="form-control">
                            <input 
                                type="text" 
                                placeholder="Nombre" 
                                className="form-control" 
                                name="name" />
                        </div>
                        <div className="form-control">
                            <input 
                                type="text" 
                                placeholder="Apellido" 
                                className="form-control" 
                                name="surname" />
                        </div>
                        <div className="form-control">
                            <input 
                                type="text" 
                                placeholder="Email" 
                                className="form-control" 
                                name="email" />
                        </div>
                        <div className="form-control">
                            <textarea
                                type="text" 
                                placeholder="Consulta" 
                                className="form-control" 
                                rows="10" 
                                cols="40"
                                name="message" />
                        </div>

                      
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    
                      
                        </fieldset>
                    
                </form>

                
          </div>
        </div>
  );
};
