import logo from '../logo.svg';
import './App.css';
import Todos from './components/todoList/todos.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo List
      </header>
      <div className="App-body">
        <Todos/>
      </div>
      
    </div>
  );
}

export default App;
