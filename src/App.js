import './App.css';
import Addmovie from './components/Addmovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movie from './components/Movie';

function App() {
      return(
    <div className="App">
     <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Movie/>}></Route>
        <Route path='/add' 
        element={<Addmovie data={{name:'',director:'',language:'',genere:'',releaseyear:''}} method="post"/>}/>
      </Routes>
      </BrowserRouter> 
    </div>
      );
}

export default App;
