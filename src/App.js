import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about'
import './App.css';

function App(props) {

  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <div className="app_react_sub">
        <header className="app_react_sub_header">
          <NavLink className="button" to="/">HOME</NavLink>
          <NavLink className="button" to="/about">ABOUT</NavLink>
        </header>
        <div className="app_react_sub_body">
          <Routes>
            <Route path='/' element={<Home {...props}/>} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
