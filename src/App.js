import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './pages/Home/Index';
import Login from './pages/Login/Index';
import Register from './pages/Register/Index';
import Settings from './pages/Settings/Index';
import Goals from './pages/Goals/Index';
import Entries from './pages/Entries/Index';
import PrivateRoute from './components/PrivateRouteLogin/Index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Navigate to="/entrar" />} />
              <Route path="/inicio" element={
                <PrivateRoute login='entrar'>
                  <Home />
                </PrivateRoute>
              }
              />
              <Route path="/entrar" element={<Login />} />
              <Route path="/cadastrar" element={<Register />} />
              <Route path="/configuracoes" element={
                <PrivateRoute login='entrar'>
                  <Settings />
                </PrivateRoute>
              }
              />
              <Route path="/metas" element={
                <PrivateRoute login='entrar'>
                  <Goals />
                </PrivateRoute>
              }
              />
              <Route path="/lancamentos" element={
                <PrivateRoute login='entrar'>
                  <Entries />
                </PrivateRoute>
              }
              />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
