import { Route, Routes, Navigate } from 'react-router';
import routes from '../lib/routes';


import { AppLayout } from '../Layout';

const AppRouter = () =>
  (
    <AppLayout>

      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  )
  // }
;

export default AppRouter;
