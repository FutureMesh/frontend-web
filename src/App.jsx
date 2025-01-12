import { BrowserRouter } from 'react-router';
import AppRouter from './modules/AppRouter';
// import AppRouter from './modules/AppRouter';
// import { ApiContext } from './context';
// import api from './lib/api';
// import { useAppSelector } from './hooks/redux';


function App() {
  // const token = useAppSelector((state) => state.user.accessToken);
  // const alerts = useAppSelector((state) => state.messages.messages);
  return (
    // <ApiContext.Provider value={{ api: api(token) }}>
  // <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <Stack sx={{ width: '30%', position: 'fixed', top: 15, right: 15, zIndex: 9999999999 }} spacing={2}>
            {alerts.map((alert, idx) => (
              <AlertMessage key={idx} text={alert.text} type={alert.type} id={alert.id} />
            ))}
          </Stack> */}

      <AppRouter />
    </BrowserRouter>
  // </ThemeProvider>
    // </ApiContext.Provider>
  );
}

export default App;
