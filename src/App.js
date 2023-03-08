import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function TrafficLight () {
  return (
    <div className='container'>
      <div className='semaforo bg-dark justify-content-center"'>
        <div className='row  bg-danger rounded-circle'></div>
        <div className='row bg-warning rounded-circle'></div>
        <div className='row bg-success rounded-circle'></div>
      </div>
    </div>
  )
  


 
}

export default TrafficLight;
