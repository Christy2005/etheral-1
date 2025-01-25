import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEntry from './AddEntry';
import DiaryEntries from './DiaryEntries';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddEntry />} /> {/* Set AddEntry as the default route */}
        <Route path="/entries" element={<DiaryEntries />} />
      </Routes>
    </Router>
  );
};

export default App;