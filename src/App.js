import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import FilmsPage from './pages/Films/FilmsPage';
import FilmDetailPage from './pages/Films/FilmDetailPage';
import PeoplePage from './pages/People/PeoplePage';
import PlanetsPage from './pages/Planets/PlanetsPage';
import SpeciesPage from './pages/Species/SpeciesPage';
import StarshipsPage from './pages/Starships/StarshipsPage';
import VehiclesPage from './pages/Vehicles/VehiclesPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={FilmsPage} />
          <Route exact path="/films" component={FilmsPage} />
          <Route path="/films/:id" component={FilmDetailPage} />
          <Route exact path="/people" component={PeoplePage} />
          <Route exact path="/planets" component={PlanetsPage} />
          <Route exact path="/species" component={SpeciesPage} />
          <Route exact path="/starships" component={StarshipsPage} />
          <Route exact path="/vehicles" component={VehiclesPage} />
          <Redirect to="/" />
        </Switch>.
      </div>
    </Router>
  );
};

export default App;
