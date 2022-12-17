import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
// import {makeStyles} from '@material-ui/core';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(()=>({
  App: {
     backgroundColor: "#14161a",
     color: 'white',
     minHeight: "100vh",
  }
}));
function App() {
  const classes = useStyles()
    console.log(classes.App);
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header/>
      <Routes>
       <Route exact path='/' element={<Homepage/>} />
       <Route path='/coins/:id' element={<CoinPage/>} />
       <Route exact path='/about' element={<AboutUs/>} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
