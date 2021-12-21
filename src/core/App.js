
import './App.css';
import {Routes, Route} from "react-router-dom";
import { homePath, registerPath } from '../constants';
import HomeComponent from './HomeComponent';
import RegisterComponent from './RegisterComponent';

const App = () => {
  return (
<Routes>
<Route path={registerPath} element={<RegisterComponent/>}>
      </Route>
      <Route path={homePath} element={<HomeComponent/>}>
      </Route>
</Routes>
  );
}

export default App;
