import { BrowserRouter } from 'react-router';
import AppRouter from './modules/AppRouter';
import { createContext } from 'react';
import { scaffold, staticApi as staticConnector } from './lib/api';
// import AppRouter from './modules/AppRouter';
// import { ApiContext } from './context';
// import api from './lib/api';
// import { useAppSelector } from './hooks/redux';


function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const endpoints = {
    ai: {
      predict: 'post',
    },
  };
  const api = scaffold(API_URL, 'rest')(endpoints);
  const staticApi = staticConnector(API_URL);

  const ApiContext = createContext({ api, staticApi });

  return (
    <ApiContext.Provider value={{ api, staticApi }}>

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApiContext.Provider>
  );
}

export default App;
