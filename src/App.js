import { Route } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Main from './components/Main/Main';
import MeContainer from './components/Me/MeContainer';
import RegisterContainer from './components/Register/RegisterContainer';
import BuyTicketsContainer from './components/Search/BuyTickets/BuyTicketsContainer';
import Search from './components/Search/Search';
import SuitableFlightsContainer from './components/Search/SuitableFlights/SuitableFlightsContainer';

function App() {
  return (
    <>
      <HeaderContainer />

      <Route exact path={'/'} render={() => <Main />}/>
      <Route path={'/search'} render={() => <Search />}/>
      <Route path={'/register'} render={() => <RegisterContainer />}/>
      <Route path={'/login'} render={() => <LoginContainer />}/>
      <Route path={'/me'} render={() => <MeContainer />}/>
      <Route path={'/see-suitable-flights'} render={() => <SuitableFlightsContainer />}/>
      <Route path={'/buy-tickets'} render={() => <BuyTicketsContainer />}/>

      <Footer />
    </>
  );
}

export default App;
