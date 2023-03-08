import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';

function TrafficLight() {
  
  
  const color = {
    rojo: 'bg-danger',
    amarillo: 'bg-warning',
    verde: 'bg-success'
  }
  const [ligth, setLigth] = useState(color)


  return (
    <div className='container'>
      <div className='semaforo bg-dark justify-content-center"'>
        <button className={`row rounded-circle ro ${ligth.rojo}`}
          onClick={() => setLigth({rojo: 'rojo'}) }
        >         
        </button>
        <button className={`row rounded-circle am ${ligth.amarillo}`}
          onClick={() => setLigth({amarillo: 'amarillo'})}
        >

        </button>
        <button className={`row rounded-circle ve ${ligth.verde}`}
          onClick={() => setLigth({ verde: 'verde' })}
        ></button>
      </div>
      <div>
        
      </div>
    </div>
  )
  


 
}

export default TrafficLight;
