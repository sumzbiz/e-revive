import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Alert from './pages/Alert';
import TrashTracking from './pages/TrashTracking';
import DeviceStatus from './pages/DeviceStatus';
import Return from './pages/Return';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="alert" element={<Alert />} />
          <Route path="trash-tracking" element={<TrashTracking />} />
          <Route path="device-status" element={<DeviceStatus />} />
          <Route path="return" element={<Return />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;