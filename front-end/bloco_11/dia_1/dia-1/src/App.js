import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
    );
  }
  
  const arrayTAsk = ['Code Review', 'Refatorar Portifolio', 'Aprender MongoDB'];
  
  function App() {
    return (
      <div>{
        arrayTAsk.map((task) => Task(task))
      }
      </div>
      );
    }
    
    export default App;
