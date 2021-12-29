import React from "react";
import './cuerpo.css';
import imagenA from '../../assets/img/A.png';
import imagenB from '../../assets/img/B.png';
import imagenC from '../../assets/img/C.png';
import imagenD from '../../assets/img/D.png';
import imagenE from '../../assets/img/E.png';

export const Cuerpo = () =>{
    
    return (
        <>
          <div className="cuerpo1">
             
          </div>
            
         
           <div className="cuerpo2">
              <img src={imagenA} alt="A" className="item-1"/>
              <img src={imagenB} alt="B" className="item-2"/>
              <img src={imagenC} alt="C" className="item-3"/>
              <img src={imagenD} alt="D" className="item-4"/>
              <img src={imagenE} alt="E" className="item-5"/>

              
           </div>

           <div className="cuerpo3">
                <h5 >En LoopBook lo que intentamos es que alguien que tenga un mínimo de un libro en casa pueda cambiarlo por otro que desee. De esta manera el libro comenzara un viaje por las manos de múltiples usuarios y que puede que no acabe nunca, hasta que uno de ellos decida quedárselo para su colección. Si un usuario busca un libro y el dueño de ese libro también está interesado en algún libro de la colección que el primer usuario tenga en la App, se realizará el intercambio.</h5>
           </div>
           
         
       </>
    )
}