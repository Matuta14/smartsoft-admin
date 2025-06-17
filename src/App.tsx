import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { RoutesMap } from './routes';
import { MainLayoutStyled } from './shared-components/styled';
import { Header } from './shared-components/header/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesMap.map(
          ({ path, Component, noHeader, centerLayout }, i: number) => (
            <Route
              key={i}
              path={path}
              element={
                <MainLayoutStyled center={centerLayout ? centerLayout : false}>
                  {!noHeader && <Header />}
                  {Component}
                </MainLayoutStyled>
              }
            />
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
