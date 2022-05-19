import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'
import Header from './Components/Header'
import FooterPage from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
     <Todo/>
     <Footer/>
    </div>
  );
}

export default App;
