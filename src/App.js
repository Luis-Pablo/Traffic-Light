import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function TrafficLight () {
  return (
    <div className='container'>
      <div className='semaforo bg-dark p-2'>
        <div className='row bg-danger rounded-circle my-2'></div>
        <div className='row bg-warning rounded-circle'></div>
        <div className='row bg-success rounded-circle'></div>
      </div>
    </div>
  )
  


 
}

export default TrafficLight;
