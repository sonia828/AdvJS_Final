import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
     <Todo/>
    </div>
  );
}

export default App;
