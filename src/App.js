import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
// import { Button } from 'bootstrap';
import Button from './Components/Button';
function App() {
  return (
    <div className="App">
      <Header/>
     <Todo/>
      <Button/>
     <Footer/>
    </div>
  );
}

export default App;
