import React from 'react';
import './equipo.css';
import A from '../../assets/img/Raul.png';
import B from '../../assets/img/Jorge.png';
import C from '../../assets/img/Sergio.png';

export const Equipo = () => {
    return (
        <div className="equipo">
          
           <h1>DESARROLLADORES</h1>


           <div class="flex-container">
                


                            
                            <img src={A} alt="A" className="imagen-1"/>
                            <span className="raul">Raúl González</span>
                          
                           
                        
                            <img src={B} alt="B" className="imagen-2"/>
                            <span className='jorge'>Jorge Portillo</span>
                            
                      
                            
                            <img src={C} alt="C" className="imagen-3"/>

                            <span className='sergio'>Sergio Olea</span>
                    
                
                
            </div>

         
         
                

       </div>
                

                
          
    )
}