import logo from '../logo.svg';
import './App.css';
import Todos from './components/todoList/todos.js';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
          <title>Todo List</title>
      </Helmet>
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
